import { readFileSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { execFileSync } from 'node:child_process';

const manifest = JSON.parse(readFileSync('.paperclip/aug10-2026/research.json', 'utf8'));
const source = readFileSync('app/data.ts', 'utf8');
const sitemapSource = readFileSync('app/sitemap.xml/route.ts', 'utf8');
const failures = [];
const require = (name, ok) => { if (!ok) failures.push(name); };
require('count>=10', manifest.entries.length >= manifest.minimum);
require('unique-slugs', new Set(manifest.entries.map((e) => e.slug)).size === manifest.entries.length);
require('family-routes', manifest.entries.every((e) => e.route === `/research/${e.slug}`));
require('source-path', manifest.entries.every((e) => e.sourcePath === 'app/data.ts'));
require('source-records', manifest.entries.every((e) => source.includes(`'${e.slug}'`)));
require('source-dates', manifest.entries.every((e) => e.sourceDate === '2026-08-10' && e.sourceDateField === 'published' && e.provenance === 'repair-replacement' && e.introducedByCommit === '5d5220a2933aceec39363b9cc3d51efa821024c6'));
require('sitemap-route', manifest.entries.every((e) => sitemapSource.includes('researchPosts.map')));
for (const entry of manifest.entries) {
  const parent = execFileSync('git', ['show', `${entry.introducedByCommit}^:app/data.ts`], { encoding: 'utf8' });
  const introduced = execFileSync('git', ['show', `${entry.introducedByCommit}:app/data.ts`], { encoding: 'utf8' });
  const parentRun = parent.slice(parent.indexOf('const researchRunPosts'));
  const introducedRun = introduced.slice(introduced.indexOf('const researchRunPosts'));
  require(`${entry.slug}:date-absent-before`, !parentRun.includes("published: '2026-08-10'"));
  require(`${entry.slug}:present-after`, introduced.includes(`'${entry.slug}'`));
  require(`${entry.slug}:date-present-after`, introducedRun.includes("published: '2026-08-10'"));
}
const firstTarget = source.indexOf(`'${manifest.entries[0].slug}'`);
const firstHistorical = source.indexOf('researchPosts.push(...researchRunPosts, ...researchBatchPosts)');
require('index-newest-first', firstTarget >= 0 && firstTarget < firstHistorical);

const server = spawn('npm', ['start', '--', '-p', '3107'], { stdio: 'ignore' });
try {
  await new Promise((resolve, reject) => { const timer = setTimeout(resolve, 2500); server.on('error', reject); server.on('exit', (code) => { if (code && code !== 0) reject(new Error(`next start exited ${code}`)); }); });
  for (const entry of manifest.entries) {
    const html = await (await fetch(`http://127.0.0.1:3107${entry.route}`)).text();
    require(`${entry.slug}:status`, html.includes('<!DOCTYPE html>'));
    require(`${entry.slug}:datePublished`, html.includes('"datePublished":"2026-08-10"'));
    require(`${entry.slug}:visible-date`, html.includes('dateTime="2026-08-10"'));
    require(`${entry.slug}:canonical`, html.includes(`https://outsourcedbillingservices.com${entry.route}`));
    require(`${entry.slug}:sitemap-eligible`, html.includes(entry.route));
  }
} finally { server.kill('SIGTERM'); }
if (failures.length) { console.error(JSON.stringify({ status: 'FAIL', failures }, null, 2)); process.exit(1); }
console.log(JSON.stringify({ status: 'PASS', acceptedCount: manifest.entries.length, renderedDate: '2026-08-10', indexNewestFirst: true }));
