import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/data.ts', import.meta.url), 'utf8');
const slug = 'research-medical-billing-subscription-billing-review';
const start = source.indexOf(`slug: '${slug}'`);
const end = source.indexOf("slug: 'research-medical-billing-usage-billing-reconciliation'", start);

assert.ok(start >= 0, 'subscription billing research record is present');
assert.ok(end > start, 'subscription billing record has a valid boundary');

const record = source.slice(start, end);
assert.match(record, /datePublished: '2026-08-07'/, 'the original publication date remains explicit');
assert.match(record, /updated: '2026-09-09'/, 'the contextual update has a route-specific modified date');
assert.match(record, /href: '\/services\/subscription-billing-support'/, 'the CTA uses the existing subscription billing service');
assert.match(record, /label: 'Plan subscription billing support'/, 'the CTA has a clear reader-facing label');
assert.match(record, /The authorized owner still decides plan changes, pauses, credits, refunds, exceptions, and customer-facing resolutions\./, 'the CTA retains the owner boundary');

const renderer = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
assert.match(renderer, /modifiedTime:p\.updated/, 'Open Graph uses a route-specific modified date when present');
assert.match(renderer, /Updated \{formatReaderDate\(p\.updated\)\}/, 'the reader-facing metadata exposes a route-specific updated date');

console.log('subscription billing review handoff contract passed');