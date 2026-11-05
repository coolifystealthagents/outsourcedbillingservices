import { Header, Footer } from "../components";
import { allPosts, blogPageCount } from './catalog';
const readerDate = new Intl.DateTimeFormat("en-US", {year:"numeric",month:"long",day:"numeric",timeZone:"UTC"});
export const metadata = {
  title: "Billing Operations Blog",
  description: "Practical guides for scoping Philippines-based billing support, documenting handoffs, controlling exceptions, and reviewing recurring work.",
  alternates: { canonical: "/blog" },
};
export default function Blog() {
  const posts = allPosts.slice(0, 20);
  const pages = blogPageCount;
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
          <div className="article-cards">
            {posts.map((p) => {
              const published =
                "published" in p && typeof p.published === "string"
                  ? p.published
                  : undefined;
              const image =
                "image" in p && typeof p.image === "string"
                  ? p.image
                  : "/hero/november-05/_fallback.webp";

              return (
                <a className="article-card" href={`/blog/${p.slug}`} key={p.slug}>
                  <img src={image} alt="" loading="lazy" width="1200" height="630" />
                  <div className="article-card-body">
                    <h2>{p.title}</h2>
                    <div className="article-card-meta">
                      {published ? (
                        <time dateTime={published}>
                          {readerDate.format(new Date(`${published}T00:00:00Z`))}
                        </time>
                      ) : null}
                      <span>{p.minutes} min read</span>
                    </div>
                    <p>{p.excerpt}</p>
                  </div>
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
