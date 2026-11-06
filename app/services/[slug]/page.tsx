const fieldPhotos: Record<string,[string,string]> = {"invoice-preparation": ["/design-photography/8872719.webp", "An invoice being checked at an office desk"], "usage-billing-administration": ["/design-photography/8296977.webp", "a person examining a document"], "subscription-billing-support": ["/design-photography/7129713.webp", "An office worker checking a printed document beside a laptop"], "billing-reconciliation": ["/design-photography/8293764.webp", "a person wearing wristwatch filling up the paper"], "payment-posting": ["/design-photography/9052475.webp", "a person using a calculator"], "credit-memo-administration": ["/design-photography/19905193.webp", "planning new year on paper"], "collections-follow-up": ["/design-photography/7682353.webp", "man working in a call center"], "customer-billing-support": ["/design-photography/7709284.webp", "low angle shot of a woman in a white shirt wearing a black headset"], "revenue-schedule-preparation": ["/design-photography/12911169.webp", "pens and a planner on a desk"], "billing-data-quality-review": ["/design-photography/6949417.webp", "Colleagues reviewing a printed report during a meeting"], "dispute-documentation": ["/design-photography/5668507.webp", "businesswoman writing notes in planner in office"], "month-end-billing-support": ["/design-photography/5240008.webp", "a calendar and laptop on a desk"]};
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
    openGraph: { title: service.title, description: service.desc, images: [fieldPhotos[service.slug][0]] },
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
      <section className="service-hero"><div className="container service-hero-grid"><div><p className="eyebrow">Philippines-based billing support</p><h1>{service.title}</h1><p className="lead">{playbook.scope}</p><p className="service-hero-note"><strong>Your deliverable:</strong> {playbook.deliverables[0]}</p><a className="btn primary" href="/contact-us">Discuss this workflow</a></div><figure className="service-hero-figure"><img className="service-hero-image" src={fieldPhotos[service.slug][0]} alt={fieldPhotos[service.slug][1]} width={playbook.hero.width} height={playbook.hero.height}/><figcaption>Billing desk · workflow preparation</figcaption></figure></div></section>

      <nav className="brief-nav" aria-label="On this page"><a href="#work">The work</a><a href="#process">Process</a><a href="#checks">Approvals & checks</a><a href="#questions">Questions</a></nav>
      <section className="brief-section" id="work"><div className="brief-shell">
        <div className="brief-context"><p className="eyebrow">Where this helps</p><p>{playbook.problem}</p></div>
        <div className="brief-columns"><article><h2>What we prepare</h2><p>{playbook.checks}</p><h3>What you provide</h3><ul>{playbook.inputs.map(item => <li key={item}>{item}</li>)}</ul></article><aside className="brief-output"><p className="eyebrow">Your finished handoff</p><h2>Ready for your review</h2><ul>{playbook.deliverables.map(item => <li key={item}>{item}</li>)}</ul></aside></div>
        <div className="brief-fit"><strong>Built for</strong>{playbook.audience.map(item => <span key={item}>{item}</span>)}</div>
      </div></section>
      <section className="brief-section brief-tint" id="process"><div className="brief-shell"><div className="brief-heading"><p className="eyebrow">From source to handoff</p><h2>How the work moves</h2></div><ol className="brief-steps">{playbook.workflow.map((step,i)=><li key={step.title}><h3>{step.title}</h3><p>{step.detail}</p></li>)}</ol><div className="brief-examples">{playbook.examples.map(example=><article key={example.title}><h3>{example.title}</h3><p>{example.detail}</p></article>)}</div></div></section>
      <section className="brief-section" id="checks"><div className="brief-shell brief-columns"><article><p className="eyebrow">Your authority stays clear</p><h2>Decisions you keep</h2><ul>{playbook.boundaries.map(item=><li key={item}>{item}</li>)}</ul></article><article><p className="eyebrow">Before work is accepted</p><h2>Checks that matter</h2><ul>{playbook.quality.map(item=><li key={item}>{item}</li>)}</ul></article><p className="brief-note brief-launch-note"><strong>Agree before launch:</strong> {playbook.launchQuestion}</p></div></section>
      <section className="brief-section brief-tint" id="questions"><div className="brief-shell"><div className="brief-heading"><p className="eyebrow">Before you start</p><h2>Your questions, answered</h2></div><div className="brief-faq">{playbook.faqs.map(faq=><details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div><nav className="brief-related" aria-label="Related services"><strong>Related services</strong>{related.map(item=>item&&<a href={`/services/${item.slug}`} key={item.slug}>{item.title} ↗</a>)}</nav></div></section>
      <CTA />
    </main><Footer /></>;
}
