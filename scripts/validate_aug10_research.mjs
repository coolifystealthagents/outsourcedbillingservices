import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const manifest = JSON.parse(readFileSync('.paperclip/aug10-2026/research.json', 'utf8'));
const source = readFileSync('app/data.ts', 'utf8');
const route = readFileSync('app/research/[slug]/page.tsx', 'utf8');
const expected = [
  'research-medical-billing-authorization-denial-analysis',
  'research-medical-billing-claim-correction-controls',
  'research-medical-billing-claim-submission-reconciliation',
  'research-medical-billing-duplicate-claim-prevention',
  'research-medical-billing-medical-record-request-controls',
  'research-medical-billing-patient-statement-review',
  'research-medical-billing-payer-enrollment-workflow',
  'research-medical-billing-prior-authorization-tracking',
  'research-medical-billing-rejected-claim-routing',
  'research-medical-billing-unbilled-account-review',
];
const topKeys = ['schemaVersion','contract','targetDate','family','domain','repository','branch','minimum','priorRunId','priorIssueId','validationCommands','cleanBuildPassed','existingCompliancePassed','indexNewestFirstPassed','entries'];
const entryKeys = ['slug','route','sourcePath','provenance','introducedByCommit','sourceDateField','sourceDate','renderedDateFields','renderedDate'];
const fail = (message) => { throw new Error(message); };
if (JSON.stringify(Object.keys(manifest)) !== JSON.stringify(topKeys)) fail('manifest top-level keys mismatch');
if (manifest.schemaVersion !== 1 || manifest.contract !== 'sites3-aug10-public-date-v6' || manifest.targetDate !== '2026-08-10' || manifest.family !== 'research' || manifest.domain !== 'outsourcedbillingservices.com' || manifest.repository !== 'coolifystealthagents/outsourcedbillingservices' || manifest.branch !== 'main' || manifest.minimum !== 10) fail('manifest contract mismatch');
if (manifest.entries.length !== 10 || JSON.stringify([...manifest.entries.map((e) => e.slug)].sort()) !== JSON.stringify([...expected].sort())) fail('frozen slug set mismatch');
if (!manifest.cleanBuildPassed || !manifest.existingCompliancePassed || !manifest.indexNewestFirstPassed) fail('manifest validation flags are not true');
for (const entry of manifest.entries) {
  if (JSON.stringify(Object.keys(entry)) !== JSON.stringify(entryKeys)) fail(`entry keys mismatch: ${entry.slug}`);
  if (entry.route !== `/research/${entry.slug}` || entry.sourcePath !== 'app/data.ts' || entry.provenance !== 'original-aug10-batch' || entry.introducedByCommit !== 'bc04bb61b3d2edf7be8e3d43c8f27144f49ac6d3' || entry.sourceDateField !== 'published' || entry.sourceDate !== '2026-08-10' || JSON.stringify(entry.renderedDateFields) !== JSON.stringify(['datePublished','time[datetime]']) || entry.renderedDate !== '2026-08-10') fail(`entry metadata mismatch: ${entry.slug}`);
  if (!source.includes(`'${entry.slug}'`)) fail(`source identity missing: ${entry.slug}`);
  const original = execFileSync('git', ['show', `${entry.introducedByCommit}:app/data.ts`], { encoding: 'utf8' });
  const parent = execFileSync('git', ['show', `${entry.introducedByCommit}^:app/data.ts`], { encoding: 'utf8' });
  if (!original.includes(`'${entry.slug}'`) || parent.includes(`'${entry.slug}'`)) fail(`introduction provenance mismatch: ${entry.slug}`);
  if (!source.includes(`'${entry.slug}'`) || !source.includes("published: '2026-08-10'")) fail(`source date missing: ${entry.slug}`);
}
if (!route.includes('datePublished:published') || !route.includes('<time dateTime={published}>Published {published}</time>')) fail('renderer date exposure missing');
const positions = [...expected].sort((a, b) => source.indexOf(`'${a}'`) - source.indexOf(`'${b}'`)).map((slug) => source.indexOf(`'${slug}'`));
if (positions.some((position, index) => position < 0 || (index > 0 && position <= positions[index - 1]))) fail('frozen batch order mismatch');
if (!source.includes('researchPosts.push(...researchRunPosts, ...researchBatchPosts)')) fail('research index batch ordering missing');
console.log(JSON.stringify({ status: 'PASS', acceptedCount: 10, sourceDateAudit: 'PASS', indexOrderAudit: 'PASS' }));
