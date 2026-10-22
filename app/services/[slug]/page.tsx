import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { services, site } from '../../data';
import { servicePlaybooks } from '../../service-playbooks';

const serviceAliases: Record<string, string> = {
  'outsourced-team-handoff-checklist': 'billing-data-quality-review',
  'claim-status-follow-up': 'collections-follow-up',
  'claim-submission-checklist': 'invoice-preparation',
};

const base = `https://${String(site.domain).toLowerCase()}`;
export function generateStaticParams() { return services.map((service) => ({ slug: service.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return { title: 'Service not found' };
  const playbook = servicePlaybooks[service.slug];
  return {
    title: service.title,
    description: service.desc,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: service.title, description: service.desc, images: [playbook.hero.src] },
  };
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (serviceAliases[slug]) permanentRedirect(`/services/${serviceAliases[slug]}`);
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const playbook = servicePlaybooks[service.slug];
  if (!playbook) notFound();
  const related = playbook.related.map((relatedSlug) => services.find((item) => item.slug === relatedSlug)).filter(Boolean);
  const url = `${base}/services/${service.slug}`;
  const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: service.title, description: service.desc, url, areaServed: 'United States', provider: { '@type': 'Organization', name: site.brand, url: base } };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: playbook.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) };

  return <>
    <Header />
    <main className="service-detail">
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <section className="service-hero"><div className="container service-hero-grid"><div><p className="eyebrow">Philippines-based billing support</p><h1>{service.title}</h1><p className="lead">{service.desc}</p><p className="service-hero-note">A documented support lane for repeatable preparation, visible exceptions, and owner-controlled decisions.</p><a className="btn primary" href="/contact-us">Discuss this workflow</a></div><figure className="service-hero-figure"><img className="service-hero-image" src={playbook.hero.src} alt={playbook.hero.alt} width={playbook.hero.width} height={playbook.hero.height}/><figcaption>Relevant billing workflow asset from our existing operations library.</figcaption></figure></div></section>

      <section className="section"><div className="container service-reading-grid"><div><p className="eyebrow">Audience</p><h2>Who this service is for</h2><p>{playbook.problem}</p></div><ul className="service-check-list">{playbook.audience.map((item) => <li key={item}>{item}</li>)}</ul></div></section>

      <section className="section muted"><div className="container two"><div><p className="eyebrow">Why teams start here</p><h2>The operating problem</h2><p>{playbook.problem}</p><p>A strong handoff defines the record that starts work, the evidence that supports it, the conditions that stop it, and the person who can make the next decision.</p></div><div className="service-panel"><p className="eyebrow">Service definition</p><h2>Scope of support</h2><p>{playbook.scope}</p><p>{playbook.checks}</p></div></div></section>

      <section className="section"><div className="container two"><div><h2>Inputs and access</h2><ul>{playbook.inputs.map((item) => <li key={item}>{item}</li>)}</ul><p>Begin with a representative sample and the least access required. Expand permissions only after the owner accepts the procedure and stopping points.</p></div><div><h2>Questions before launch</h2><h3>{playbook.launchQuestion}</h3><p>Also identify the source system, queue cutoff, review cadence, response deadlines, sensitive fields, and actions support staff must never approve.</p></div></div></section>

      <section className="section service-workflow-section"><div className="container"><p className="eyebrow">A traceable handoff</p><h2>Workflow</h2><div className="service-workflow">{playbook.workflow.map((step) => <article key={step.title}><span aria-hidden="true">✓</span><h3>{step.title}</h3><p>{step.detail}</p></article>)}</div></div></section>

      <section className="section muted"><div className="container two"><div><h2>Review-ready deliverables</h2><ul>{playbook.deliverables.map((item) => <li key={item}>{item}</li>)}</ul><p>Every deliverable preserves its source, current status, unresolved question, and next accountable owner.</p></div><div><h2>Boundaries and owner decisions</h2><ul>{playbook.boundaries.map((item) => <li key={item}>{item}</li>)}</ul><p>Written boundaries protect customers and the business. They also let a specialist move clean work without guessing what authority was intended.</p></div></div></section>

      <section className="section"><div className="container two"><div><p className="eyebrow">Acceptance criteria</p><h2>Quality controls</h2><ul>{playbook.quality.map((item) => <li key={item}>{item}</li>)}</ul></div><div className="service-panel"><h2>What the weekly review should show</h2><p>Review volume received and completed, held work by cause, oldest unresolved items, sampled errors, reopened records, access changes, and decisions that should become written procedure.</p><p>The purpose is not to claim perfection. It is to make work and exceptions inspectable while there is still time to act.</p></div></div></section>

      <section className="section muted"><div className="container"><p className="eyebrow">Applied scenarios</p><h2>Practical examples</h2><div className="cards service-example-grid">{playbook.examples.map((example) => <article className="card" key={example.title}><h3>{example.title}</h3><p>{example.detail}</p></article>)}</div></div></section>

      <section className="section"><div className="container service-faq"><p className="eyebrow">Service FAQ</p><h2>Frequently asked questions</h2>{playbook.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section>

      <section className="section muted"><div className="container"><h2>Related billing services</h2><p>Compare adjacent support lanes when one queue depends on another source, approval, or reconciliation.</p><div className="cards">{related.map((item) => item && <a className="card" href={`/services/${item.slug}`} key={item.slug}><h3>{item.title}</h3><p>{item.desc}</p><span>Compare service →</span></a>)}</div></div></section>
      <CTA />
    </main>
    <Footer />
  </>;
}
