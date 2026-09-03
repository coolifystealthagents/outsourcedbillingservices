import {Header, Footer} from '../components';
import {researchPosts, site} from '../data';

const acceptedResearchRank = new Map([
  ['research-medical-billing-aug17-eligibility-response-versioning', 0],
  ['research-medical-billing-aug17-claim-control-number-lineage', 1],
  ['research-medical-billing-aug17-remittance-batch-cutoff-integrity', 2],
  ['research-medical-billing-aug17-document-access-denial-analysis', 3],
  ['research-medical-billing-aug17-patient-responsibility-variance', 4],
  ['research-medical-billing-aug17-coding-query-turnaround-cohort', 5],
  ['research-medical-billing-aug17-payer-portal-evidence-reproducibility', 6],
  ['research-medical-billing-aug17-reversal-reinstatement-lineage', 7],
  ['research-medical-billing-aug17-account-credit-transfer-cohort', 8],
  ['research-medical-billing-aug17-billing-queue-exclusion-audit', 9],
  ['research-medical-billing-aug14-remittance-adjustment-lineage', 0],
  ['research-medical-billing-aug14-claim-receipt-cohort', 1],
  ['research-medical-billing-aug14-credit-balance-cohort', 2],
  ['research-medical-billing-aug14-payer-message-history', 3],
  ['research-medical-billing-aug14-duplicate-payment-screen', 4],
  ['research-medical-billing-aug14-service-date-cohort', 5],
  ['research-medical-billing-aug14-document-version-lineage', 6],
  ['research-medical-billing-aug14-unbilled-disposition-cohort', 7],
  ['research-medical-billing-aug14-denial-evidence-cohort', 8],
  ['research-medical-billing-aug14-eligibility-time-window', 9],
  ['research-medical-billing-aug13-authorization-record-matching', 10],
  ['research-medical-billing-aug13-encounter-charge-gap-analysis', 11],
  ['research-medical-billing-aug13-transmission-response-reconciliation', 12],
  ['research-medical-billing-aug13-denial-cohort-method', 13],
  ['research-medical-billing-aug13-document-aging-cohorts', 14],
  ['research-medical-billing-aug13-balance-explanation-evidence', 15],
  ['research-medical-billing-aug13-enrollment-record-reconciliation', 16],
  ['research-medical-billing-aug13-authorization-timeline-analysis', 17],
  ['research-medical-billing-aug13-rejection-signal-classification', 18],
  ['research-medical-billing-aug13-encounter-disposition-reconciliation', 19],
  ['research-medical-billing-eligibility-evidence', 20],
  ['research-medical-billing-charge-capture-completeness', 21],
  ['research-medical-billing-payer-response-evidence', 22],
  ['research-medical-billing-filing-deadline-risk', 23],
  ['research-medical-billing-refund-release-authorization', 24],
  ['research-medical-billing-appeal-packet-completeness', 25],
  ['research-medical-billing-unapplied-payment-resolution', 26],
  ['research-medical-billing-denial-appeal-readiness', 27],
  ['research-medical-billing-access-review', 28],
  ['research-medical-billing-correction-history', 29],
]);
const aug17DeficitRank = new Map([
  ['research-medical-billing-aug17-secondary-payer-crossover-trace', 0],
  ['research-medical-billing-aug17-era-adjustment-code-mapping', 1],
  ['research-medical-billing-aug17-claim-attachment-acceptance', 2],
  ['research-medical-billing-aug17-underpayment-component-variance', 3],
  ['research-medical-billing-aug17-provider-enrollment-effective-date', 4],
  ['research-medical-billing-aug17-refund-request-aging', 5],
  ['research-medical-billing-aug17-claim-status-response-latency', 6],
  ['research-medical-billing-aug17-charge-correction-provenance', 7],
  ['research-medical-billing-aug17-payer-enrollment-identifier-linkage', 8],
  ['research-medical-billing-aug17-denial-receipt-window', 9],
]);
const aug20ResearchRank = new Map([
  ['research-medical-billing-claim-evidence-lineage', 0],
  ['research-medical-billing-remittance-batch-reconciliation', 1],
  ['research-medical-billing-denial-response-evidence', 2],
  ['research-medical-billing-queue-exception-sampling', 3],
  ['research-medical-billing-access-recertification', 4],
]);
const aug21ResearchRank = new Map([
  ['research-medical-billing-authorization-expiry-cohort-2026', 0],
  ['research-medical-billing-coordination-benefits-sequencing-2026', 1],
  ['research-medical-billing-timely-filing-evidence-chain-2026', 2],
  ['research-medical-billing-telehealth-place-service-evidence-2026', 3],
  ['research-medical-billing-recoupment-notice-lineage-2026', 4],
]);
const aug23ResearchRank = new Map([
  ['research-medical-billing-remittance-adjustment-lineage-2026', 0],
  ['research-medical-billing-claim-receipt-cohort-2026', 1],
  ['research-medical-billing-service-date-cohort-2026', 2],
  ['research-medical-billing-payer-message-history-2026', 3],
  ['research-medical-billing-document-version-lineage-2026', 4],
]);
const sep3ResearchRank = new Map([
  ['research-medical-billing-clearinghouse-enrollment-change-lag-2026', 0],
  ['research-medical-billing-secondary-claim-crossover-breakpoint-2026', 1],
  ['research-medical-billing-statement-hold-release-evidence-2026', 2],
  ['research-medical-billing-portal-export-reproducibility-2026', 3],
  ['research-medical-billing-credit-balance-cause-drift-2026', 4],
]);

export const metadata = {title: `Research | ${site.brand}`, description: 'Research notes for Philippines-based staffing decisions.'};

export default function Research() {
  const posts = [...researchPosts].sort((a, b) => {
    const dateOrder = (b.published ?? '').localeCompare(a.published ?? '');
    if (dateOrder !== 0) return dateOrder;
    const as3 = sep3ResearchRank.get(a.slug);
    const bs3 = sep3ResearchRank.get(b.slug);
    if (as3 !== undefined || bs3 !== undefined) {
      if (as3 === undefined) return 1;
      if (bs3 === undefined) return -1;
      return as3 - bs3;
    }
    const ar23 = aug23ResearchRank.get(a.slug);
    const br23 = aug23ResearchRank.get(b.slug);
    if (ar23 !== undefined || br23 !== undefined) {
      if (ar23 === undefined) return 1;
      if (br23 === undefined) return -1;
      return ar23 - br23;
    }
    const ar21 = aug21ResearchRank.get(a.slug);
    const br21 = aug21ResearchRank.get(b.slug);
    if (ar21 !== undefined || br21 !== undefined) {
      if (ar21 === undefined) return 1;
      if (br21 === undefined) return -1;
      return ar21 - br21;
    }
    const ar20 = aug20ResearchRank.get(a.slug);
    const br20 = aug20ResearchRank.get(b.slug);
    if (ar20 !== undefined || br20 !== undefined) {
      if (ar20 === undefined) return 1;
      if (br20 === undefined) return -1;
      return ar20 - br20;
    }
    const ad = aug17DeficitRank.get(a.slug);
    const bd = aug17DeficitRank.get(b.slug);
    if (ad !== undefined || bd !== undefined) {
      if (ad === undefined) return 1;
      if (bd === undefined) return -1;
      return ad - bd;
    }
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
