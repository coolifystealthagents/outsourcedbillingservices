import fs from 'node:fs';
import path from 'node:path';

const source = fs.readFileSync('app/sep28-research.ts', 'utf8');
const data = fs.readFileSync('app/data.ts', 'utf8');
const slugs = [...source.matchAll(/slug: '([^']+)'/g)].map((match) => match[1]).slice(0, 5);
if (slugs.length !== 5 || new Set(slugs).size !== 5) throw new Error(`expected exactly 5 unique slugs, found ${slugs.length}`);
if (!data.includes("import { sep28ResearchBatch } from './sep28-research';") || !data.includes('researchPosts.push(...sep28ResearchBatch')) throw new Error('research collection registration missing');
if ((source.match(/published = '2026-09-28'/g) || []).length !== 1) throw new Error('publication date mismatch');

const decode = (value) => value
  .replace(/<[^>]+>/g, ' ')
  .replaceAll('&amp;', '&').replaceAll('&#x27;', "'").replaceAll('&quot;', '"')
  .replaceAll('&lt;', '<').replaceAll('&gt;', '>').replace(/\s+/g, ' ').trim();
const words = (value) => value.match(/\b[\w’-]+\b/g) || [];
const shingles = (value) => {
  const list = words(value.toLowerCase());
  return new Set(Array.from({ length: Math.max(0, list.length - 4) }, (_, index) => list.slice(index, index + 5).join(' ')));
};
const bodies = new Map();
const sitemap = fs.readFileSync('.next/server/app/sitemap.xml.body', 'utf8');
for (const slug of slugs) {
  const renderedPath = path.join('.next/server/app/research', `${slug}.html`);
  if (!fs.existsSync(renderedPath)) throw new Error(`missing rendered route: ${slug}`);
  const rendered = fs.readFileSync(renderedPath, 'utf8');
  const bodyMatch = rendered.match(/<div class="card">(.*?)<\/div><aside/s);
  if (!bodyMatch) throw new Error(`missing rendered body: ${slug}`);
  const substantive = decode(bodyMatch[1]).split('Source method.')[0].trim();
  const count = words(substantive).length;
  if (count < 1200) throw new Error(`${slug}: ${count} substantive words; expected at least 1200`);
  const canonical = `https://outsourcedbillingservices.com/research/${slug}`;
  if (!rendered.includes(canonical)) throw new Error(`${slug}: canonical missing`);
  if (!rendered.includes('2026-09-28') || !rendered.includes('datePublished')) throw new Error(`${slug}: rendered date/schema missing`);
  if (!rendered.includes('research-medical-billing-remittance-batch-reconciliation.png')) throw new Error(`${slug}: featured image missing`);
  if (!sitemap.includes(`/research/${slug}`)) throw new Error(`${slug}: sitemap entry missing`);
  bodies.set(slug, substantive);
  console.log(`${slug}: ${count} substantive words`);
}

let maximum = { score: 0, pair: [] };
for (let left = 0; left < slugs.length; left += 1) {
  for (let right = left + 1; right < slugs.length; right += 1) {
    const a = shingles(bodies.get(slugs[left]));
    const b = shingles(bodies.get(slugs[right]));
    const intersection = [...a].filter((value) => b.has(value)).length;
    const score = intersection / new Set([...a, ...b]).size;
    if (score > maximum.score) maximum = { score, pair: [slugs[left], slugs[right]] };
  }
}
if (maximum.score >= 0.5) throw new Error(`maximum five-word-shingle overlap ${(maximum.score * 100).toFixed(2)}%`);
console.log(`maximum five-word-shingle Jaccard: ${(maximum.score * 100).toFixed(2)}% (${maximum.pair.join(' vs ')})`);
console.log('September 28 Research validation passed: exact 5, rendered metadata/routes/assets/sitemap, body depth, and distinctness');
