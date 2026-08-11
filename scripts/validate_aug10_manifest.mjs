import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const manifest = JSON.parse(fs.readFileSync('.paperclip/aug10-2026/blog.json', 'utf8'));
const source = fs.readFileSync('app/data.ts', 'utf8');
const route = fs.readFileSync('app/blog/[slug]/page.tsx', 'utf8');
const index = fs.readFileSync('app/blog/page.tsx', 'utf8');
const fail = (message) => { throw new Error(message); };
const topKeys = ['schemaVersion','contract','targetDate','family','domain','repository','branch','minimum','priorRunId','priorIssueId','validationCommands','cleanBuildPassed','existingCompliancePassed','indexNewestFirstPassed','entries'];
if (JSON.stringify(Object.keys(manifest)) !== JSON.stringify(topKeys)) fail('manifest top-level keys mismatch');
if (manifest.schemaVersion !== 1 || manifest.contract !== 'sites3-aug10-public-date-v6' || manifest.targetDate !== '2026-08-10' || manifest.family !== 'blog' || manifest.domain !== 'outsourcedbillingservices.com' || manifest.repository !== 'coolifystealthagents/outsourcedbillingservices' || manifest.branch !== 'main' || manifest.minimum !== 22) fail('manifest contract mismatch');
if (manifest.priorRunId !== 'ab89c755-3633-4ba9-8fde-dbb1943ba523' || manifest.priorIssueId !== '0698ed02-d2af-4b5e-ba7b-9a7b3c22b781') fail('prior identity mismatch');
if (manifest.entries.length !== 25 || new Set(manifest.entries.map((e) => e.slug)).size !== 25) fail('entry count or uniqueness mismatch');
const entryKeys = ['slug','route','sourcePath','provenance','introducedByCommit','sourceDateField','sourceDate','renderedDateFields','renderedDate'];
for (const entry of manifest.entries) {
  if (JSON.stringify(Object.keys(entry)) !== JSON.stringify(entryKeys)) fail(`entry keys mismatch: ${entry.slug}`);
  if (entry.route !== `/blog/${entry.slug}` || entry.sourcePath !== 'app/data.ts' || entry.provenance !== 'original-aug10-batch' || entry.sourceDateField !== 'detail.published' || entry.sourceDate !== '2026-08-10' || entry.renderedDate !== '2026-08-10' || JSON.stringify(entry.renderedDateFields) !== JSON.stringify(['datePublished'])) fail(`entry metadata mismatch: ${entry.slug}`);
  if (!/^[0-9a-f]{40}$/.test(entry.introducedByCommit) || !source.includes(`'${entry.slug}'`)) fail(`source identity mismatch: ${entry.slug}`);
  const before = execFileSync('git', ['show', `${entry.introducedByCommit}^:app/data.ts`], { encoding: 'utf8' });
  const after = execFileSync('git', ['show', `${entry.introducedByCommit}:app/data.ts`], { encoding: 'utf8' });
  if (before.includes(`'${entry.slug}'`) || !after.includes(`'${entry.slug}'`)) fail(`introduction provenance mismatch: ${entry.slug}`);
}
if (!route.includes('datePublished: detail.published') || !route.includes('Published {detail.published}')) fail('renderer date exposure missing');
if (!index.includes('blogPosts.slice(0,20)')) fail('blog index source missing');
const blogIndex = source.slice(source.indexOf('export const blogPosts = ['), source.indexOf('export const staffingOffer'));
if (!blogIndex.includes('...secondBlogBatch') || blogIndex.indexOf('...secondBlogBatch') > blogIndex.indexOf("slug: 'philippines-medical-billing-audit-checklist'")) fail('August 10 batch ordering missing');
console.log(JSON.stringify({ status: 'PASS', acceptedCount: manifest.entries.length, sourceDate: '2026-08-10', indexNewestFirst: true }));
