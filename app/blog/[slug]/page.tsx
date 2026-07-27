import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogPosts, site } from '../../data';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  const canonical = `https://${String(site.domain).toLowerCase()}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical },
    openGraph: { title: post.title, description: post.excerpt, type: 'article', url: canonical },
  };
}

function ArticleBanner({ banner }: { banner: { title: string; body: string; href: string; label: string } }) {
  return <aside className="article-banner"><div><span>Philippines billing role</span><h2>{banner.title}</h2><p>{banner.body}</p></div><a href={banner.href}>{banner.label} <b aria-hidden="true">→</b></a></aside>;
}

function RichArticle({ post }: { post: (typeof blogPosts)[number] }) {
  const detail = (post as any).detail;
  const canonical = `https://${String(site.domain).toLowerCase()}/blog/${post.slug}`;
  const bannerSlots: Record<number, number> = { 1: 0, 3: 1, 5: 2 };
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    url: canonical,
    datePublished: detail.published,
    dateModified: detail.updated,
    author: { '@type': 'Organization', name: site.brand },
    publisher: { '@type': 'Organization', name: site.brand, url: `https://${String(site.domain).toLowerCase()}` },
    about: ['Philippines medical billing support', 'medical billing audit checklist', 'billing quality review'],
    citation: detail.sources.map((source: any) => source.url),
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: detail.faqs.map((faq: any) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${String(site.domain).toLowerCase()}` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `https://${String(site.domain).toLowerCase()}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: canonical },
    ],
  };

  return <>
    <Header hidePricing />
    <main className="article-page">
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <article className="rich-article" data-article-marker={detail.marker}>
        <header className="article-hero">
          <nav aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/blog">Blog</a></nav>
          <p className="article-kicker">Philippines medical billing guide</p>
          <h1>{post.title}</h1>
          <p className="article-deck">{post.excerpt}</p>
          <div className="article-meta"><span>Published {detail.published}</span><span>{post.minutes} minute read</span><span>Evidence checked</span></div>
        </header>

        <div className="article-body">
          <section className="article-intro" aria-label="Direct answer">
            {detail.intro.map((paragraph: string) => <p key={paragraph}>{paragraph}</p>)}
          </section>

          <figure className="evidence-chart" aria-labelledby="chart-title chart-caption" tabIndex={0}>
            <div className="chart-copy">
              <p className="module-label">2024 CMS evidence</p>
              <h2 id="chart-title">Why the checklist starts with proof</h2>
              <p>CMS grouped measured Medicare fee-for-service improper payments by cause. Documentation made up the largest share.</p>
            </div>
            <span className="scroll-cue">Swipe chart sideways to see every value →</span>
            <svg viewBox="0 0 760 330" role="img" aria-labelledby="chart-svg-title chart-svg-desc">
              <title id="chart-svg-title">CMS 2024 improper payment categories</title>
              <desc id="chart-svg-desc">Horizontal bars show 59.8 percent insufficient documentation, 15.7 percent medical necessity, 10 percent incorrect coding, 8.2 percent no documentation, and 6.3 percent other.</desc>
              {detail.stats.map((stat: any, index: number) => {
                const y = 28 + index * 59;
                return <g key={stat.label}>
                  <text x="0" y={y + 17} className="chart-label">{stat.label}</text>
                  <rect x="220" y={y} width="500" height="25" rx="7" className="chart-track" />
                  <rect x="220" y={y} width={stat.value * 5} height="25" rx="7" className={`chart-bar chart-bar-${index + 1}`} />
                  <text x="730" y={y + 18} textAnchor="end" className="chart-value">{stat.display}</text>
                </g>;
              })}
            </svg>
            <figcaption id="chart-caption"><strong>Methods note:</strong> Values come from CMS Table A3 for the 2024 report period and total 100 percent. CMS says the reviewed claims were submitted from July 1, 2022 through June 30, 2023; these national results are context, not a forecast for one business.</figcaption>
          </figure>

          <section className="article-section" aria-labelledby="audit-table-title">
            <p className="module-label">Working table</p>
            <h2 id="audit-table-title">Audit checks and decision owners</h2>
            <p>The staff member can inspect and route repeatable work. The named owner keeps every judgment that changes coding, clinical meaning, money, or incident response.</p>
            <div className="table-scroll" role="region" aria-label="Audit checks and owner decisions" tabIndex={0}>
              <span className="scroll-cue">Scroll sideways to see all columns →</span>
              <table>
                <thead><tr><th>Audit check</th><th>Filipino staff member</th><th>Named owner</th></tr></thead>
                <tbody>{detail.table.map((row: any) => <tr key={row.check}><th scope="row">{row.check}</th><td>{row.staff}</td><td>{row.owner}</td></tr>)}</tbody>
              </table>
            </div>
          </section>

          {detail.sections.map((section: any, index: number) => <div className="article-section-wrap" key={section.heading}>
            <section className="article-section">
              <span className="section-number">{String(index + 1).padStart(2, '0')}</span>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph: string) => <p key={paragraph}>{paragraph}</p>)}
              <div className="check-card"><h3>Put this in the checklist</h3><ul>{section.bullets.map((bullet: string) => <li key={bullet}>{bullet}</li>)}</ul></div>
            </section>
            {bannerSlots[index] !== undefined && <ArticleBanner banner={detail.banners[bannerSlots[index]]} />}
            {index === 4 && <>
              <blockquote className="expert-quote"><p>"{detail.quote.text}"</p><cite><a href={detail.quote.url}>{detail.quote.by}</a></cite></blockquote>
              <figure className="handoff-graphic" aria-labelledby="handoff-title handoff-note" tabIndex={0}>
                <div><p className="module-label">Decision route</p><h2 id="handoff-title">A clean claim-review handoff</h2></div>
                <span className="scroll-cue">Swipe diagram sideways to see every step →</span>
                <svg viewBox="0 0 900 260" role="img" aria-labelledby="flow-title flow-desc">
                  <title id="flow-title">Medical billing audit handoff</title>
                  <desc id="flow-desc">The billing specialist checks the source, closes clean records, and sends exceptions to the named owner before recording the approved result.</desc>
                  <path d="M170 115H265 M405 115H500 M640 115H735" className="flow-line" />
                  <path d="M395 112l-14-9v18z M630 112l-14-9v18z M725 112l-14-9v18z" className="flow-arrow" />
                  <g className="flow-node"><rect x="20" y="55" width="150" height="120" rx="18"/><text x="95" y="95" textAnchor="middle">01</text><text x="95" y="126" textAnchor="middle">Open record</text><text x="95" y="148" textAnchor="middle">in approved tool</text></g>
                  <g className="flow-node"><rect x="265" y="55" width="140" height="120" rx="18"/><text x="335" y="95" textAnchor="middle">02</text><text x="335" y="126" textAnchor="middle">Check source</text><text x="335" y="148" textAnchor="middle">and proof</text></g>
                  <g className="flow-node owner"><rect x="500" y="55" width="140" height="120" rx="18"/><text x="570" y="95" textAnchor="middle">03</text><text x="570" y="126" textAnchor="middle">Owner decides</text><text x="570" y="148" textAnchor="middle">any exception</text></g>
                  <g className="flow-node"><rect x="735" y="55" width="145" height="120" rx="18"/><text x="807" y="95" textAnchor="middle">04</text><text x="807" y="126" textAnchor="middle">Record result</text><text x="807" y="148" textAnchor="middle">and close</text></g>
                </svg>
                <figcaption id="handoff-note">The worker may close only the checks the owner has approved for that role. Every exception moves to a named person before the record changes.</figcaption>
              </figure>
            </>}
          </div>)}

          <section className="article-section faq-section">
            <p className="module-label">Common questions</p>
            <h2>Medical billing audit FAQ</h2>
            {detail.faqs.map((faq: any) => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}
          </section>

          <section className="article-section related-section">
            <p className="module-label">Keep planning</p>
            <h2>Related billing guides</h2>
            <div className="related-links">{detail.internalLinks.map((link: any) => <a href={link.href} key={link.href}>{link.title}<span aria-hidden="true">→</span></a>)}</div>
          </section>

          <section className="article-section source-section">
            <p className="module-label">Numbered sources</p>
            <h2>Sources used for this checklist</h2>
            <ol>{detail.sources.map((source: any) => <li key={source.n}><a href={source.url}><strong>{source.n}. {source.name}</strong></a><span>{source.date}</span><p>{source.note}</p></li>)}</ol>
          </section>
        </div>
      </article>
    </main>
    <Footer hidePricing />
  </>;
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  return <RichArticle post={post} />;
}
