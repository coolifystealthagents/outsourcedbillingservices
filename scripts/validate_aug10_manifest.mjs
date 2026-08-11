import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const manifestPath = '.paperclip/aug10-2026/blog.json';
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const source = fs.readFileSync('app/data.ts', 'utf8');
const route = fs.readFileSync('app/blog/[slug]/page.tsx', 'utf8');
const index = fs.readFileSync('app/blog/page.tsx', 'utf8');
const fail = (message) => { throw new Error(message); };
const entries = manifest.entries;
if (manifest.schemaVersion !== 1 || manifest.contract !== 'sites3-aug10-public-date-v6') fail('manifest contract mismatch');
if (manifest.family !== 'blog' || manifest.domain !== 'outsourcedbillingservices.com' || manifest.repository !== 'coolifystealthagents/outsourcedbillingservices' || manifest.branch !== 'main') fail('manifest identity mismatch');
if (entries.length < manifest.minimum || entries.length < 22) fail('manifest count below minimum');
const slugs = new Set();
for (const entry of entries) {
  if (slugs.has(entry.slug)) fail(`duplicate slug: ${entry.slug}`);
  slugs.add(entry.slug);
  if (!/^\/blog\/[a-z0-9-]+$/.test(entry.route) || entry.route !== `/blog/${entry.slug}`) fail(`family route mismatch: ${entry.slug}`);
  if (entry.sourcePath !== 'app/data.ts' || entry.sourceDateField !== 'detail.published' || entry.sourceDate !== '2026-08-10' || entry.renderedDate !== '2026-08-10') fail(`date/source metadata mismatch: ${entry.slug}`);
  if (!/^[0-9a-f]{40}$/.test(entry.introducedByCommit)) fail(`bad provenance SHA: ${entry.slug}`);
  if (!source.includes(`'${entry.slug}'`)) fail(`source record missing: ${entry.slug}`);
  const sourceRecord = new RegExp(`(?:\\['|slug: ')${entry.slug}(?:'\\]|')[\\s\\S]*?published: '2026-08-10'`);
  if (!sourceRecord.test(source)) fail(`source date missing: ${entry.slug}`);
  const before = execFileSync('git', ['show', `${entry.introducedByCommit}^:app/data.ts`], { encoding: 'utf8' });
  const after = execFileSync('git', ['show', `${entry.introducedByCommit}:app/data.ts`], { encoding: 'utf8' });
  if (before.includes(`'${entry.slug}'`) || !after.includes(`'${entry.slug}'`)) fail(`diff provenance missing: ${entry.slug}`);
  if (!entry.renderedDateFields.includes('datePublished')) fail(`rendered date field missing: ${entry.slug}`);
}
if (!route.includes("datePublished: detail.published") || !route.includes('Published {detail.published}')) fail('article route does not expose source date');
if (!route.includes('alternates: { canonical')) fail('canonical generation missing');
if (!fs.readFileSync('app/sitemap.xml/route.ts', 'utf8').includes('blogPosts.map(p=>`/blog/${p.slug}`)')) fail('blog sitemap eligibility missing');
if (!index.includes('blogPosts.slice(0,20)')) fail('blog index source missing');
const indexBlock = source.slice(source.indexOf('export const blogPosts = ['), source.indexOf('export const staffingOffer'));
if (!indexBlock.includes('...thirdBlogBatch') || indexBlock.indexOf('...thirdBlogBatch') > indexBlock.indexOf("slug: 'philippines-medical-billing-audit-checklist'")) fail('August 10 content does not precede older content');
console.log(`PASS: ${entries.length} blog entries, source/rendered dates, provenance, canonical, sitemap, and index checks`);
