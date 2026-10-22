import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const booking = read('app/booking-components.tsx');
const globalCss = read('app/globals.css');
const contactCss = read('app/contact-us/contact.css');
const contactForm = read('app/contact-us/StandardContactForm.tsx');
const contactRoute = read('app/contact/page.tsx');
const sitemap = read('app/sitemap.xml/route.ts');
const nextConfig = read('next.config.mjs');
const components = read('app/components.tsx');
const home = read('app/page.tsx');
const blog = read('app/blog/[slug]/page.tsx');
const serviceRoute = read('app/services/[slug]/page.tsx');
const serviceData = read('app/service-playbooks.ts');
const data = read('app/data.ts');
const registry = read('design-registry.json');

const names = [...booking.matchAll(/name: "([^"]+)"/g)].map((match) => match[1]);
const quotes = [...booking.matchAll(/quote: "([^"]+)"/g)].map((match) => match[1]);
assert.ok(names.length >= 10, 'testimonial rail must include at least ten first-party approved reviews');
assert.equal(new Set(names).size, names.length, 'reviewer names must be distinct');
assert.equal(new Set(quotes).size, quotes.length, 'review quotes must be distinct');
for (const approvedName of ['Chad Sublet', 'Erika Giron', 'Alex Behrens', 'Aisha Wonderfull', 'Owen Hone', 'Sarah Jacoby', 'Martine Cadet', 'Rich Cochran', 'George Assi', 'Lee Maasen', 'Kevin Carabajal', 'Lynda Sunshine West', 'McKay Jaeckel', 'Evan']) {
  assert.ok(names.includes(approvedName), `missing approved first-party Stealth Agents reviewer: ${approvedName}`);
}
assert.match(booking, /Approved Stealth Agents client reviews/, 'reviews must be explicitly labeled as approved Stealth Agents reviews');
assert.match(booking, /https:\/\/stealthagents\.com\/#client-reviews/, 'review source must link to the first-party review section');
assert.doesNotMatch(booking, /<button|Pause testimonials|Play testimonials|useState/, 'testimonial controls and control state are forbidden');
assert.match(globalCss, /@keyframes sa-testimonial-marquee[\s\S]*translateX/, 'testimonial rail must auto-move horizontally');
assert.doesNotMatch(globalCss, /@keyframes sa-testimonial-(?:scroll|marquee)[\s\S]*translateY/, 'testimonial motion must never be vertical');
assert.match(globalCss, /prefers-reduced-motion:reduce[\s\S]*\.sa-testimonial-track\{animation:none/, 'reduced-motion users must receive a static rail');
assert.match(globalCss, /prefers-reduced-motion:reduce[\s\S]*\.sa-testimonial-viewport\{[^}]*overflow-x:auto/, 'static reduced-motion reviews must remain horizontally accessible');
assert.doesNotMatch(`${globalCss}\n${contactCss}`, /sa-testimonial-toggle|is-paused/, 'testimonial control styling must be removed');

assert.match(contactRoute, /permanentRedirect\(['"]\/contact-us['"]\)/, 'legacy /contact route must redirect to /contact-us');
assert.match(nextConfig, /source: '\/contact', destination: '\/contact-us'/, 'framework redirects must canonicalize /contact');
assert.doesNotMatch(sitemap, /^\s*["']\/contact["'],?\s*$/m, 'legacy /contact must be absent from the sitemap');
assert.equal(read('app/icon.svg'), read('public/logo.svg'), 'favicon and shared subsidiary logo must be identical');

assert.doesNotMatch(home, /n: ['"]0\d['"]|step\.n/, 'homepage must not render decorative zero-padded process labels');
assert.doesNotMatch(blog, /padStart\(2|>0[1-9]</, 'article template must not render decorative zero-padded labels');
assert.doesNotMatch(components, /Footer\(\{ hidePricing|!hidePricing/, 'footer must not have a route-specific hidePricing variant');
for (const [href, label] of [['/privacy', 'Privacy Policy'], ['/terms', 'Terms and Conditions'], ['/cancellation-policy', 'Cancellation Policy']]) {
  assert.ok(components.includes(`href="${href}">${label}</a>`), `footer must include ${label}`);
}
assert.match(contactForm, /privacy-notice[\s\S]*href="\/privacy"[\s\S]*Privacy Policy/, 'contact form must include a visible privacy notice and link');

const serviceSlugs = [...data.matchAll(/\{ slug: "([^"]+)", title:/g)].slice(0, 12).map((match) => match[1]);
assert.equal(serviceSlugs.length, 12, 'expected all twelve primary service routes');
for (const slug of serviceSlugs) assert.ok(serviceData.includes(`'${slug}':`), `shared service detail data missing ${slug}`);
for (const field of ['audience', 'problem', 'scope', 'inputs', 'workflow', 'deliverables', 'boundaries', 'quality', 'examples', 'faqs', 'hero']) {
  assert.match(serviceData, new RegExp(`\\b${field}:`), `service data needs ${field}`);
}
for (const heading of ['Who this service is for', 'The operating problem', 'Scope of support', 'Inputs and access', 'Workflow', 'Review-ready deliverables', 'Boundaries and owner decisions', 'Quality controls', 'Practical examples', 'Frequently asked questions', 'Related billing services']) {
  assert.ok(serviceRoute.includes(heading), `service detail template missing ${heading}`);
}
assert.match(serviceRoute, /className="service-hero-image"[\s\S]*src=\{playbook\.hero\.src\}[\s\S]*alt=\{playbook\.hero\.alt\}/, 'every service hero must render its relevant shared-data asset with service-specific alt text');
assert.match(serviceRoute, /FAQPage/, 'service detail pages need FAQ structured data');
assert.doesNotMatch(`${home}\n${contactRoute}\n${serviceRoute}`, /<dialog|className="[^"]*(?:popup|modal)/i, 'global commercial templates must not add popups');

const registryData = JSON.parse(registry);
assert.equal(registryData.domain, 'outsourcedbillingservices.com');
assert.match(registryData.designFamily, /billing|technical|documentary/i);
console.log('Task 1 global V3 contract passed');
