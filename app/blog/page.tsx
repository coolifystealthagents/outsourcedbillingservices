import { Header, Footer } from "../components";
import { blogPosts, site } from "../data";
import aug20Meta from "../aug20-meta.json";
import aug21Meta from "../aug21-meta.json";
import { aug23BlogBatch } from "../aug23-blog";
import { sep3BlogBatch } from "../sep3-blog";
import { sep4BlogBatch } from "../sep4-content";
import { sep7BlogBatch } from "../sep7-content";
import { sep8BlogBatch } from "../sep8-content";
import { sep9BlogBatch } from "../sep9-content";
import { sep10BlogBatch } from "../sep10-content";
import { sep18bBlogBatch } from "../sep18b-content";
import { sep22BlogBatch } from "../sep22-content";
import { sep23BlogBatch } from "../sep23-content";
import { sep24BlogBatch } from "../sep24-content";
import { sep25BlogBatch } from "../sep25-content";
import { sep28BlogBatch } from "../sep28-blog";
import { oct2BlogBatch } from "../oct2-blog";
import { oct5BlogBatch } from "../oct5-blog";
import { oct8BlogBatch } from "../oct8-content";
const readerDate = new Intl.DateTimeFormat("en-US", {year:"numeric",month:"long",day:"numeric",timeZone:"UTC"});
export const metadata = {
  title: "Billing Operations Blog",
  description: "Practical guides for scoping Philippines-based billing support, documenting handoffs, controlling exceptions, and reviewing recurring work.",
  alternates: { canonical: "/blog" },
};
export default function Blog() {
  const daily = [
    ...oct8BlogBatch.map(
      (p) => [p.slug, { title: p.title, description: p.description, published: p.published }] as const,
    ),
    ...oct5BlogBatch.map(
      (p) => [p.slug, { title: p.title, description: p.description }] as const,
    ),
    ...oct2BlogBatch.map(
      (p) => [p.slug, { title: p.title, description: p.description }] as const,
    ),
    ...sep28BlogBatch.map(
      (p) => [p.slug, { title: p.title, description: p.description }] as const,
    ),
    ...sep25BlogBatch.map(
      (p) => [p.slug, { title: p.title, description: p.description }] as const,
    ),
    ...sep24BlogBatch.map(
      (p) => [p.slug, { title: p.title, description: p.description }] as const,
    ),
    ...sep23BlogBatch.map(
      (p) => [p.slug, { title: p.title, description: p.description }] as const,
    ),
    ...sep22BlogBatch.map(
      (p) => [p.slug, { title: p.title, description: p.description }] as const,
    ),
    ...sep18bBlogBatch.map(
      (p) => [p.slug, { title: p.title, description: p.description }] as const,
    ),
    ...sep10BlogBatch.map(
      (p) => [p.slug, { title: p.title, description: p.description }] as const,
    ),
    ...sep9BlogBatch.map(
      (p) => [p.slug, { title: p.title, description: p.description }] as const,
    ),
    ...sep8BlogBatch.map(
      (p) => [p.slug, { title: p.title, description: p.description }] as const,
    ),
    ...sep7BlogBatch.map(
      (p) => [p.slug, { title: p.title, description: p.description }] as const,
    ),
    ...sep4BlogBatch.map(
      (p) => [p.slug, { title: p.title, description: p.description }] as const,
    ),
    ...sep3BlogBatch.map(
      (p) => [p.slug, { title: p.title, description: p.description }] as const,
    ),
    ...aug23BlogBatch.map(
      (p) => [p.slug, { title: p.title, description: p.description }] as const,
    ),
    ...Object.entries(aug21Meta),
    ...Object.entries(aug20Meta),
  ].map(([slug, p]) => ({
    slug,
    title: p.title,
    excerpt: p.description,
    minutes: 8,
    published: "published" in p ? p.published : undefined,
  }));
  const latest = blogPosts.filter((p) => p.detail?.published === "2026-09-02");
  const earlier = blogPosts.filter((p) => p.detail?.published !== "2026-09-02");
  const posts = [
    ...daily.slice(0, 24),
    ...latest,
    ...daily.slice(24),
    ...earlier,
  ].slice(0, 20);
  const pages = Math.max(1, Math.ceil((blogPosts.length + daily.length) / 20));
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <p className="eyebrow">Philippines staffing blog</p>
          <h1>Practical role and handoff guides.</h1>
          <p className="lead">
            Read concise guidance for scoping and managing Filipino support
            roles. Existing article addresses remain available.
          </p>
          <div className="cards">
            {posts.map((p) => {
              const published =
                "published" in p && typeof p.published === "string"
                  ? p.published
                  : undefined;

              return (
                <a className="card" href={`/blog/${p.slug}`} key={p.slug}>
                  <h2>{p.title}</h2>
                  {published ? (
                    <time dateTime={published}>
                      Published {readerDate.format(new Date(`${published}T00:00:00Z`))}
                    </time>
                  ) : null}
                  <p>{p.excerpt}</p>
                  <span>{p.minutes} min read</span>
                </a>
              );
            })}
          </div>
          <nav className="pagination" aria-label="Blog pages">
            {Array.from({ length: pages }, (_, i) => (
              <a
                aria-current={i === 0 ? "page" : undefined}
                href={i === 0 ? "/blog" : `/blog/page/${i + 1}`}
                key={i}
              >
                {i + 1}
              </a>
            ))}
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}
