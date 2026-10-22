import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { researchPosts, site } from '../../data';
import { EditorialArticle, type EditorialSection } from '../../editorial-article';
import { researchAliases } from '../../route-aliases';
const researchSeoTitles:Record<string,string>={
  'research-medical-billing-authorization-expiry-cohort':'Authorization Expiry Date-Window Research',
  'research-medical-billing-authorization-expiry-cohort-2026':'Authorization Coverage Evidence Research',
  'research-medical-billing-telehealth-place-service-evidence':'Telehealth Encounter Context Research',
  'research-medical-billing-telehealth-place-service-evidence-2026':'Telehealth Coding-Evidence Boundary Research',
};
const seoTitle=(value:string)=>{const concise=value.replace(/^Medical Billing /i,'');return concise.length<=58?concise:`${concise.slice(0,55).replace(/\s+\S*$/,'')}…`};
const seoDescription=(value:string)=>value.length<=155?value:`${value.slice(0,152).replace(/\s+\S*$/,'')}…`;
const readerDate = new Intl.DateTimeFormat('en-US',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'});
const formatReaderDate=(value:string)=>readerDate.format(new Date(`${value}T00:00:00Z`));
export function generateStaticParams(){return researchPosts.map(p=>({slug:p.slug})).filter(({ slug }) => !researchAliases[slug])}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;if(researchAliases[slug])permanentRedirect(`/research/${researchAliases[slug]}`);const p=researchPosts.find(x=>x.slug===slug);if(!p)return {};const canonical=`https://${String(site.domain).toLowerCase()}/research/${p.slug}`;const hero=p.featuredImage;return {title:researchSeoTitles[p.slug]||seoTitle(p.title),description:seoDescription(p.excerpt),alternates:{canonical},openGraph:{title:p.title,description:p.excerpt,type:'article',url:canonical,modifiedTime:p.updated,images:hero?[hero]:undefined}}}
async function LegacyResearchPost({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(researchAliases[slug])permanentRedirect(`/research/${researchAliases[slug]}`);const p=researchPosts.find(x=>x.slug===slug);if(!p)notFound();const canonical=`https://${String(site.domain).toLowerCase()}/research/${p.slug}`;const published=p.datePublished||p.published;const hero=p.featuredImage;const sourceList='sources' in p&&Array.isArray(p.sources)?p.sources as Array<{name:string;url:string}>:[];const related='related' in p&&Array.isArray(p.related)?p.related as string[]:[];return <><Header/><main className="section"><JsonLd data={{'@context':'https://schema.org','@type':'Article',headline:p.title,description:p.excerpt,url:canonical,datePublished:published,dateModified:p.updated||published,image:hero?`https://${String(site.domain).toLowerCase()}${hero}`:undefined,author:{'@type':'Organization',name:site.brand,url:`https://${String(site.domain).toLowerCase()}`},publisher:{'@type':'Organization',name:site.brand,url:`https://${String(site.domain).toLowerCase()}`}}}/><article className="container guide-article"><p className="eyebrow">Philippines staffing research</p><h1>{p.title}</h1><p className="lead">{p.excerpt}</p>{published&&<p className="article-meta"><time dateTime={published}>Published {formatReaderDate(published)}</time>{p.updated&&p.updated!==published&&<> · <time dateTime={p.updated}>Updated {formatReaderDate(p.updated)}</time></>}</p>}{hero&&<img src={hero} alt={p.title} width="1536" height="1024" style={{width:'100%',height:'auto',borderRadius:'18px'}}/>}<div className="card">{p.body.map(x=><p key={x}>{x}</p>)}</div>{sourceList.length>0&&<section className="card"><h2>Authoritative sources</h2><ol>{sourceList.map(source=><li key={source.url}><a href={source.url}>{source.name}</a></li>)}</ol></section>}{related.length>0&&<aside className="card"><h2>Related Research</h2><nav aria-label="Related Research">{related.map(url=><a href={url} key={url}>{url.split('/').pop()?.replaceAll('-',' ')}</a>)}</nav></aside>}{p.serviceCta&&<aside className="card"><p className="eyebrow">Next step</p><h2>{p.serviceCta.title}</h2><p>{p.serviceCta.body}</p><a href={p.serviceCta.href}>{p.serviceCta.label}</a></aside>}</article><CTA/></main><Footer/></>}

const researchFallbackHero = '/illustrations/getillustrations/inkdex-saas-illustrations-svg/billing-dashboard.webp';

export default async function ResearchPost({params}:{params:Promise<{slug:string}>}) {
  const { slug } = await params;
  if (researchAliases[slug]) permanentRedirect(`/research/${researchAliases[slug]}`);
  const p = researchPosts.find((item) => item.slug === slug);
  if (!p) notFound();
  const canonical = `https://${String(site.domain).toLowerCase()}/research/${p.slug}`;
  const published = p.datePublished || p.published;
  const hero = p.featuredImage || researchFallbackHero;
  const sources = 'sources' in p && Array.isArray(p.sources) ? p.sources as Array<{name:string;url:string}> : [];
  const relatedUrls = 'related' in p && Array.isArray(p.related) ? p.related as string[] : [];
  const sectionNames = ['Research context and question', 'Method and evidence reviewed', 'Findings for billing operations', 'Controls and practical implications'];
  const groupCount = Math.min(4, Math.max(2, Math.ceil(p.body.length / 3)));
  const groups = Array.from({ length: groupCount }, () => [] as string[]);
  p.body.forEach((paragraph, index) => groups[Math.min(groupCount - 1, Math.floor(index * groupCount / p.body.length))].push(paragraph));
  const sections: EditorialSection[] = groups.filter((group) => group.length).map((group, index) => ({ heading: sectionNames[index], content: <>{group.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</> }));
  if (sources.length) sections.push({ heading: 'Authoritative sources', content: <ol>{sources.map((source) => <li key={source.url}><a href={source.url}>{source.name}</a></li>)}</ol> });
  if (p.serviceCta) sections.push({ heading: p.serviceCta.title, content: <><p>{p.serviceCta.body}</p><a className="btn primary" href={p.serviceCta.href}>{p.serviceCta.label}</a></> });
  const related = relatedUrls.map((href) => ({ href, title: href.split('/').pop()?.replaceAll('-', ' ') || 'Related research' }));
  return <><Header />
    <JsonLd data={{'@context':'https://schema.org','@type':'Article',headline:p.title,description:p.excerpt,url:canonical,datePublished:published,dateModified:p.updated||published,image:`https://${String(site.domain).toLowerCase()}${hero}`,author:{'@type':'Organization',name:site.brand,url:`https://${String(site.domain).toLowerCase()}`},publisher:{'@type':'Organization',name:site.brand,url:`https://${String(site.domain).toLowerCase()}`}}} />
    <EditorialArticle kind="Philippines staffing research" title={p.title} description={p.excerpt} published={published} updated={p.updated} hero={hero} heroAlt={`${p.title} research illustration`} sections={sections} publisher={site.brand} context="Evidence-led research for billing teams evaluating workflow controls, staffing boundaries, and operational risk." related={related}><CTA /></EditorialArticle>
    <Footer /></>;
}
