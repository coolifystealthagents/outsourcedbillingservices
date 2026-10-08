import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/data.ts', import.meta.url), 'utf8');
const slug = 'research-medical-billing-revenue-schedule-preparation';
const start = source.indexOf(`slug: '${slug}'`);
const end = source.indexOf("slug: 'research-medical-billing-dispute-intake'", start);

assert.ok(start >= 0, 'revenue schedule preparation research record is present');
assert.ok(end > start, 'revenue schedule preparation record has a valid boundary');

const record = source.slice(start, end);
assert.match(record, /updated: '2026-10-08'/, 'the contextual update has a route-specific modified date');
assert.match(record, /href: '\/services\/revenue-schedule-preparation'/, 'the CTA uses the existing revenue-schedule preparation service');
assert.match(record, /label: 'Plan revenue-schedule preparation support'/, 'the CTA gives the reader a clear next step');
assert.match(record, /The finance owner still decides recognition treatment, amendments, materiality, journal entries, and close sign-off\./, 'the CTA keeps accounting decisions with the finance owner');
assert.doesNotMatch(record, /href: '\/services\/month-end-billing-support'/, 'the CTA does not divert readers to the month-end close service');

const renderer = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
assert.match(renderer, /modifiedTime:p\.updated/, 'Open Graph uses the record modified date');
assert.match(renderer, /Updated \{formatReaderDate\(p\.updated\)\}/, 'reader-facing metadata exposes the record modified date');

console.log('revenue schedule preparation handoff contract passed');
