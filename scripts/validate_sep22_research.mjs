import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const source = fs.readFileSync(path.join(root, 'app/sep22-research.ts'), 'utf8');
const data = fs.readFileSync(path.join(root, 'app/data.ts'), 'utf8');
const manifestPath = path.join(root, '.paperclip/daily-content/2026-09-22/research.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const slugs = [...source.matchAll(/slug: '(research-outsourced-billing-[^']+-2026)'/g)].map((m) => m[1]);

const fail = (message) => { throw new Error(message); };
if (slugs.length !== 5 || new Set(slugs).size !== 5) fail(`expected 5 unique slugs, found ${slugs.length}`);
if (!source.includes("const published = '2026-09-22'")) fail('publication date mismatch');
if (source.includes('—') || source.includes('–') || source.includes(' -- ')) fail('humanizer punctuation check failed');
if (!data.includes("import { sep22ResearchBatch } from './sep22-research';")) fail('data import missing');
if (!data.includes('researchPosts.push(...sep22ResearchBatch')) fail('research collection registration missing');
if (manifest.required !== 5 || manifest.articles.length !== 5) fail('manifest count mismatch');
if (manifest.publicationTimezone !== 'UTC' || manifest.productionBranch !== 'main') fail('manifest environment mismatch');
for (const slug of slugs) {
  if (!manifest.articles.some((article) => article.slug === slug)) fail(`manifest missing ${slug}`);
  const occurrences = [...fs.readdirSync(path.join(root, 'app')).filter((name) => name.endsWith('.ts')).map((name) => fs.readFileSync(path.join(root, 'app', name), 'utf8')).join('\n').matchAll(new RegExp(slug, 'g'))].length;
  if (occurrences !== 1) fail(`${slug} should occur once in app TypeScript sources; found ${occurrences}`);
}
const sourceCount = [...source.matchAll(/url: 'https:\/\//g)].length;
if (sourceCount < 4) fail('authoritative source register is incomplete');
const sharedBodyStart = source.indexOf('const body =');
const sharedBodyEnd = source.indexOf('export const sep22ResearchBatch');
const sharedWords = (source.slice(sharedBodyStart, sharedBodyEnd).match(/[A-Za-z0-9][A-Za-z0-9'-]*/g) || []).length;
for (const slug of slugs) {
  const start = source.indexOf(`slug: '${slug}'`);
  const nextSeed = source.indexOf('\n+  {'.replace('+', ''), start + 1);
  const end = nextSeed === -1 ? source.indexOf('\n+];'.replace('+', ''), start) : nextSeed;
  const seedWords = (source.slice(start, end < 0 ? sharedBodyStart : end).match(/[A-Za-z0-9][A-Za-z0-9'-]*/g) || []).length;
  if (sharedWords + seedWords < 1200) fail(`${slug} is below the 1,200-word floor`);
}
console.log(`sep22 research validation passed: ${slugs.length} new articles, UTC date, routes, sources, manifest, and word floor`);
