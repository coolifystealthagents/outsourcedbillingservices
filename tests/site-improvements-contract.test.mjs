import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { waitForTracker } from '../app/lib/wait-for-tracker.mjs';

const page = readFileSync(new URL('../app/page.tsx', import.meta.url), 'utf8');
const components = readFileSync(new URL('../app/components.tsx', import.meta.url), 'utf8');
const contact = readFileSync(new URL('../app/contact-us/page.tsx', import.meta.url), 'utf8');
const intakeContact = readFileSync(new URL('../app/contact/page.tsx', import.meta.url), 'utf8');
const thankYou = readFileSync(new URL('../app/thank-you/page.tsx', import.meta.url), 'utf8');
const whatsNext = readFileSync(new URL('../app/thanks-whats-next/page.tsx', import.meta.url), 'utf8');
const bookingComponents = readFileSync(new URL('../app/booking-components.tsx', import.meta.url), 'utf8');
const standardContactForm = readFileSync(new URL('../app/contact-us/StandardContactForm.tsx', import.meta.url), 'utf8');
const acrClient = readFileSync(new URL('../app/acr-client.tsx', import.meta.url), 'utf8');
const servicesIndex = readFileSync(new URL('../app/services/page.tsx', import.meta.url), 'utf8');
const serviceDetail = readFileSync(new URL('../app/services/[slug]/page.tsx', import.meta.url), 'utf8');
const notFoundPage = readFileSync(new URL('../app/not-found.tsx', import.meta.url), 'utf8');
const contactCss = readFileSync(new URL('../app/contact-us/contact.css', import.meta.url), 'utf8');
const globalCss = readFileSync(new URL('../app/globals.css', import.meta.url), 'utf8');
const nextConfig = readFileSync(new URL('../next.config.mjs', import.meta.url), 'utf8');
const researchRoute = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
const blogRoute = readFileSync(new URL('../app/blog/[slug]/page.tsx', import.meta.url), 'utf8');
const blogPagination = readFileSync(new URL('../app/blog/page/[page]/page.tsx', import.meta.url), 'utf8');
const sitemapRoute = readFileSync(new URL('../app/sitemap.xml/route.ts', import.meta.url), 'utf8');
const paymentReversalArticle = readFileSync(new URL('../content/blog/billing-operations-payment-reversal-customer-handoff.md', import.meta.url), 'utf8');
const punctuationSources = [
  '../app/sep28-blog.ts', '../app/aug18-blog.ts', '../app/sep1-content.ts',
  '../app/sep18-research.ts', '../app/aug31-content.ts', '../app/sep7-content.ts',
  '../app/data.ts', '../app/booking-components.tsx', '../app/sep2-content.ts',
  '../app/contact/page.tsx', '../app/lib/lead-fallback-mattermost.ts',
  '../app/blog/top-25-billing-back-office-outsourcing-companies/page.tsx',
  '../app/blog/page/[page]/page.tsx',
].map((path) => readFileSync(new URL(path, import.meta.url), 'utf8'));
const canonicalCtaSources = [
  page,
  readFileSync(new URL('../app/services/[slug]/page.tsx', import.meta.url), 'utf8'),
  readFileSync(new URL('../app/pricing/page.tsx', import.meta.url), 'utf8'),
  readFileSync(new URL('../app/blog/[slug]/page.tsx', import.meta.url), 'utf8'),
  readFileSync(new URL('../app/blog/top-25-billing-back-office-outsourcing-companies/page.tsx', import.meta.url), 'utf8'),
];

