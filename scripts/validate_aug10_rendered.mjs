import fs from 'node:fs';

const manifest = JSON.parse(fs.readFileSync('.paperclip/aug10-2026/blog.json', 'utf8'));
const source = fs.readFileSync('app/data.ts', 'utf8');
const failures = [];
for (const entry of manifest.entries) {
  const htmlPath = `.next/server/app${entry.route}.html`;
  if (!fs.existsSync(htmlPath)) failures.push(`${entry.slug}:missing-build-artifact`);
  else {
    const html = fs.readFileSync(htmlPath, 'utf8');
    if (!html.includes('"datePublished":"2026-08-10"')) failures.push(`${entry.slug}:missing-datePublished`);
    if (!html.includes('Published <!-- -->2026-08-10')) failures.push(`${entry.slug}:missing-visible-date`);
  }
}
const batchStart = source.indexOf('...secondBlogBatch');
const legacyStart = source.indexOf("slug: 'philippines-medical-billing-audit-checklist'");
if (batchStart < 0 || legacyStart < 0 || batchStart > legacyStart) failures.push('index-order');
if (failures.length) { console.error(JSON.stringify({ status: 'FAIL', failures }, null, 2)); process.exit(1); }
console.log(JSON.stringify({ status: 'PASS', renderedDateAudit: 'PASS', indexOrderAudit: 'PASS', acceptedCount: manifest.entries.length }));
