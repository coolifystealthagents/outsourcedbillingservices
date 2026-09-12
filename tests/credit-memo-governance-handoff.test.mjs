import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/data.ts', import.meta.url), 'utf8');
const slug = 'research-medical-billing-credit-memo-governance';
const start = source.indexOf(`slug: '${slug}'`);
const end = source.indexOf("slug: 'research-medical-billing-collections-follow-up'", start);

assert.ok(start >= 0, 'credit-memo governance research record is present');
assert.ok(end > start, 'credit-memo governance record has a valid boundary');

const record = source.slice(start, end);
assert.match(record, /updated: '2026-09-12'/, 'the contextual update has a route-specific modified date');
assert.match(record, /href: '\/services\/credit-memo-administration'/, 'the CTA uses the existing credit-memo administration service');
assert.match(record, /label: 'Plan credit memo administration support'/, 'the CTA gives the reader a clear next step');
assert.match(record, /The authorized owner still decides the amount, reason, tax treatment, customer response, and posting\./, 'the CTA retains the financial-decision boundary');

const renderer = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
assert.match(renderer, /modifiedTime:p\.updated/, 'Open Graph uses a route-specific modified date when present');
assert.match(renderer, /Updated \{formatReaderDate\(p\.updated\)\}/, 'the reader-facing metadata exposes a route-specific updated date');

console.log('credit memo governance handoff contract passed');
