import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import crypto from 'node:crypto';

const root = process.cwd();
const fail = (message) => { throw new Error(message); };
const decode = (value) => value.replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/<!-- -->/g, '');
const text = (html) => decode(html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
const sha = (value) => crypto.createHash('sha256').update(value).digest('hex');
const normalize = (value) => value.replace(/\s+/g, ' ').replace(/\s+([.,;:!?])/g, '$1').trim();

const blogLedger = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-10-05/blog.json', 'utf8'));
if (blogLedger.blogArticles.length !== 12) fail(`Expected 12 Blog ledger articles, got ${blogLedger.blogArticles.length}`);
const blogResults = [];
for (const article of blogLedger.blogArticles) {
  const source = fs.readFileSync(article.sourcePath, 'utf8').replace(/\r\n/g, '\n');
  const sourceHeading = source.indexOf('\n## Authoritative references');
  const sourceBody = source.slice(source.indexOf('\n') + 1, sourceHeading);
  const blocks = sourceBody.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean).map((p) => p.replace(/^##\s+/, '').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1').replace(/\s+/g, ' ').trim());
  const words = blocks.filter((_, i) => !sourceBody.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean)[i].startsWith('## ')).join(' ').match(/[A-Za-z0-9]+(?:[-'][A-Za-z0-9]+)*/g)?.length ?? 0;
  if (words < 900) fail(`${article.slug} has only ${words} substantive words`);
  const htmlPath = `.next/server/app/blog/${article.slug}.html`;
  const html = fs.readFileSync(htmlPath, 'utf8');
  const rendered = normalize(text(html));
  for (const block of blocks) if (!rendered.includes(normalize(block))) fail(`${article.slug} missing rendered block: ${block.slice(0, 80)}`);
  const canonical = `https://outsourcedbillingservices.com/blog/${article.slug}`;
  for (const required of [article.title, canonical, '2026-10-05', 'October 5, 2026', 'BlogPosting']) if (!decode(html).includes(required)) fail(`${article.slug} missing ${required}`);
  if (!html.includes('billing-dashboard.webp')) fail(`${article.slug} missing image`);
  blogResults.push({ slug: article.slug, words, sourceHash: sha(blocks.join('\n')) });
}

const sandbox = {};
const literalSource = fs.readFileSync('app/oct5-research-literal-bodies.ts', 'utf8').replace('export const oct5LiteralResearchBodies: Record<string, string[]> =', 'globalThis.bodies =');
vm.runInNewContext(literalSource, sandbox);
const researchEntries = Object.entries(sandbox.bodies);
if (researchEntries.length !== 5) fail(`Expected 5 Research bodies, got ${researchEntries.length}`);
const researchResults = [];
for (const [slug, paragraphs] of researchEntries) {
  const words = paragraphs.join(' ').match(/[A-Za-z0-9]+(?:[-'][A-Za-z0-9]+)*/g)?.length ?? 0;
  if (words < 1200) fail(`${slug} has only ${words} substantive words`);
  const html = fs.readFileSync(`.next/server/app/research/${slug}.html`, 'utf8');
  const rendered = normalize(text(html));
  for (const paragraph of paragraphs) if (!rendered.includes(normalize(paragraph))) fail(`${slug} missing rendered paragraph: ${paragraph.slice(0, 80)}`);
  const canonical = `https://outsourcedbillingservices.com/research/${slug}`;
  for (const required of [canonical, '2026-10-05', 'October 5, 2026', '"@type":"Article"']) if (!decode(html).includes(required)) fail(`${slug} missing ${required}`);
  if (!html.includes('research-medical-billing-remittance-batch-reconciliation.png')) fail(`${slug} missing image`);
  researchResults.push({ slug, words, sourceHash: sha(paragraphs.join('\n')) });
}

const blogIndex = fs.readFileSync('.next/server/app/blog.html', 'utf8');
for (const item of blogResults) if (!blogIndex.includes(`/blog/${item.slug}`)) fail(`Blog index missing ${item.slug}`);
const researchIndex = fs.readFileSync('.next/server/app/research.html', 'utf8');
for (const item of researchResults) if (!researchIndex.includes(`/research/${item.slug}`)) fail(`Research index missing ${item.slug}`);
const sitemap = fs.readFileSync('.next/server/app/sitemap.xml.body', 'utf8');
for (const item of [...blogResults.map((x) => `/blog/${x.slug}`), ...researchResults.map((x) => `/research/${x.slug}`)]) if (!sitemap.includes(item)) fail(`Sitemap missing ${item}`);

const images = [
  ['public/illustrations/getillustrations/inkdex-saas-illustrations-svg/billing-dashboard.webp', '52494646'],
  ['public/aug20-research-heroes/research-medical-billing-remittance-batch-reconciliation.png', '89504e47'],
];
const imageResults = images.map(([file, signature]) => {
  const bytes = fs.readFileSync(file);
  if (file.endsWith('.webp') && (bytes.slice(0, 4).toString('hex') !== signature || bytes.slice(8, 12).toString() !== 'WEBP')) fail(`Invalid WebP ${file}`);
  if (file.endsWith('.png') && bytes.slice(0, 4).toString('hex') !== signature) fail(`Invalid PNG ${file}`);
  return { file, bytes: bytes.length, signature: bytes.slice(0, 12).toString('hex') };
});

console.log(JSON.stringify({ passed: true, publicationTimezone: 'UTC', publicationDate: '2026-10-05', blog: blogResults, research: researchResults, images: imageResults }, null, 2));
