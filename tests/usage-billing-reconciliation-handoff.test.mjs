import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/data.ts', import.meta.url), 'utf8');
const slug = 'research-medical-billing-usage-billing-reconciliation';
const start = source.indexOf(`slug: '${slug}'`);
const end = source.indexOf("slug: 'research-medical-billing-credit-memo-governance'", start);

assert.ok(start >= 0, 'usage-billing reconciliation research record is present');
assert.ok(end > start, 'usage-billing reconciliation record has a valid boundary');

const record = source.slice(start, end);
assert.match(record, /updated: '2026-09-11'/, 'the contextual update has a route-specific modified date');
assert.match(record, /href: '\/services\/usage-billing-administration'/, 'the CTA uses the existing usage-billing service');
assert.match(record, /label: 'Plan a usage-billing review role'/, 'the CTA gives the reader a clear next step');
assert.match(record, /The authorized owner still decides contract interpretation, overrides, disputed usage, credits, and release\./, 'the CTA retains the financial-decision boundary');

const renderer = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
assert.match(renderer, /modifiedTime:p\.updated/, 'Open Graph uses a route-specific modified date when present');
assert.match(renderer, /Updated \{formatReaderDate\(p\.updated\)\}/, 'the reader-facing metadata exposes a route-specific updated date');

console.log('usage billing reconciliation handoff contract passed');