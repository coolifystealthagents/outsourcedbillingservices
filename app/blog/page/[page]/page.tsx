import { FeaturedComparison } from '../../FeaturedComparison';
import {notFound,redirect} from 'next/navigation';import {Header,Footer} from '../../../components';import {blogPosts} from '../../../data';import aug20Meta from '../../../aug20-meta.json';import aug21Meta from '../../../aug21-meta.json';import {aug23BlogBatch} from '../../../aug23-blog';import {sep3BlogBatch} from '../../../sep3-blog';import {sep4BlogBatch} from '../../../sep4-content';

const daily=[...sep4BlogBatch.map(p=>[p.slug,{title:p.title,description:p.description}] as const),...sep3BlogBatch.map(p=>[p.slug,{title:p.title,description:p.description}] as const),...aug23BlogBatch.map(p=>[p.slug,{title:p.title,description:p.description}] as const),...Object.entries(aug21Meta),...Object.entries(aug20Meta)].map(([slug,p])=>({slug,title:p.title,excerpt:p.description}));
const latest=blogPosts.filter(p=>p.detail?.published==='2026-09-02');
const earlier=blogPosts.filter(p=>p.detail?.published!=='2026-09-02');
const allPosts=[...daily.slice(0,24),...latest,...daily.slice(24),...earlier];

export function generateStaticParams(){const n=Math.max(1,Math.ceil(allPosts.length/20));return Array.from({length:n},(_,i)=>({page:String(i+1)}))}

export default async function BlogPage({params}:{params:Promise<{page:string}>}){const {page}=await params;const n=Number(page),total=Math.max(1,Math.ceil(allPosts.length/20));if(page==='1')redirect('/blog');if(!Number.isInteger(n)||n<1||n>total)notFound();const posts=allPosts.slice((n-1)*20,n*20);return <><Header/><main className="section"><div className="container"><p className="eyebrow">Philippines staffing blog</p><h1>Blog page {n}</h1><div className="cards">{posts.map(p=><a className="card" href={`/blog/${p.slug}`} key={p.slug}><h2>{p.title}</h2><p>{p.excerpt}</p></a>)}</div><nav className="pagination" aria-label="Blog pages">{Array.from({length:total},(_,i)=><a aria-current={i+1===n?'page':undefined} href={i===0?'/blog':`/blog/page/${i+1}`} key={i}>{i+1}</a>)}</nav></div>{n===2&&<FeaturedComparison />}</main><Footer/></>}
