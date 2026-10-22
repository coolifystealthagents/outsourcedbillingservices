import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const aliases = read('app/route-aliases.ts');
const sitemap = read('app/sitemap.xml/route.ts');
const blog = read('app/blog/[slug]/page.tsx');
const research = read('app/research/[slug]/page.tsx');
const pagination = read('app/blog/page/[page]/page.tsx');
const data = read('app/data.ts');
const audit = read('scripts/audit-site.mjs');

assert.match(aliases, /export const blogAliases/);
assert.match(aliases, /export const researchAliases/);
assert.match(aliases, /export const redirectPaths/);
assert.match(blog, /import \{ blogAliases \} from '\.\.\/\.\.\/route-aliases'/);
assert.match(research, /import \{ researchAliases \} from '\.\.\/\.\.\/route-aliases'/);
assert.match(sitemap, /import \{ redirectPaths \} from "\.\.\/route-aliases"/);
assert.match(sitemap, /paths\.filter\(\(path\) => !redirectPaths\.has\(path\)\)/);
assert.match(sitemap, /sep23BlogSlugs\.length/);
assert.match(pagination, /import \{sep23BlogBatch\}/);
assert.match(pagination, /const daily=\[\.\.\.sep23BlogBatch\.map/);
assert.match(data, /registeredResearchSlugs = new Set<string>\(\)/);
assert.match(data, /researchPosts\.splice\(0, researchPosts\.length, \.\.\.canonicalResearchPosts\)/);
assert.doesNotMatch(data, /excerpt: 'How to study authorization timing[^\n]+excerpt:/);
for (const gate of ['sitemapRoutes', 'canonicalFailures', 'multipleH1Failures', 'internalLinksChecked', 'brokenLinks', 'brokenImages', 'duplicateTitles', 'duplicateDescriptions']) {
  assert.ok(audit.includes(gate), `site audit must report ${gate}`);
}
console.log('Route registry and full-site audit contract passed');
