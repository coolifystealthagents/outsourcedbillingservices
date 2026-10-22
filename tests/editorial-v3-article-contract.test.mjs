import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const shared = read('app/editorial-article.tsx');
const client = read('app/editorial-toc-client.tsx');
const blog = read('app/blog/[slug]/page.tsx');
const research = read('app/research/[slug]/page.tsx');
const css = read('app/globals.css');
const comparison = read('app/blog/top-25-billing-back-office-outsourcing-companies/page.tsx');
const comparisonCss = read('app/blog/top-25-billing-back-office-outsourcing-companies/comparison.module.css');

assert.match(shared, /sections\.map[\s\S]*const Heading[\s\S]*id=\{ids\[index\]\}/, 'SSR article headings must be rendered from the same complete section model as the TOC');
assert.match(shared, /const toc = sections\.map/, 'TOC must be generated from every editorial H2/H3 section');
assert.match(shared, /seen = new Map[\s\S]*count === 1 \? base : `\$\{base\}-\$\{count\}`/, 'heading IDs must be stable and collision-safe');
assert.match(shared, /<details className="editorial-mobile-toc">[\s\S]*<summary>On this page<\/summary>/, 'mobile TOC must use an accessible disclosure in normal flow');
assert.match(shared, /Publisher[\s\S]*editorial-sidebar-cta[\s\S]*Related material/, 'sidebar must include publisher/context CTA and related material');
assert.equal((shared.match(/<main\b/g) || []).length, 1, 'shared article must own exactly one main landmark');
assert.doesNotMatch(shared, /<Header|<Footer/, 'shared article must not duplicate global route chrome');

assert.match(client, /^'use client'/, 'scroll enhancement must be isolated to a client component');
assert.match(client, /IntersectionObserver/, 'active section must respond to viewport intersections');
assert.match(client, /aria-current=\{activeId === heading\.id \? 'location'/, 'active TOC state must be exposed accessibly');

for (const [name, route] of [['blog', blog], ['research', research]]) {
  assert.match(route, /<EditorialArticle/, `${name} detail route must use the shared editorial system`);
  assert.match(route, /FallbackHero/, `${name} route must provide a defensible hero fallback`);
  assert.match(route, /heroAlt=/, `${name} route must provide useful hero alt text`);
  assert.match(route, /<Header[^>]*\/>[\s\S]*<EditorialArticle[\s\S]*<Footer[^>]*\/>/, `${name} route must render one chrome pair around the shared main`);
}
for (const batch of ['oct13','oct12','oct8','oct5','oct2','sep28','sep25','sep24','sep23','sep22','sep18b','sep10','sep9','sep8','sep7','sep4','sep3','aug23','aug21']) {
  assert.match(blog, new RegExp(`if \\(${batch}\\) return <LegacyEditorialArticle`), `blog batch ${batch} must dispatch through shared editorial article`);
}
assert.match(blog, /return <RichEditorialArticle post=\{post\}/, 'rich blog posts must dispatch through shared editorial article');
assert.match(research, /p\.body\.forEach[\s\S]*sections: EditorialSection\[\]/, 'paragraph-only research must receive real semantic sections');
assert.match(blog, /paragraphSections[\s\S]*EditorialSection\[\]/, 'paragraph-only blog articles must receive real semantic sections');

assert.match(css, /\.editorial-layout\{[^}]*grid-template-columns:minmax\(0,72ch\)/, 'article measure must remain in the readable 60-75ch range');
assert.match(css, /\.editorial-sidebar-inner\{[^}]*position:sticky[^}]*top:96px[^}]*max-height:calc\(100vh - 116px\)[^}]*overflow:auto/, 'complete desktop sidebar must be sticky below the header and overflow-safe');
assert.match(css, /scroll-margin-top:104px/, 'anchored headings must clear the sticky header');
assert.match(css, /h2:focus-visible[\s\S]*outline:3px/, 'focused anchor headings must have a keyboard-visible outline');
assert.match(css, /@media\(max-width:860px\)[\s\S]*\.editorial-mobile-toc\{display:block/, 'mobile TOC must be visible in normal flow');

assert.match(comparison, /ActiveArticleToc/, 'standalone comparison must use the active TOC behavior');
assert.match(comparison, /tocHeadings/, 'standalone comparison must define a complete heading model');
assert.match(comparison, /openGraph:[\s\S]*images:\s*\[heroImage\]/, 'standalone comparison must provide a social hero');
assert.match(comparison, /id="selection-method"/);
assert.match(comparison, /id="scope-actions"/);
assert.doesNotMatch(comparison, /<b>0[1-4]<\/b>/, 'comparison checklist must not use decorative sequence labels');
assert.match(comparisonCss, /position:sticky/, 'comparison TOC must be sticky on desktop');
assert.match(comparisonCss, /\.mobileToc\{display:none\}/, 'comparison TOC must use mobile disclosure behavior');

console.log('Editorial V3 article contract passed');
