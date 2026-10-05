import fs from 'node:fs';
import path from 'node:path';

const published = '2026-10-05' as const;
const featuredImage = '/illustrations/getillustrations/inkdex-saas-illustrations-svg/billing-dashboard.webp';

const slugs = [
  'billing-operations-bank-return-reconciliation',
  'billing-operations-invoice-delivery-failure-queue',
  'billing-operations-contract-renewal-billing-handoff',
  'billing-operations-currency-conversion-evidence-review',
  'billing-operations-customer-master-change-control',
  'billing-operations-invoice-sequence-gap-review',
  'billing-operations-payment-reversal-customer-handoff',
  'billing-operations-proration-input-review',
  'billing-operations-bill-to-ship-to-mismatch-review',
  'billing-operations-unbilled-activity-aging-review',
  'billing-operations-credit-memo-application-review',
  'billing-operations-close-reopen-decision-packet',
] as const;

const descriptions: Record<(typeof slugs)[number], string> = {
  'billing-operations-bank-return-reconciliation': 'A source-led method for tracing returned payments through original receipts, applications, owner decisions, and verified customer balances.',
  'billing-operations-invoice-delivery-failure-queue': 'How to separate channel failures, destination questions, safe retries, due-date decisions, and delivery evidence.',
  'billing-operations-contract-renewal-billing-handoff': 'Translate approved renewal changes into reproducible billing inputs without interpreting commercial terms.',
  'billing-operations-currency-conversion-evidence-review': 'Review rate provenance, quote direction, timing, precision, and rounding before converted amounts reach an invoice.',
  'billing-operations-customer-master-change-control': 'Control customer-record edits through field authority, effective scope, downstream impact, and independent verification.',
  'billing-operations-invoice-sequence-gap-review': 'Explain missing or duplicated invoice numbers using allocator events, artifacts, and bidirectional reconciliation.',
  'billing-operations-payment-reversal-customer-handoff': 'Connect reversal evidence to an approved balance and bounded customer communication without unsupported conclusions.',
  'billing-operations-proration-input-review': 'Verify subscription events, approved methods, unit-labeled calculations, and invoice lines before release.',
  'billing-operations-bill-to-ship-to-mismatch-review': 'Resolve billing and service-location identity conflicts without merging accounts or exposing the wrong customer records.',
  'billing-operations-unbilled-activity-aging-review': 'Separate eligibility from delay and identify the source, system, or owner decision holding each billing event.',
  'billing-operations-credit-memo-application-review': 'Trace approved credit value through applications, reversals, target invoices, residuals, and downstream balances.',
  'billing-operations-close-reopen-decision-packet': 'Preserve a frozen close while presenting late billing evidence as reproducible movements and owner decisions.',
};

function parseSource(slug: (typeof slugs)[number]) {
  const sourcePath = path.join(process.cwd(), 'content', 'blog', `${slug}.md`);
  const raw = fs.readFileSync(sourcePath, 'utf8').replace(/\r\n/g, '\n');
  const lines = raw.split('\n');
  const title = lines.find((line) => line.startsWith('# '))?.slice(2).trim();
  if (!title) throw new Error(`Missing title in ${sourcePath}`);
  const sourceHeading = lines.findIndex((line) => line.trim() === '## Authoritative references');
  if (sourceHeading < 0) throw new Error(`Missing authoritative references in ${sourcePath}`);
  const bodyText = lines.slice(1, sourceHeading).join('\n');
  const body = bodyText.split(/\n\s*\n/).map((paragraph) => paragraph.trim()).filter(Boolean).map((paragraph) => ({
    kind: paragraph.startsWith('## ') ? 'heading' as const : 'paragraph' as const,
    text: paragraph.replace(/^##\s+/, ''),
  }));
  const sources = lines.slice(sourceHeading + 1).map((line) => line.trim()).filter((line) => line.startsWith('- ')).map((line) => {
    const match = line.match(/^- \[([^\]]+)\]\((https?:\/\/[^)]+)\)$/);
    if (!match) throw new Error(`Invalid source line in ${sourcePath}: ${line}`);
    return { name: match[1], url: match[2] };
  });
  return { slug, title, description: descriptions[slug], published, featuredImage, body, sources, sourcePath: `content/blog/${slug}.md` };
}

export const oct5BlogBatch = slugs.map(parseSource);
export const oct5BlogSlugs = [...slugs];
