import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { sep18ResearchBatch } from '../app/sep18-research.ts';

const expectedDate = '2026-09-18';
assert.equal(sep18ResearchBatch.length, 5, 'the run must contain exactly five articles');
assert.equal(new Set(sep18ResearchBatch.map(x => x.slug)).size, 5, 'slugs must be unique');

const priorSource = execFileSync('git', ['show', 'origin/main:app/data.ts'], { encoding: 'utf8' });
for (const article of sep18ResearchBatch) {
  assert.match(article.slug, /^research-outsourced-billing-[a-z0-9-]+-2026$/);
  assert.equal(article.published, expectedDate);
  assert.equal(article.datePublished, expectedDate);
  assert.equal(article.updated, expectedDate);
  assert.ok(!priorSource.includes(article.slug), `${article.slug} already exists on origin/main`);
  assert.ok(article.body.join(' ').trim().split(/\s+/).length >= 1200, `${article.slug} is short`);
  assert.ok(article.body.filter(x => x.includes('Checked September 18, 2026')).length >= 3, `${article.slug} needs three checked sources`);
  assert.ok(article.body.some(x => x.startsWith('Limitations.')));
  assert.ok(article.body.some(x => x.startsWith('Uncertainty.')));
  assert.ok(article.body.some(x => x.startsWith('Niche-specific conclusion.')));
  assert.ok(article.serviceCta.href.startsWith('/services/'));
}

console.log(`sep18 research contract passed: ${sep18ResearchBatch.length} new articles, all >=1,200 words`);
