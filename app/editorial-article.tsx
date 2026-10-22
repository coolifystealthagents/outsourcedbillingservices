import type { ReactNode } from 'react';
import { ActiveArticleToc } from './editorial-toc-client';

export type EditorialSection = {
  heading: string;
  level?: 2 | 3;
  content: ReactNode;
};

type RelatedLink = { href: string; title: string };

type EditorialArticleProps = {
  kind: string;
  title: string;
  description: string;
  published?: string;
  updated?: string;
  readingTime?: string;
  hero: string;
  heroAlt: string;
  sections: EditorialSection[];
  publisher?: string;
  context?: string;
  related?: RelatedLink[];
  children?: ReactNode;
};

const readerDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
const formatDate = (value: string) => readerDate.format(new Date(`${value}T00:00:00Z`));

function headingIds(sections: EditorialSection[]) {
  const seen = new Map<string, number>();
  return sections.map((section) => {
    const base = section.heading.toLowerCase().normalize('NFKD').replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-') || 'section';
    const count = (seen.get(base) || 0) + 1;
    seen.set(base, count);
    return count === 1 ? base : `${base}-${count}`;
  });
}

export function EditorialArticle({ kind, title, description, published, updated, readingTime, hero, heroAlt, sections, publisher = 'Outsourced Billing Services', context = 'Practical billing operations guidance for teams building controlled, review-ready workflows.', related = [], children }: EditorialArticleProps) {
  const ids = headingIds(sections);
  const toc = sections.map((section, index) => ({ id: ids[index], label: section.heading, level: section.level || 2 }));
  return <main className="editorial-page">
    <article className="editorial-article">
      <header className="editorial-hero">
        <p className="eyebrow">{kind}</p>
        <h1>{title}</h1>
        <p className="editorial-deck">{description}</p>
        <div className="editorial-meta" aria-label="Article details">
          {published && <span>Published <time dateTime={published}>{formatDate(published)}</time></span>}
          {updated && updated !== published && <span>Updated <time dateTime={updated}>{formatDate(updated)}</time></span>}
          {readingTime && <span>{readingTime}</span>}
        </div>
        <figure className="editorial-hero-media"><img src={hero} alt={heroAlt} width="1536" height="1024" /></figure>
      </header>

      <details className="editorial-mobile-toc">
        <summary>On this page</summary>
        <ActiveArticleToc headings={toc} label="Article contents" />
      </details>

      <div className="editorial-layout">
        <div className="editorial-prose">
          {sections.map((section, index) => {
            const Heading = section.level === 3 ? 'h3' : 'h2';
            return <section className="editorial-section" key={`${ids[index]}-${index}`} aria-labelledby={ids[index]}>
              <Heading id={ids[index]} tabIndex={-1}>{section.heading}</Heading>
              {section.content}
            </section>;
          })}
        </div>
        <aside className="editorial-sidebar" aria-label="Article sidebar">
          <div className="editorial-sidebar-inner">
            <ActiveArticleToc headings={toc} label="On this page" />
            <section className="editorial-sidebar-context" aria-labelledby="article-context-title">
              <h2 id="article-context-title">About this article</h2>
              <dl><div><dt>Publisher</dt><dd>{publisher}</dd></div>{published && <div><dt>Published</dt><dd>{formatDate(published)}</dd></div>}</dl>
              <p>{context}</p>
              <a className="editorial-sidebar-cta" href="/contact-us">Discuss your billing workflow <span aria-hidden="true">→</span></a>
            </section>
            {related.length > 0 && <nav className="editorial-related" aria-label="Related material"><h2>Related material</h2>{related.slice(0, 4).map((link) => <a href={link.href} key={link.href}>{link.title}</a>)}</nav>}
          </div>
        </aside>
      </div>
      {children}
    </article>
  </main>;
}
