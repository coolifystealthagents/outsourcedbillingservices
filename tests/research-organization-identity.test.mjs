import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
const organization = "{'@type':'Organization',name:site.brand,url:`https://${String(site.domain).toLowerCase()}`}";

if (!source.includes(`author:${organization}`)) {
  throw new Error('Research Article author must use the canonical site Organization identity.');
}
if (!source.includes(`publisher:${organization}`)) {
  throw new Error('Research Article publisher must use the canonical site Organization identity.');
}

console.log('research Organization author/publisher identity contract passed');
