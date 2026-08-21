import { aug20Research } from '../aug20-research';

export const accessRecertification = {
  route: '/research/research-medical-billing-access-recertification',
  slug: 'research-medical-billing-access-recertification',
  published: '2026-08-20',
  datePublished: '2026-08-20',
  sourceDate: '2026-08-20',
  record: aug20Research.find((article) => article.slug === 'research-medical-billing-access-recertification')!,
};