assert.match(components, /function Attribution\(/, 'shared attribution component is missing');
assert.match(components, /https:\/\/stealthagents\.com\//, 'attribution must link to Stealth Agents');
assert.match(components, /<header[\s\S]*?<Attribution\s*\/>[\s\S]*?<\/header>/, 'header must render attribution directly below its logo');
assert.match(components, /<footer[\s\S]*?<Attribution\s*\/>[\s\S]*?<\/footer>/, 'global footer must render attribution');
assert.match(components, /className="skip-link" href="#main-content"/, 'shared header must provide a working skip link');
assert.match(components, /id="main-content" className="skip-target" tabIndex=\{-1\}/, 'shared header must provide the skip-link focus target after navigation');
assert.match(components, /<nav className="links fleet-links"[\s\S]*?href="\/contact-us">Contact Us<\/a>/, 'primary Contact Us navigation must point to /contact-us');
assert.doesNotMatch(components.match(/<nav className="links fleet-links"[\s\S]*?<\/nav>/)?.[0] || '', /href="\/contact"/, 'primary navigation must not point Contact Us to the legacy /contact route');
assert.match(globalCss, /\.nav\{[^}]*position:sticky;[^}]*top:0;/, 'shared navigation must remain visible while scrolling');
for (const source of canonicalCtaSources) assert.doesNotMatch(source, /href="\/contact"/, 'commercial CTAs must use the canonical /contact-us funnel');
const legacyTargets = [
  '/blog/philippines-medical-billing-billing-reconciliation',
  '/blog/philippines-medical-billing-medical-billing-audit-checklist',
  '/services/outsourced-team-handoff-checklist',
  '/blog/philippines-medical-billing-invoice-preparation',
  '/blog/philippines-medical-billing-dispute-documentation',
  '/blog/philippines-medical-billing-billing-data-quality-review',
  '/blog/philippines-medical-billing-customer-billing-support',
  '/blog/philippines-medical-billing-denial-response-evidence-check',
  '/services/claim-status-follow-up',
  '/blog/philippines-medical-billing-claim-status-contact-log',
  '/blog/philippines-medical-billing-billing-data-quality-review-checklist',
  '/blog/philippines-medical-billing-billing-period-cutoff-control',
  '/services/subscription-billing',
  '/services/billing-process-documentation',
  '/services/accounts-receivable-follow-up',
  '/blog/philippines-medical-billing-balance-explanation-evidence',
  '/services/denial-management',
  '/blog/philippines-medical-billing-recurring-invoice-cutoff-review',
  '/services/claim-submission-checklist',
  '/blog/philippines-medical-billing-prior-authorization-tracking',
  '/blog/philippines-medical-billing-correction-history',
  '/services/patient-billing-support',
  '/services/medical-billing-virtual-assistant',
  '/services/refund-request-support',
  '/blog/philippines-medical-billing-payer-enrollment-change-handoff',
  '/services/charge-entry',
  '/services/payer-portal-support',
  '/blog/philippines-medical-billing-payment-batch-control-sheet',
  '/services/eligibility-verification',
  '/blog/philippines-medical-billing-encounter-date-integrity-check',
  '/services/prior-authorization-tracking',
  '/services/claim-submission',
];
for (const target of legacyTargets) assert.ok(nextConfig.includes(`source: '${target}'`), `legacy target needs an explicit redirect: ${target}`);
const canonicalAliasTargets = [
  '/research/research-medical-billing-authorization-unit-variance-2026',
  '/research/research-medical-billing-sep1-authorization-unit-variance',
  '/research/research-medical-billing-era-import-rejection-recovery-2026',
  '/research/research-medical-billing-claim-transmission-acknowledgment-gap-2026',
  '/research/research-medical-billing-appeal-receipt-reproducibility-2026',
  '/blog/aug13-philippines-medical-billing-claim-status-contact-log',
  '/blog/sep4-medical-billing-charge-entry-source-document-index',
  '/blog/sep4-medical-billing-provider-enrollment-document-expiry-board',
  '/blog/sep4-medical-billing-rejected-era-line-recovery-queue',
  '/blog/sep4-medical-billing-appeal-submission-receipt-chain',
  '/blog/sep4-medical-billing-patient-payment-plan-exception-register',
  '/blog/sep4-medical-billing-payer-portal-message-capture-register',
  '/blog/sep4-medical-billing-authorization-unit-depletion-ledger',
];
for (const target of canonicalAliasTargets) assert.ok(nextConfig.includes(`source: '${target}'`), `canonical alias needs an explicit redirect: ${target}`);
assert.match(nextConfig, /async redirects\(\)/, 'legacy route repairs must use framework redirects');
assert.match(nextConfig, /frame-src https:\/\/go\.oncehub\.com https:\/\/\*\.oncehub\.com/, 'security policy must permit the preserved OnceHub iframe and its same-provider navigation');
assert.match(nextConfig, /key: "Permissions-Policy"/, 'security headers must include Permissions-Policy');
assert.match(researchRoute, /filter\(\(\{\s*slug\s*\}\)\s*=>\s*!researchAliases\[slug\]\)/, 'research redirect aliases must not be prerendered as empty pages');
assert.match(blogRoute, /filter\(\(\{\s*slug\s*\}\)\s*=>\s*!duplicateAliases\[slug\]\)/, 'blog redirect aliases must not be prerendered as empty pages');
assert.match(blogPagination, /i\s*\+\s*2/, 'blog pagination generation must start at page 2');
assert.match(sitemapRoute, /oct8BlogSlugs/, 'sitemap must include the Oct. 8 article collection');
assert.match(sitemapRoute, /"\/contact-us"/, 'sitemap must include the canonical contact page');
assert.match(sitemapRoute, /"\/pricing"/, 'sitemap must include the indexable pricing page');
assert.match(sitemapRoute, /redirectSources/, 'sitemap must filter redirect sources');
assert.match(researchRoute, /researchSeoTitles/, 'research pages with similar names must have unique, accurate SEO titles');
assert.match(blogRoute, /blogSeoTitles/, 'materially different articles with similar names must have unique, accurate SEO titles');
for (const source of punctuationSources) assert.doesNotMatch(source, /—|–|(?<!-)--(?!-)/, 'rendered site content must not contain forbidden dash punctuation');
assert.doesNotMatch(paymentReversalArticle, /—|–|(?<!-)--(?!-)/, 'Markdown articles must not emit forbidden dash punctuation');

const trustBlock = page.match(/<div className="billing-trust">[\s\S]*?<\/div>/)?.[0] || '';
assert.match(trustBlock, /<span className="billing-trust-stars" role="img" aria-label="Five visible billing checkpoints">★★★★★<\/span>/, 'homepage hero must expose the five-star workflow visual accessibly');
assert.match(trustBlock, /Received, prepared, reviewed, sent, and followed up\./, 'five-star visual must be grounded in the five documented workflow checkpoints');
assert.doesNotMatch(trustBlock, /\b(?:rating|rated|reviews?|five-star trust indicator)\b/i, 'five-star workflow visual must not imply an unsupported customer rating');
assert.doesNotMatch(page, /<span>0\{i \+ 1\}<\/span>/, 'homepage service cards should use relevant visual marks instead of repeated numbering');
assert.doesNotMatch(page, /padStart\(2, '0'\)|Guide \/ 0\{i \+ 1\}/, 'homepage must not use decorative zero-padded labels');
assert.equal((page.match(/billing-dashboard\.webp/g) || []).length, 1, 'major homepage sections must not repeat the same prominent dashboard image');

assert.match(contact, /className="tc-about-image"/, 'contact attribution section must include a relevant industry image');
assert.ok(contact.indexOf('className="tc-about"') > contact.indexOf('className="tc-hero"') && contact.indexOf('className="tc-about"') < contact.indexOf('className="tc-strip"'), 'parent-company section must appear immediately below the first-fold contact hero');
assert.match(page, /billing-dashboard\.webp" alt="Illustration of a manager reviewing a billing operations dashboard" width="1400" height="1400"/, 'homepage control-room image must declare intrinsic dimensions');
assert.match(page, /className="gi-proof-art" src="[^"]*billing-operations-approval-evidence-matrix\.webp" alt="Billing approval evidence matrix with visible review checkpoints" width="1536" height="1024"/, 'homepage proof image must use a distinct relevant asset with intrinsic dimensions');
assert.match(contact, /src="\/thank-you-hero\.png"[^>]+alt="Stealth Agents team in Bacolod"/, 'contact attribution section must use the approved official team photograph');
assert.match(contact, /src="\/stealth-agents-logo-black\.png"[^>]+alt="Stealth Agents"/, 'contact attribution section must show the official parent-company logo');
assert.match(contact, /Official team, Bacolod/, 'contact attribution section must include the approved official team plate');
assert.doesNotMatch(contact, /<article key=\{title\}><span>0\{i\+1\}<\/span>/, 'contact service cards must not use decorative zero-padded numbering');
assert.match(contact, /<Attribution\s*\/>/, 'contact attribution section must show the exact shared attribution');
assert.match(contact, /About Stealth Agents/, 'contact attribution section must include its required heading');
assert.match(contact, /Outsourced Billing Services is a subsidiary of Stealth Agents\./, 'contact attribution section must state the correct subsidiary relationship');
assert.match(contact, /<TestimonialsRail contact\s*\/?>/, 'contact first fold must use the approved testimonial rail');
assert.match(contact, /href="#contactPageForm"/, 'contact attribution section must link to the approved consultation form');
assert.doesNotMatch(contact, /35\+ industries|featured on Forbes|top rated/i, 'unsupported promotional claims must not appear on the contact page');
assert.doesNotMatch(intakeContact, /TestimonialsRail|Client testimonials/i, 'the intake contact route must not expose unsupported testimonials or ratings');
assert.doesNotMatch(thankYou, /TestimonialsRail|Client testimonials/i, 'the thank-you route must not expose unsupported testimonials or ratings');
const onceHubDestination = 'https://go.oncehub.com/StealthAgentsTeam?brdr=1pxd8d8d8&amp;dt=&amp;em=1&amp;Si=1';
assert.equal(thankYou.match(new RegExp(onceHubDestination.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'))?.length, 2, 'thank-you route must preserve the OnceHub iframe and provide one same-destination fallback link');
assert.match(thankYou, /<a[^>]+href="https:\/\/go\.oncehub\.com\/StealthAgentsTeam\?brdr=1pxd8d8d8&amp;dt=&amp;em=1&amp;Si=1"[^>]*>Open booking calendar<\/a>/, 'thank-you route must show an accessible booking-calendar fallback link');
assert.match(whatsNext, /Booking confirmed/, 'booking confirmation route must clearly confirm the completed booking');
assert.match(whatsNext, /What happens next/, 'booking confirmation route must explain the next steps');
assert.match(whatsNext, /robots:\s*\{\s*index:\s*false,\s*follow:\s*false\s*\}/, 'booking confirmation route must remain out of the search index');
assert.doesNotMatch(whatsNext, /oncehub|iframe/i, 'booking confirmation route must not duplicate the scheduler');
assert.doesNotMatch(`${intakeContact}\n${thankYou}`, /5 out of 5 stars|★★★★★|What Stealth Agents clients say/i, 'post-submit and legacy intake routes must not duplicate the approved testimonial rail');
assert.match(bookingComponents, /Source: [\s\S]*Stealth Agents client testimonials/, 'approved testimonials must retain visible source attribution');
assert.match(standardContactForm, /data-acr-managed="react"/, 'React-managed contact form must identify itself to the global ACR submit handler');
assert.match(acrClient, /form\.dataset\.acrManaged==='react'/, 'global ACR submit handler must skip the React-managed contact form');
assert.equal((standardContactForm.match(/window\.location\.assign\("\/thank-you"\)/g) || []).length, 1, 'contact form must have exactly one success redirect');
assert.equal((standardContactForm.match(/trackLead\?\.\(payload\)/g) || []).length, 1, 'contact form must track an accepted lead exactly once');
assert.match(standardContactForm, /\} catch \{\s*setError\("We could not submit your request\. Please try again\."\);\s*setSubmitting\(false\);\s*\}/, 'failed primary lead ingestion must show an error without tracking or redirecting as success');
assert.ok(standardContactForm.indexOf('if (!response.ok)') < standardContactForm.indexOf('await waitForTracker') && standardContactForm.indexOf('await waitForTracker') < standardContactForm.indexOf('window.location.assign("/thank-you")'), 'ingestion acceptance, tracker readiness, and success navigation must remain ordered');
let elapsed = 0;
let trackCalls = 0;
const delayedTracker = () => { trackCalls += 1; };
const resolvedTracker = await waitForTracker(() => elapsed >= 100 ? delayedTracker : undefined, async (delay) => { elapsed += delay; });
resolvedTracker?.();
assert.equal(elapsed, 100, 'tracker readiness must be detected without waiting the full bound');
assert.equal(trackCalls, 1, 'a delayed tracker must be invoked exactly once');
let absentElapsed = 0;
const absentTracker = await waitForTracker(() => undefined, async (delay) => { absentElapsed += delay; });
assert.equal(absentElapsed, 2000, 'an absent tracker must stop waiting at the 2,000 ms bound');
assert.equal(absentTracker, undefined, 'an absent tracker must remain optional after the bounded wait');
assert.match(contactCss, /@keyframes tc-testimonial-scroll\{0%,32\.99%\{transform:translateX\(0\)\}33%,65\.99%\{transform:translateX\(calc\(-100% - 12px\)\)\}66%,99\.98%\{transform:translateX\(calc\(-200% - 24px\)\)\}99\.99%,100%\{transform:translateX\(calc\(-300% - 36px\)\)\}\}/, 'Contact Us testimonials must move one full card plus its 12px gap at each horizontal step');
assert.doesNotMatch(contactCss, /@keyframes tc-testimonial-scroll[^}]*translateY/s, 'Contact Us testimonials must not use vertical motion');
assert.match(contactCss, /prefers-reduced-motion:reduce[^}]*height:auto;overflow-x:auto/s, 'reduced motion must expose a static horizontally scrollable testimonial list without clipping');
assert.doesNotMatch(contact, /reliable cash flow|turn activity into cash flow|throughput grows/i, 'Contact Us copy must not promise unsubstantiated cash-flow or throughput outcomes');
assert.match(servicesIndex, /How to choose a billing support lane/, 'service index must provide decision support beyond a card directory');
assert.match(servicesIndex, /What to prepare before scoping/, 'service index must provide operational onboarding guidance');
for (const heading of ['Inputs and access', 'Review-ready deliverables', 'Common starting scenarios', 'Questions before launch', 'Related billing services']) assert.match(serviceDetail, new RegExp(heading), `service detail must include ${heading}`);
assert.match(notFoundPage, /Page not found/, 'site must provide a branded 404 heading');
assert.match(notFoundPage, /href="\/services"/, 'branded 404 must provide a service recovery link');
assert.match(contactCss, /\.tc-about-copy>\.stealth-attribution a\{[^}]*display:inline;/, 'contact attribution link must not inherit the section CTA button treatment');
assert.doesNotMatch(contactCss, /\.tc-hero-grid>\.sa-form-card\{order:-1\}/, 'mobile visual order must stay aligned with DOM and heading order');
assert.match(globalCss, /\.stealth-attribution\{[^}]*font-size:10px;[^}]*color:#5f6c80/, 'default attribution must retain readable size and WCAG AA contrast');
assert.doesNotMatch(globalCss, /\.stealth-attribution\{font-size:9px\}/, 'mobile attribution must not shrink below its readable default');
assert.match(globalCss, /grid-template-columns:repeat\(3,minmax\(0,1fr\)\)/, 'three-link mobile navigation must use three balanced columns');
assert.match(globalCss, /@media\(max-width:620px\)\{\.fleet-links>\*\{min-width:0;overflow-wrap:anywhere\}\.billing-hero-grid,\.billing-copy,\.billing-copy h1,\.billing-lead,\.billing-trust\{min-width:0;max-width:100%\}\}/, 'mobile homepage and navigation must constrain wide content to the viewport');
assert.match(contactCss, /@media\(max-width:620px\)\{\.tc-hero-grid,\.tc-copy,\.tc-copy h1,\.tc-lead,\.tc-proof-row,\.sa-form-card\{min-width:0;max-width:100%\}\.tc-proof-row span,\.sa-form-card \*\{min-width:0;max-width:100%\}\}/, 'mobile contact hero and form must constrain wide content to the viewport');
assert.match(globalCss, /\.workflow-strip\{display:flex;overflow-x:auto/, 'workflow checkpoints must retain their intentional local mobile scroller');

console.log('site improvement contract passed');
