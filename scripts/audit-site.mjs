#!/usr/bin/env node
import { writeFile } from 'node:fs/promises';

const base = new URL(process.env.BASE_URL || 'http://127.0.0.1:3000');
const canonicalOrigin = 'https://outsourcedbillingservices.com';
const concurrency = Math.max(1, Number(process.env.AUDIT_CONCURRENCY || 12));
const output = process.env.AUDIT_OUTPUT || 'site-audit.json';
const timeoutMs = Math.max(1000, Number(process.env.AUDIT_TIMEOUT_MS || 15000));

const decode = (value = '') => value.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/<[^>]+>/g, '').trim();
const attr = (html, tag, name) => [...html.matchAll(new RegExp(`<${tag}\\b[^>]*\\b${name}=["']([^"']+)["'][^>]*>`, 'gi'))].map((match) => match[1]);
const one = (html, re) => decode(html.match(re)?.[1] || '');
const localUrl = (url) => {
  const parsed = new URL(url, canonicalOrigin);
  return new URL(`${parsed.pathname}${parsed.search}`, base).href;
};
const canonicalUrl = (url) => {
  const parsed = new URL(url, base);
  return new URL(`${parsed.pathname}${parsed.search}`, canonicalOrigin).href;
};
async function fetchText(url, redirect = 'manual') {
  const response = await fetch(url, { redirect, signal: AbortSignal.timeout(timeoutMs), headers: { 'user-agent': 'OBS-V3-release-audit/1.0' } });
  return { response, text: await response.text() };
}
async function mapLimit(values, worker) {
  const result = new Array(values.length);
  let cursor = 0;
  await Promise.all(Array.from({ length: Math.min(concurrency, values.length) }, async () => {
    while (cursor < values.length) { const index = cursor++; result[index] = await worker(values[index], index); }
  }));
  return result;
}

const sitemap = await fetchText(new URL('/sitemap.xml', base), 'follow');
if (!sitemap.response.ok) throw new Error(`Sitemap failed: ${sitemap.response.status}`);
const sitemapCanonicalUrls = [...sitemap.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => decode(match[1]));
const sitemapUrls = sitemapCanonicalUrls.map(localUrl);
const pages = await mapLimit(sitemapUrls, async (url, index) => {
  try {
    const { response, text } = await fetchText(url);
    const title = one(text, /<title[^>]*>([\s\S]*?)<\/title>/i);
    const description = one(text, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)/i) || one(text, /<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i);
    const canonical = one(text, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)/i) || one(text, /<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);
    const robots = one(text, /<meta[^>]+name=["']robots["'][^>]+content=["']([^"']*)/i);
    const h1 = (text.match(/<h1\b/gi) || []).length;
    const expectedCanonical = sitemapCanonicalUrls[index];
    const links = attr(text, 'a', 'href').filter((href) => href.startsWith('/') || href.startsWith(canonicalOrigin)).map((href) => canonicalUrl(href));
    const images = attr(text, 'img', 'src').filter((src) => src.startsWith('/') || src.startsWith(canonicalOrigin)).map((src) => canonicalUrl(src));
    return { url: expectedCanonical, status: response.status, location: response.headers.get('location'), title, description, canonical, robots, h1, links, images, errors: [
      ...(response.status !== 200 ? [`status:${response.status}`] : []),
      ...(response.headers.get('location') ? ['redirect-in-sitemap'] : []),
      ...(!title ? ['missing-title'] : []),
      ...(!description ? ['missing-description'] : []),
      ...(canonical !== expectedCanonical ? [`canonical:${canonical || 'missing'}`] : []),
      ...(h1 !== 1 ? [`h1-count:${h1}`] : []),
      ...(/noindex/i.test(robots) ? ['noindex-in-sitemap'] : []),
    ] };
  } catch (error) { return { url: sitemapCanonicalUrls[index], status: 0, links: [], images: [], errors: [`fetch:${error.message}`] }; }
});

const internalTargets = [...new Set(pages.flatMap((page) => page.links))];
const linkResults = await mapLimit(internalTargets, async (canonical) => {
  try { const { response } = await fetchText(localUrl(canonical), 'follow'); return { url: canonical, status: response.status, ok: response.ok }; }
  catch (error) { return { url: canonical, status: 0, ok: false, error: error.message }; }
});
const imageTargets = [...new Set(pages.flatMap((page) => page.images))];
const imageResults = await mapLimit(imageTargets, async (canonical) => {
  try { const response = await fetch(localUrl(canonical), { redirect: 'follow', signal: AbortSignal.timeout(timeoutMs) }); return { url: canonical, status: response.status, ok: response.ok, bytes: Number(response.headers.get('content-length') || 0) }; }
  catch (error) { return { url: canonical, status: 0, ok: false, bytes: 0, error: error.message }; }
});
const duplicateValues = (key) => {
  const groups = new Map();
  for (const page of pages) if (page[key]) groups.set(page[key], [...(groups.get(page[key]) || []), page.url]);
  return [...groups.entries()].filter(([, urls]) => urls.length > 1).map(([value, urls]) => ({ value, urls }));
};
const report = {
  base: base.href, generatedAt: new Date().toISOString(), sitemapRoutes: pages.length,
  pageFailures: pages.filter((page) => page.errors.length), canonicalFailures: pages.filter((page) => page.errors.some((error) => error.startsWith('canonical'))).length,
  multipleH1Failures: pages.filter((page) => page.h1 !== 1).length,
  internalLinksChecked: linkResults.length, brokenLinks: linkResults.filter((item) => !item.ok),
  imagesChecked: imageResults.length, brokenImages: imageResults.filter((item) => !item.ok),
  duplicateTitles: duplicateValues('title'), duplicateDescriptions: duplicateValues('description'), pages, linkResults, imageResults,
};
await writeFile(output, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({ output, sitemapRoutes: report.sitemapRoutes, pageFailures: report.pageFailures.length, canonicalFailures: report.canonicalFailures, multipleH1Failures: report.multipleH1Failures, internalLinksChecked: report.internalLinksChecked, brokenLinks: report.brokenLinks.length, imagesChecked: report.imagesChecked, brokenImages: report.brokenImages.length, duplicateTitles: report.duplicateTitles.length, duplicateDescriptions: report.duplicateDescriptions.length }, null, 2));
if (report.pageFailures.length || report.brokenLinks.length || report.brokenImages.length || report.duplicateTitles.length || report.duplicateDescriptions.length) process.exitCode = 1;
