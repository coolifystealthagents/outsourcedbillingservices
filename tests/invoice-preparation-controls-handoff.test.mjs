import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/data.ts', import.meta.url), 'utf8');
const slug = "research-medical-billing-invoice-preparation-controls";
const start = source.indexOf(`slug: '${slug}'`);
const end = source.indexOf("slug: 'research-medical-billing-subscription-billing-review'", start);

assert.ok(start >= 0, 'invoice-preparation controls research record is present');
assert.ok(end > start, 'invoice-preparation controls record has a valid boundary');

const record = source.slice(start, end);
assert.match(record, /updated: '2026-09-06'/, 'the contextual update has a route-specific modified date');
assert.match(record, /href: '\/services\/invoice-preparation'/, 'the CTA uses the existing invoice preparation service');
assert.match(record, /label: 'Plan invoice preparation support'/, 'the CTA has its reader-facing label');
assert.match(record, /The authorized owner still decides terms, credits, tax treatment, customer-facing changes, and release\./, 'the CTA retains the financial-decision boundary');

const invoiceAccuracySlug = 'research-medical-billing-invoice-accuracy-review';
const invoiceAccuracyStart = source.indexOf(`slug === '${invoiceAccuracySlug}'`);
const invoiceAccuracyEnd = source.indexOf("const researchRunDates", invoiceAccuracyStart);
assert.ok(invoiceAccuracyStart >= 0, 'invoice-accuracy research handoff is data-owned');
assert.ok(invoiceAccuracyEnd > invoiceAccuracyStart, 'invoice-accuracy handoff has a bounded source slice');
const invoiceAccuracy = source.slice(invoiceAccuracyStart, invoiceAccuracyEnd);
assert.match(invoiceAccuracy, /updated: '2026-10-17'/, 'the invoice-accuracy handoff refreshes its own modified date');
assert.match(invoiceAccuracy, /href: '\/services\/invoice-preparation'/, 'the invoice-accuracy handoff points to the existing invoice preparation service');
assert.match(invoiceAccuracy, /Check invoice evidence before an owner releases it/, 'the CTA states the specific reader next step');
assert.match(invoiceAccuracy, /The authorized owner still decides pricing, terms, credits, tax treatment, customer-facing changes, and release\./, 'the CTA keeps financial and release decisions with the owner');

console.log('invoice-preparation controls handoff contract passed');
