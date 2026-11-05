import { FeaturedComparison } from '../../FeaturedComparison';
import type {Metadata} from 'next';
import {notFound, permanentRedirect} from 'next/navigation';
import {Header, Footer} from '../../../components';
import {allPosts, blogPageCount} from '../../catalog';
const readerDate=new Intl.DateTimeFormat('en-US',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'});
function PublishedDate({post}:{post:(typeof allPosts)[number]}){const published='published' in post&&typeof post.published==='string'?post.published:undefined;return published?<time dateTime={published}>Published {readerDate.format(new Date(`${published}T00:00:00Z`))}</time>:null}

export function generateStaticParams(){const n=blogPageCount;return Array.from({length:Math.max(0,n-1)},(_,i)=>({page:String(i+2)}))}

export async function generateMetadata({params}:{params:Promise<{page:string}>}):Promise<Metadata>{const {page}=await params;const n=Number(page);if(!/^[1-9]\d*$/.test(page)||n<2||n>blogPageCount)return {title:'Blog page not found',robots:{index:false,follow:false}};return {title:`Billing Operations Blog - Page ${n}`,description:`Browse page ${n} of practical billing-operations guides for documented handoffs, evidence checks, exception routing, and owner review.`,alternates:{canonical:`/blog/page/${n}`}}}

export default async function BlogPage({params}:{params:Promise<{page:string}>}){const {page}=await params;const n=Number(page),total=blogPageCount;if(page==='1')permanentRedirect('/blog');if(!/^[1-9]\d*$/.test(page)||n>total)notFound();const posts=allPosts.slice((n-1)*20,n*20);return <><Header/><main className="section"><div className="container"><p className="eyebrow">Philippines staffing blog</p><h1>Blog page {n}</h1><div className="cards">{posts.map(p=><a className="card" href={`/blog/${p.slug}`} key={p.slug}><h2>{p.title}</h2><PublishedDate post={p}/><p>{p.excerpt}</p></a>)}</div><nav className="pagination" aria-label="Blog pages">{Array.from({length:total},(_,i)=><a aria-current={i+1===n?'page':undefined} href={i===0?'/blog':`/blog/page/${i+1}`} key={i}>{i+1}</a>)}</nav></div>{n===2&&<FeaturedComparison />}</main><Footer/></>}
