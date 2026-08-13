import {Header, Footer} from '../components';
import {researchPosts, site} from '../data';

const acceptedResearchRank = new Map([
  ['research-medical-billing-aug13-authorization-record-matching', 0],
  ['research-medical-billing-aug13-encounter-charge-gap-analysis', 1],
  ['research-medical-billing-aug13-transmission-response-reconciliation', 2],
  ['research-medical-billing-aug13-denial-cohort-method', 3],
  ['research-medical-billing-aug13-document-aging-cohorts', 4],
  ['research-medical-billing-aug13-balance-explanation-evidence', 5],
  ['research-medical-billing-aug13-enrollment-record-reconciliation', 6],
  ['research-medical-billing-aug13-authorization-timeline-analysis', 7],
  ['research-medical-billing-aug13-rejection-signal-classification', 8],
  ['research-medical-billing-aug13-encounter-disposition-reconciliation', 9],
  ['research-medical-billing-eligibility-evidence', 10],
  ['research-medical-billing-charge-capture-completeness', 11],
  ['research-medical-billing-payer-response-evidence', 12],
  ['research-medical-billing-filing-deadline-risk', 13],
  ['research-medical-billing-refund-release-authorization', 14],
  ['research-medical-billing-appeal-packet-completeness', 15],
  ['research-medical-billing-unapplied-payment-resolution', 16],
  ['research-medical-billing-denial-appeal-readiness', 17],
  ['research-medical-billing-access-review', 18],
  ['research-medical-billing-correction-history', 19],
]);

export const metadata = {title: `Research | ${site.brand}`, description: 'Research notes for Philippines-based staffing decisions.'};

export default function Research() {
  const posts = [...researchPosts].sort((a, b) => {
    const ar = acceptedResearchRank.get(a.slug);
    const br = acceptedResearchRank.get(b.slug);
    if (ar !== undefined || br !== undefined) {
      if (ar === undefined) return 1;
      if (br === undefined) return -1;
      return ar - br;
    }
    return (b.published ?? '').localeCompare(a.published ?? '');
  });
  return <><Header/><main className="section"><div className="container"><p className="eyebrow">Philippines staffing research</p><h1>Research for better role decisions.</h1><p className="lead">Sourced research about Philippines-based billing staffing, queue controls, access boundaries, and owner review.</p>{posts.length ? <div className="cards">{posts.map(p => <a className="card" href={`/research/${p.slug}`} key={p.slug}><h2>{p.title}</h2><p>{p.excerpt}</p></a>)}</div> : <div className="support-strip"><h2>Research library in preparation</h2><p>Return for Philippines-focused research notes as they are published.</p></div>}</div></main><Footer/></>;
}
