import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const page = readFileSync(new URL('../app/page.tsx', import.meta.url), 'utf8');
const components = readFileSync(new URL('../app/components.tsx', import.meta.url), 'utf8');
const contact = readFileSync(new URL('../app/contact-us/page.tsx', import.meta.url), 'utf8');
const intakeContact = readFileSync(new URL('../app/contact/page.tsx', import.meta.url), 'utf8');
const thankYou = readFileSync(new URL('../app/thank-you/page.tsx', import.meta.url), 'utf8');
const bookingComponents = readFileSync(new URL('../app/booking-components.tsx', import.meta.url), 'utf8');
const contactCss = readFileSync(new URL('../app/contact-us/contact.css', import.meta.url), 'utf8');
const globalCss = readFileSync(new URL('../app/globals.css', import.meta.url), 'utf8');

assert.match(components, /function Attribution\(/, 'shared attribution component is missing');
assert.match(components, /https:\/\/stealthagents\.com\//, 'attribution must link to Stealth Agents');
assert.match(components, /<header[\s\S]*?<Attribution\s*\/>[\s\S]*?<\/header>/, 'header must render attribution directly below its logo');
assert.match(components, /<footer[\s\S]*?<Attribution\s*\/>[\s\S]*?<\/footer>/, 'global footer must render attribution');

const trustBlock = page.match(/<div className="billing-trust">[\s\S]*?<\/div>/)?.[0] || '';
assert.match(trustBlock, /<span className="billing-trust-stars" role="img" aria-label="Five visible billing checkpoints">★★★★★<\/span>/, 'homepage hero must expose the five-star workflow visual accessibly');
assert.match(trustBlock, /Received, prepared, reviewed, sent, and followed up\./, 'five-star visual must be grounded in the five documented workflow checkpoints');
assert.doesNotMatch(trustBlock, /\b(?:rating|rated|reviews?|five-star trust indicator)\b/i, 'five-star workflow visual must not imply an unsupported customer rating');
assert.doesNotMatch(page, /<span>0\{i \+ 1\}<\/span>/, 'homepage service cards should use relevant visual marks instead of repeated numbering');

assert.match(contact, /className="tc-about-image"/, 'contact attribution section must include a relevant industry image');
assert.match(contact, /<Attribution\s*\/>/, 'contact attribution section must show the exact shared attribution');
assert.match(contact, /About Stealth Agents/, 'contact attribution section must include its required heading');
assert.match(contact, /Outsourced Billing Services is a subsidiary of Stealth Agents\./, 'contact attribution section must state the correct subsidiary relationship');
assert.match(contact, /href="#contactPageForm"/, 'contact attribution section must link to the approved consultation form');
assert.doesNotMatch(contact, /35\+ industries|featured on Forbes|top rated/i, 'unsupported promotional claims must not appear on the contact page');
assert.doesNotMatch(intakeContact, /TestimonialsRail|Client testimonials/i, 'the intake contact route must not expose unsupported testimonials or ratings');
assert.doesNotMatch(thankYou, /TestimonialsRail|Client testimonials/i, 'the thank-you route must not expose unsupported testimonials or ratings');
assert.doesNotMatch(`${intakeContact}\n${thankYou}`, /5 out of 5 stars|★★★★★|What Stealth Agents clients say/i, 'reachable conversion routes must not contain unsupported rating or testimonial claims');
assert.match(bookingComponents, /5 out of 5 stars/, 'fixture guard: this contract must continue detecting the unsupported testimonial component if a route reimports it');
assert.match(contactCss, /\.tc-about-copy>\.stealth-attribution a\{[^}]*display:inline;/, 'contact attribution link must not inherit the section CTA button treatment');
assert.doesNotMatch(contactCss, /\.tc-hero-grid>\.sa-form-card\{order:-1\}/, 'mobile visual order must stay aligned with DOM and heading order');
assert.match(globalCss, /\.stealth-attribution\{[^}]*font-size:10px;[^}]*color:#5f6c80/, 'default attribution must retain readable size and WCAG AA contrast');
assert.doesNotMatch(globalCss, /\.stealth-attribution\{font-size:9px\}/, 'mobile attribution must not shrink below its readable default');
assert.match(globalCss, /grid-template-columns:repeat\(3,minmax\(0,1fr\)\)/, 'three-link mobile navigation must use three balanced columns');
assert.match(globalCss, /@media\(max-width:620px\)\{\.fleet-links>\*\{min-width:0;overflow-wrap:anywhere\}\.billing-hero-grid,\.billing-copy,\.billing-copy h1,\.billing-lead,\.billing-trust\{min-width:0;max-width:100%\}\}/, 'mobile homepage and navigation must constrain wide content to the viewport');
assert.match(contactCss, /@media\(max-width:620px\)\{\.tc-hero-grid,\.tc-copy,\.tc-copy h1,\.tc-lead,\.tc-proof-row,\.sa-form-card\{min-width:0;max-width:100%\}\.tc-proof-row span,\.sa-form-card \*\{min-width:0;max-width:100%\}\}/, 'mobile contact hero and form must constrain wide content to the viewport');
assert.match(globalCss, /\.workflow-strip\{display:flex;overflow-x:auto/, 'workflow checkpoints must retain their intentional local mobile scroller');

console.log('site improvement contract passed');
