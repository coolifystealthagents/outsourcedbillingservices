export const blogAliases: Readonly<Record<string, string>> = {
  'aug13-philippines-medical-billing-claim-status-contact-log': 'aug18-philippines-medical-billing-claim-status-contact-log',
  'sep4-medical-billing-charge-entry-source-document-index': 'sep7-medical-billing-charge-entry-source-document-index',
  'sep4-medical-billing-provider-enrollment-document-expiry-board': 'sep7-medical-billing-provider-enrollment-document-expiry-board',
  'sep4-medical-billing-rejected-era-line-recovery-queue': 'sep7-medical-billing-rejected-era-line-recovery-queue',
  'sep4-medical-billing-appeal-submission-receipt-chain': 'sep7-medical-billing-appeal-submission-receipt-chain',
  'sep4-medical-billing-patient-payment-plan-exception-register': 'sep7-medical-billing-patient-payment-plan-exception-register',
  'sep4-medical-billing-payer-portal-message-capture-register': 'sep7-medical-billing-payer-portal-message-capture-register',
  'sep4-medical-billing-authorization-unit-depletion-ledger': 'sep7-medical-billing-authorization-unit-depletion-ledger',
};

export const researchAliases: Readonly<Record<string, string>> = {
  'research-medical-billing-authorization-unit-variance-2026': 'research-medical-billing-sep7-authorization-unit-variance-2026',
  'research-medical-billing-sep1-authorization-unit-variance': 'research-medical-billing-sep7-authorization-unit-variance-2026',
  'research-medical-billing-era-import-rejection-recovery-2026': 'research-medical-billing-sep7-era-import-rejection-recovery-2026',
  'research-medical-billing-claim-transmission-acknowledgment-gap-2026': 'research-medical-billing-sep7-claim-transmission-acknowledgment-gap-2026',
  'research-medical-billing-appeal-receipt-reproducibility-2026': 'research-medical-billing-sep7-appeal-receipt-reproducibility-2026',
};

export const redirectPaths = new Set([
  ...Object.keys(blogAliases).map((slug) => `/blog/${slug}`),
  ...Object.keys(researchAliases).map((slug) => `/research/${slug}`),
]);
