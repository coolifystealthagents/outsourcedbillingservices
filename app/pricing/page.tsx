import type { Metadata } from 'next';
import { Header, Footer, CTA } from '../components';
import { site } from '../data';

const canonicalUrl = 'https://outsourcedbillingservices.com/pricing';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Compare public hourly rates for Filipino billing assistants, senior billing specialists, and billing operations coordinators.',
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: 'Filipino billing staff pricing',
    description: 'Public hourly rates for Philippines-based billing staff, with clear task scope and client approval limits.',
    url: canonicalUrl,
    type: 'website',
  },
};

const tiers = [
  {
    price: 10,
    name: 'Billing assistant',
    fit: 'Best for documented, repeatable billing admin.',
    items: ['Invoice data entry and preparation', 'Billing inbox and queue updates', 'Payment follow-up notes and reports'],
  },
  {
    price: 15,
    name: 'Senior billing specialist',
    fit: 'Best for work that needs stronger billing judgment and review.',
    items: ['Reconciliation and exception review', 'Dispute and credit memo preparation', 'Month-end billing support'],
  },
  {
    price: 18,
    name: 'Billing operations coordinator',
    fit: 'Best for a larger queue with reporting and handoff duties.',
    items: ['Queue ownership and workload tracking', 'Quality checks and issue escalation', 'Billing reports for the client owner'],
  },
] as const;

const pricingSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${canonicalUrl}#service`,
  name: 'Philippines-based billing staffing',
  url: canonicalUrl,
  description: 'Hourly staffing for Filipino billing assistants, senior billing specialists, and billing operations coordinators.',
  provider: {
    '@type': 'Organization',
    name: site.brand,
    url: 'https://outsourcedbillingservices.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Philippines',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Billing staffing rates',
    itemListElement: tiers.map((tier) => ({
      '@type': 'Offer',
      name: tier.name,
      price: tier.price,
      priceCurrency: 'USD',
      unitText: 'HOUR',
      itemOffered: {
        '@type': 'Service',
        name: `${tier.name} staffing from the Philippines`,
        description: tier.fit,
      },
    })),
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://outsourcedbillingservices.com' },
    { '@type': 'ListItem', position: 2, name: 'Pricing', item: canonicalUrl },
  ],
};

export default function Pricing() {
  return (
    <>
      <Header />
      <main>
        <section className="architecture-hero">
          <div className="container">
            <p className="eyebrow">Philippines billing staffing prices</p>
            <h1>Choose the billing support level that fits the work.</h1>
            <p className="lead">
              Every rate is for talent recruited and hired in the Philippines. Choose a starting level based on the billing queue, then confirm the tools, hours, access, and review rules before hiring.
            </p>
          </div>
        </section>

        <section className="section" aria-labelledby="pricing-levels">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Public hourly rates</p>
              <h2 id="pricing-levels">Three levels for different billing needs</h2>
              <p>
                These rates help you plan, but the job title alone does not set the scope. We match Filipino talent to the work your billing owner can document and review.
              </p>
            </div>
            <div className="pricing-grid">
              {tiers.map((tier) => (
                <article className="card price-card" key={tier.name}>
                  <p className="price">${tier.price}/hour</p>
                  <h3>{tier.name}</h3>
                  <p>{tier.fit} The client still sets the approval limits and signs off on sensitive account actions.</p>
                  <ul>{tier.items.map((item) => <li key={item}>{item}</li>)}</ul>
                  <a className="btn primary" href="/contact">Discuss this level</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt" aria-labelledby="owner-controls">
          <div className="container support-strip">
            <h2 id="owner-controls">Your team keeps the billing decisions</h2>
            <p>
              Filipino billing staff can prepare records, update queues, and flag exceptions. Your designated owner approves credits, refunds, write-offs, payment changes, and unusual account actions.
            </p>
            <a className="text-link" href="/services">See the billing work we cover</a>
          </div>
        </section>

        <CTA />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </main>
      <Footer />
    </>
  );
}
