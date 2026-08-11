import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const manifest = JSON.parse(readFileSync('.paperclip/aug10-2026/research.json', 'utf8'));
const source = readFileSync('app/data.ts', 'utf8');
const renderer = readFileSync('app/research/[slug]/page.tsx', 'utf8');
const frozen = [
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
const failures = [];
const require = (name, ok) => { if (!ok) failures.push(name); };
const topKeys = ['schemaVersion','contract','targetDate','family','domain','repository','branch','minimum','priorRunId','priorIssueId','validationCommands','cleanBuildPassed','existingCompliancePassed','indexNewestFirstPassed','entries'];
require('top-level-keys', JSON.stringify(Object.keys(manifest)) === JSON.stringify(topKeys));
require('contract', manifest.schemaVersion === 1 && manifest.contract === 'sites3-aug10-public-date-v6' && manifest.targetDate === '2026-08-10' && manifest.family === 'research' && manifest.domain === 'outsourcedbillingservices.com' && manifest.repository === 'coolifystealthagents/outsourcedbillingservices' && manifest.branch === 'main' && manifest.minimum === 10);
require('count-and-order', manifest.entries.length === 10 && JSON.stringify(manifest.entries.map((entry) => entry.slug)) === JSON.stringify(frozen));
require('booleans', manifest.cleanBuildPassed === true && manifest.existingCompliancePassed === true && manifest.indexNewestFirstPassed === true);
const entryKeys = ['slug','route','sourcePath','provenance','introducedByCommit','sourceDateField','sourceDate','renderedDateFields','renderedDate'];
for (const [index, entry] of manifest.entries.entries()) {
  require(`${entry.slug}:keys`, JSON.stringify(Object.keys(entry)) === JSON.stringify(entryKeys));
  require(`${entry.slug}:metadata`, entry.route === `/research/${entry.slug}` && entry.sourcePath === 'app/data.ts' && entry.provenance === 'original-aug10-batch' && entry.sourceDateField === 'researchRunDates[slug]' && entry.sourceDate === '2026-08-10' && entry.renderedDate === '2026-08-10' && entry.renderedDateFields.every((field) => ['datePublished','article:published_time','time[datetime]'].includes(field)) && entry.renderedDateFields.length > 0);
  require(`${entry.slug}:source-map`, source.includes(`'${entry.slug}': '2026-08-10'`));
  require(`${entry.slug}:identity`, /^[0-9a-f]{40}$/.test(entry.introducedByCommit) && source.includes(`'${entry.slug}'`));
  const before = execFileSync('git', ['show', `${entry.introducedByCommit}^:app/data.ts`], { encoding: 'utf8' });
  const after = execFileSync('git', ['show', `${entry.introducedByCommit}:app/data.ts`], { encoding: 'utf8' });
  require(`${entry.slug}:introduction`, !before.includes(`'${entry.slug}'`) && after.includes(`'${entry.slug}'`));
}
require('batch-before-legacy', source.includes('researchPosts.push(...researchRunOrder.map'));
require('renderer', renderer.includes('datePublished:published') && renderer.includes('<time dateTime={published}>Published {published}</time>'));
if (failures.length) { console.error(JSON.stringify({ status: 'FAIL', failures }, null, 2)); process.exit(1); }
console.log(JSON.stringify({ status: 'PASS', acceptedCount: manifest.entries.length, sourceDateAudit: 'PASS', indexNewestFirst: true }));
