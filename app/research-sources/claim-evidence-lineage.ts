import { aug20Research } from '../aug20-research';

export const claimEvidenceLineage = {
  route: '/research/research-medical-billing-claim-evidence-lineage',
  slug: 'research-medical-billing-claim-evidence-lineage',
  published: '2026-08-20',
  datePublished: '2026-08-20',
  sourceDate: '2026-08-20',
  record: aug20Research.find((article) => article.slug === 'research-medical-billing-claim-evidence-lineage')!,
};
