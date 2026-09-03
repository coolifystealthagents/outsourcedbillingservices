import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/data.ts', import.meta.url), 'utf8');
const slug = "research-medical-billing-payment-posting-quality";
const start = source.indexOf(`slug: '${slug}'`);
const end = source.indexOf("slug: 'research-medical-billing-eligibility-verification'", start);

assert.ok(start >= 0, 'payment-posting quality research record is present');
assert.ok(end > start, 'payment-posting quality record has a valid boundary');

const record = source.slice(start, end);
assert.match(record, /updated: '2026-09-03'/, 'the contextual update has a route-specific modified date');
assert.match(record, /href: '\/services\/payment-posting'/, 'the CTA uses the existing payment posting service');
assert.match(record, /label: 'Plan payment posting support'/, 'the CTA has its reader-facing label');
assert.match(record, /The authorized owner still decides on refunds, transfers, reversals, and unusual adjustments\./, 'the CTA retains the financial-decision boundary');

console.log('payment-posting quality handoff contract passed');
