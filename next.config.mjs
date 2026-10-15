/** @type {import("next").NextConfig} */
const securityHeaders = [
  { key: "Content-Security-Policy", value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://acrtracking.stealthagents.us https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://acrtracking.stealthagents.us https://cloudflareinsights.com; font-src 'self' data:; frame-src https://go.oncehub.com https://*.oncehub.com; object-src 'none'; frame-ancestors 'self'; base-uri 'self'; form-action 'self'" },
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
];

const legacyRedirects = [
  { source: '/blog/philippines-medical-billing-billing-reconciliation', destination: '/services/billing-reconciliation' },
  { source: '/blog/philippines-medical-billing-medical-billing-audit-checklist', destination: '/blog/philippines-medical-billing-audit-checklist' },
  { source: '/services/outsourced-team-handoff-checklist', destination: '/blog/philippines-medical-billing-outsourced-team-handoff-checklist' },
  { source: '/blog/philippines-medical-billing-invoice-preparation', destination: '/services/invoice-preparation' },
  { source: '/blog/philippines-medical-billing-dispute-documentation', destination: '/services/dispute-documentation' },
  { source: '/blog/philippines-medical-billing-billing-data-quality-review', destination: '/services/billing-data-quality-review' },
  { source: '/blog/philippines-medical-billing-customer-billing-support', destination: '/services/customer-billing-support' },
  { source: '/blog/philippines-medical-billing-denial-response-evidence-check', destination: '/blog/aug13-philippines-medical-billing-denial-response-evidence-check' },
  { source: '/services/claim-status-follow-up', destination: '/services/collections-follow-up' },
  { source: '/blog/philippines-medical-billing-claim-status-contact-log', destination: '/blog/aug18-philippines-medical-billing-claim-status-contact-log' },
  { source: '/blog/philippines-medical-billing-billing-data-quality-review-checklist', destination: '/blog/philippines-medical-billing-data-quality-review-checklist' },
  { source: '/blog/philippines-medical-billing-billing-period-cutoff-control', destination: '/blog/aug13-philippines-medical-billing-billing-period-cutoff-control' },
  { source: '/services/subscription-billing', destination: '/services/subscription-billing-support' },
  { source: '/services/billing-process-documentation', destination: '/blog/philippines-medical-billing-outsourced-team-handoff-checklist' },
  { source: '/services/accounts-receivable-follow-up', destination: '/services/collections-follow-up' },
  { source: '/blog/philippines-medical-billing-balance-explanation-evidence', destination: '/services/customer-billing-support' },
  { source: '/services/denial-management', destination: '/services/dispute-documentation' },
  { source: '/blog/philippines-medical-billing-recurring-invoice-cutoff-review', destination: '/blog/aug13-philippines-medical-billing-recurring-invoice-cutoff-review' },
  { source: '/services/claim-submission-checklist', destination: '/blog/philippines-medical-billing-claim-submission-checklist' },
  { source: '/blog/philippines-medical-billing-prior-authorization-tracking', destination: '/blog/philippines-medical-billing-prior-authorization-tracker' },
  { source: '/blog/philippines-medical-billing-correction-history', destination: '/blog/philippines-medical-billing-claim-correction-workflow' },
  { source: '/services/patient-billing-support', destination: '/services/customer-billing-support' },
  { source: '/services/medical-billing-virtual-assistant', destination: '/services' },
  { source: '/services/refund-request-support', destination: '/blog/philippines-medical-billing-refund-review-handoff' },
  { source: '/blog/philippines-medical-billing-payer-enrollment-change-handoff', destination: '/blog/aug13-philippines-medical-billing-payer-enrollment-change-handoff' },
  { source: '/services/charge-entry', destination: '/blog/philippines-medical-billing-charge-entry-review-checklist' },
  { source: '/services/payer-portal-support', destination: '/blog/philippines-medical-billing-payer-portal-work-queue' },
  { source: '/blog/philippines-medical-billing-payment-batch-control-sheet', destination: '/blog/aug13-philippines-medical-billing-payment-batch-control-sheet' },
  { source: '/services/eligibility-verification', destination: '/services/billing-data-quality-review' },
  { source: '/blog/philippines-medical-billing-encounter-date-integrity-check', destination: '/blog/aug13-philippines-medical-billing-encounter-date-integrity-check' },
  { source: '/services/prior-authorization-tracking', destination: '/blog/philippines-medical-billing-prior-authorization-tracker' },
  { source: '/services/claim-submission', destination: '/blog/philippines-medical-billing-claim-submission-checklist' },
  { source: '/research/research-medical-billing-authorization-unit-variance-2026', destination: '/research/research-medical-billing-sep7-authorization-unit-variance-2026' },
  { source: '/research/research-medical-billing-sep1-authorization-unit-variance', destination: '/research/research-medical-billing-sep7-authorization-unit-variance-2026' },
  { source: '/research/research-medical-billing-era-import-rejection-recovery-2026', destination: '/research/research-medical-billing-sep7-era-import-rejection-recovery-2026' },
  { source: '/research/research-medical-billing-claim-transmission-acknowledgment-gap-2026', destination: '/research/research-medical-billing-sep7-claim-transmission-acknowledgment-gap-2026' },
  { source: '/research/research-medical-billing-appeal-receipt-reproducibility-2026', destination: '/research/research-medical-billing-sep7-appeal-receipt-reproducibility-2026' },
  { source: '/blog/aug13-philippines-medical-billing-claim-status-contact-log', destination: '/blog/aug18-philippines-medical-billing-claim-status-contact-log' },
  { source: '/blog/sep4-medical-billing-charge-entry-source-document-index', destination: '/blog/sep7-medical-billing-charge-entry-source-document-index' },
  { source: '/blog/sep4-medical-billing-provider-enrollment-document-expiry-board', destination: '/blog/sep7-medical-billing-provider-enrollment-document-expiry-board' },
  { source: '/blog/sep4-medical-billing-rejected-era-line-recovery-queue', destination: '/blog/sep7-medical-billing-rejected-era-line-recovery-queue' },
  { source: '/blog/sep4-medical-billing-appeal-submission-receipt-chain', destination: '/blog/sep7-medical-billing-appeal-submission-receipt-chain' },
  { source: '/blog/sep4-medical-billing-patient-payment-plan-exception-register', destination: '/blog/sep7-medical-billing-patient-payment-plan-exception-register' },
  { source: '/blog/sep4-medical-billing-payer-portal-message-capture-register', destination: '/blog/sep7-medical-billing-payer-portal-message-capture-register' },
  { source: '/blog/sep4-medical-billing-authorization-unit-depletion-ledger', destination: '/blog/sep7-medical-billing-authorization-unit-depletion-ledger' },
];

const nextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return legacyRedirects.map((redirect) => ({ ...redirect, permanent: true }));
  },
};

export default nextConfig;
