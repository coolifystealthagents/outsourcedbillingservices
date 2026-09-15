import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/data.ts', import.meta.url), 'utf8');
const slug = 'research-medical-billing-collections-follow-up';
const start = source.indexOf(`slug: '${slug}'`);
const end = source.indexOf("slug: 'research-medical-billing-customer-billing-inbox'", start);

assert.ok(start >= 0, 'collections follow-up research record is present');
assert.ok(end > start, 'collections follow-up research record has a valid boundary');

const record = source.slice(start, end);
assert.match(record, /updated: '2026-09-15'/, 'the contextual update has a route-specific modified date');
assert.match(record, /href: '\/services\/collections-follow-up'/, 'the CTA uses the existing collections follow-up service');
assert.match(record, /label: 'Plan collections follow-up support'/, 'the CTA gives the reader a clear next step');
assert.match(record, /The authorized owner still decides settlements, write-offs, payment plans, refunds, dispute outcomes, and strategy changes\./, 'the CTA retains the financial-decision boundary');

const renderer = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
assert.match(renderer, /modifiedTime:p\.updated/, 'Open Graph uses a route-specific modified date when present');
assert.match(renderer, /Updated \{formatReaderDate\(p\.updated\)\}/, 'the reader-facing metadata exposes a route-specific updated date');

console.log('collections follow-up handoff contract passed');