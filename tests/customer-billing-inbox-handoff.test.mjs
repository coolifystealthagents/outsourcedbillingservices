import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/data.ts', import.meta.url), 'utf8');
const slug = 'research-medical-billing-customer-billing-inbox';
const start = source.indexOf(`slug: '${slug}'`);
const end = source.indexOf("slug: 'research-medical-billing-revenue-schedule-preparation'", start);

assert.ok(start >= 0, 'customer billing inbox research record is present');
assert.ok(end > start, 'customer billing inbox record has a valid boundary');

const record = source.slice(start, end);
assert.match(record, /updated: '2026-09-26'/, 'the contextual update has a route-specific modified date');
assert.match(record, /href: '\/services\/customer-billing-support'/, 'the CTA uses the existing customer billing support service');
assert.match(record, /label: 'Plan customer billing support'/, 'the CTA gives the reader a clear next step');
assert.match(record, /The authorized owner still decides policy interpretation, concessions, refunds, payment commitments, and final customer responses\./, 'the CTA keeps controlled customer and financial decisions with the authorized owner');
assert.doesNotMatch(record, /href: '\/services\/collections-follow-up'/, 'the customer-billing CTA does not divert readers to the collections service');

const renderer = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
assert.match(renderer, /modifiedTime:p\.updated/, 'Open Graph uses the record modified date');
assert.match(renderer, /Updated \{formatReaderDate\(p\.updated\)\}/, 'reader-facing metadata exposes the record modified date');

console.log('customer billing inbox handoff contract passed');
