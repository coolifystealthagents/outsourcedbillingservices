import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const middleware = readFileSync(new URL('../middleware.ts', import.meta.url), 'utf8');
const audit = readFileSync(new URL('../scripts/audit-site.mjs', import.meta.url), 'utf8');

assert.match(middleware, /export function middleware\(request: NextRequest\)/, 'Next 15 must discover a root middleware export');
assert.match(middleware, /x-forwarded-host/, 'canonicalization must inspect the forwarded host');
assert.match(middleware, /x-forwarded-proto/, 'canonicalization must inspect the forwarded scheme');
assert.match(middleware, /cf-visitor/, 'canonicalization must handle Cloudflare visitor scheme');
assert.match(middleware, /JSON\.parse\(visitor\)/, 'Cloudflare visitor input must be parsed defensively');
assert.match(middleware, /replace\(\/:\\d\+\$\//, 'forwarded and fallback hosts must have ports normalized');
assert.match(middleware, /new URL\([\s\S]*https:\/\/\$\{canonicalHost\}/, 'redirects must use an explicit public origin');
assert.match(middleware, /NextResponse\.redirect\(destination, 308\)/, 'canonical redirects must be permanent');
assert.match(middleware, /if \(!recognizedHosts\.has\(host\)\) return NextResponse\.next\(\)/, 'unknown preview hosts must remain untouched');
assert.match(middleware, /matcher:\s*'\/\(\(\?!_next\/static/, 'middleware matcher must be a literal for Next static analysis');
assert.match(audit, /pathname\.startsWith\('\/cdn-cgi\/'\)/, 'crawler must ignore Cloudflare-injected infrastructure links');

console.log('Canonical middleware contract passed');
