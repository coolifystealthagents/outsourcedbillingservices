import { Header, Footer, CTA, JsonLd } from '../../components';
import { serviceSources, services, site } from '../../data';

const baseUrl = 'https://outsourcedbillingservices.com';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug) || services[0];

  return {
    title: service.title,
    description: service.desc,
    alternates: { canonical: `${baseUrl}/services/${service.slug}` },
    openGraph: {
      title: service.title,
      description: service.desc,
      url: `${baseUrl}/services/${service.slug}`,
      type: 'website',
    },
  };
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug) || services[0];
  const serviceUrl = `${baseUrl}/services/${service.slug}`;
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${serviceUrl}#webpage`,
      url: serviceUrl,
      name: service.title,
      description: service.desc,
      isPartOf: { '@type': 'WebSite', '@id': `${baseUrl}/#website`, name: site.brand, url: baseUrl },
      about: { '@id': `${serviceUrl}#service` },
      hasPart: [
        { '@id': `${serviceUrl}#launch-plan` },
        { '@id': `${serviceUrl}#faq` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${serviceUrl}#service`,
      name: service.title,
      serviceType: 'Outsourced billing services',
      provider: { '@type': 'Organization', name: site.brand, url: baseUrl },
      areaServed: 'United States',
      description: service.desc,
      termsOfService: `${baseUrl}/terms`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      '@id': `${serviceUrl}#launch-plan`,
      name: `How to launch ${service.title.toLowerCase()}`,
      step: service.launchPlan.map((item, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: item,
        text: item,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${serviceUrl}#faq`,
      mainEntity: service.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${baseUrl}/#services` },
        { '@type': 'ListItem', position: 3, name: service.title, item: serviceUrl },
      ],
    },
  ];

  return (
    <>
      <Header />
      <main>
        <JsonLd data={schema} />
        <section className="service-hero">
          <div className="container two">
            <div>
              <p className="eyebrow">{site.brand} service</p>
              <h1>{service.title}</h1>
              <p className="lead">{service.desc}</p>
              <p>{service.buyerProblem}</p>
              <a className="btn" href="/contact">
                Plan this billing role
              </a>
            </div>
            <div className="hero-card">
              <img src={site.serviceImage} alt={`${service.title} offshore service team`} />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <p className="eyebrow">Scope</p>
            <h2>Good billing support starts with a narrow desk.</h2>
            <div className="cards">
              <div className="card">
                <h3>Best tasks</h3>
                <ul>
                  {service.bestTasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </div>
              <div className="card">
                <h3>Quality controls</h3>
                <ul>
                  {service.controls.map((control) => (
                    <li key={control}>{control}</li>
                  ))}
                </ul>
              </div>
              <div className="card" id="launch-plan">
                <h3>First week launch</h3>
                <ol>
                  {service.launchPlan.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="section band">
          <div className="container two">
            <div>
              <p className="eyebrow">Owner guardrails</p>
              <h2>Keep control of money, access, and exceptions.</h2>
              <p>
                Remote billing help works best when the assistant prepares, updates, and flags work while the owner keeps final decisions. That line matters for refunds, write-offs, coding, disputes, collections, and anything that changes the account balance.
              </p>
              <p className="quote">
                "The assistant can prepare the file and show the blocker. The billing owner decides what happens next."
              </p>
            </div>
            <div className="card">
              <h3>Useful source notes</h3>
              <ul>
                {serviceSources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url}>{source.name}</a>: {source.note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container">
            <p className="eyebrow">Buyer questions</p>
            <h2>Questions teams ask before they outsource billing work.</h2>
            <div className="cards">
              {service.faqs.map((faq) => (
                <div className="card" key={faq.q}>
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
