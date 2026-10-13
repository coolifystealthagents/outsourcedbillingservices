import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..'), errors=[]
const ok=(v,m)=>{if(!v)errors.push(m)}, read=p=>fs.readFileSync(path.join(root,p),'utf8')
const text=read('app/oct13-content.ts'), parse=(a,b)=>JSON.parse(text.split(a)[1].split(b)[0])
const blog=parse('export const oct13BlogBatch=',' as const;'), research=parse('export const oct13ResearchBatch=',' as const;'), all=[...blog,...research]
const wc=s=>(s.match(/[A-Za-z0-9][A-Za-z0-9’'-]*/g)||[]).length, norm=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim()
const base='2c080a4b909ccc4a69cc6e89a60fb6ccbeef67e7', datePattern=/\b(?:oct(?:ober)?\s+13(?:th)?(?:,?\s+2026)?|2026[-/]10[-/]13|10[-/]13[-/]2026)\b/i
ok(blog.length===12,`expected 12 Blog, got ${blog.length}`); ok(research.length===5,`expected 5 Research, got ${research.length}`); ok(all.length===17,'expected 17 total')
ok(new Set(all.map(x=>x.slug)).size===17,'duplicate new slug'); ok(new Set(all.map(x=>x.title)).size===17,'duplicate new title')
for(const x of all){ok((x.published||x.datePublished)==='2026-10-13',`${x.slug}: date`);ok(!datePattern.test(x.title),`${x.slug}: date in title`);ok(x.featuredImage===`/oct13-heroes/${x.slug}.png`,`${x.slug}: image mapping`);ok(x.body.every(p=>typeof p==='string'&&p.trim()),`${x.slug}: blank paragraph`)}
for(const x of blog){ok(wc(x.body.join(' '))>=1000,`${x.slug}: Blog ${wc(x.body.join(' '))} words`);ok(x.body.length>=14,`${x.slug}: Blog depth`);ok(x.sourcesList.length===4&&x.sourcesList.every(s=>s.url.startsWith('https://')),`${x.slug}: Blog sources`)}
const hosts=new Set(['www.gao.gov','www.nist.gov','www.ftc.gov','www.irs.gov','www.cisa.gov','www.archives.gov','www.frbservices.org','www.consumerfinance.gov','www.sec.gov','www.federalregister.gov'])
for(const x of research){ok(x.published==='2026-10-13'&&x.datePublished==='2026-10-13'&&x.updated==='2026-10-13',`${x.slug}: Research dates`);ok(wc(x.body.join(' '))>=1200,`${x.slug}: Research ${wc(x.body.join(' '))} words`);ok(x.sources.length===10,`${x.slug}: expected 10 sources`);ok(new Set(x.sources.map(s=>s.url)).size===10,`${x.slug}: duplicate sources`);ok(x.sources.every(s=>s.url.startsWith('https://')&&hosts.has(new URL(s.url).hostname)),`${x.slug}: non-authoritative source`);ok(x.related.length===3,`${x.slug}: related`);ok(x.serviceCta?.href.startsWith('/services/'),`${x.slug}: service CTA`);ok(x.body.some(p=>/limitations/i.test(p)),`${x.slug}: limitations`)}

const baseText=execFileSync('git',['grep','-h','-e','.',base,'--',':(glob)app/**/*.ts',':(glob)app/**/*.tsx',':(glob)content/**/*'],{cwd:root,encoding:'utf8',maxBuffer:128*1024*1024})
for(const x of all){ok(!new RegExp(`['"]slug['"]\\s*:\\s*['"]${x.slug}['"]`).test(baseText),`${x.slug}: immutable-base slug collision`);ok(!baseText.includes(x.title),`${x.slug}: immutable-base title collision`)}
const seen=new Map()
for(const x of all)for(const p of x.body){if(wc(p)<40)continue;const n=norm(p);ok(!seen.has(n),`duplicate substantive paragraph: ${x.slug} and ${seen.get(n)}`);seen.set(n,x.slug);ok(!baseText.includes(p),`${x.slug}: paragraph duplicates immutable-base corpus`)}

const hashes=new Set()
for(const x of all){const rel=`public${x.featuredImage}`,p=path.join(root,rel);ok(fs.existsSync(p),`${x.slug}: image missing`);if(!fs.existsSync(p))continue;const b=fs.readFileSync(p);ok(b.subarray(1,4).toString()==='PNG',`${x.slug}: not PNG`);const w=b.readUInt32BE(16),h=b.readUInt32BE(20);ok(w===1536&&h===1024,`${x.slug}: ${w}x${h}`);ok(b.includes(Buffer.from(x.title)),`${x.slug}: exact title metadata absent`);const hash=crypto.createHash('sha256').update(b).digest('hex');ok(!hashes.has(hash),`${x.slug}: duplicate image`);hashes.add(hash)}
ok(hashes.size===17,`unique thumbnails ${hashes.size}`)

const br=read('app/blog/[slug]/page.tsx'),bi=read('app/blog/page.tsx'),bp=read('app/blog/page/[page]/page.tsx'),rr=read('app/research/[slug]/page.tsx'),ri=read('app/research/page.tsx'),data=read('app/data.ts'),sm=read('app/sitemap.xml/route.ts')
ok(br.includes('oct13BlogSlugs')&&br.includes('Oct13Article')&&br.includes('October 13, 2026')&&br.includes('alt={article.title}')&&br.includes('Related billing guides'),'Blog route/date/sidebar/related')
ok(bi.includes('oct13BlogBatch')&&bp.includes('oct13Posts'),'Blog indexes')
ok(data.includes("import { oct13ResearchBatch } from './oct13-content';")&&data.includes('...oct13ResearchBatch'),'Research registry')
ok(rr.includes('Published {formatReaderDate(published)}')&&rr.includes('alt={p.title}')&&rr.includes('Related Research')&&rr.includes('Authoritative sources'),'Research route/date/sidebar/sources')
ok(ri.includes('Published {readerDate.format'),'Research index date')
ok(sm.includes('oct13BlogSlugs')&&sm.includes('oct13Paths')&&sm.includes('researchPosts.map'),'sitemap')
const m=JSON.parse(read('publishing/2026-10-13/manifest.json'));ok(m.domain==='OutsourcedBillingServices.com'&&m.canonicalDomain==='https://outsourcedbillingservices.com','manifest identity');ok(m.repository==='coolifystealthagents/outsourcedbillingservices'&&m.branch==='main'&&m.baseSha===base,'manifest Git identity');ok(m.blog.length===12&&m.research.length===5&&m.publicationDate==='2026-10-13','manifest count/date')
if(errors.length){console.error(errors.map(e=>`ERROR: ${e}`).join('\n'));process.exit(1)}
console.log(JSON.stringify({status:'PASS',site:'OutsourcedBillingServices.com',blog:12,research:5,blogMinWords:Math.min(...blog.map(x=>wc(x.body.join(' ')))),researchMinWords:Math.min(...research.map(x=>wc(x.body.join(' ')))),researchSources:10,uniqueParagraphs:seen.size,uniquePngThumbnails:hashes.size,dimensions:'1536x1024',immutableBase:base,separateSystems:true,routesIndexesSitemapSidebarsRelated:true},null,2))
