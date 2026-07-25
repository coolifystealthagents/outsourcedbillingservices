#!/usr/bin/env python3
import argparse
import json
import re
import sys
from html.parser import HTMLParser
from pathlib import Path

WORD_RE = re.compile(r"\b[\w]+(?:['-][\w]+)*\b", re.UNICODE)
SENTENCE_RE = re.compile(r"(?<=[.!?])[\"']?\s+")

class AuditParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.stack = []
        self.in_article = False
        self.article_depth = 0
        self.article_text = []
        self.page_text = []
        self.h1 = []
        self.in_h1 = False
        self.paragraph = None
        self.paragraphs = []
        self.counts = {'article_banner': 0, 'svg': 0, 'table': 0, 'methods_note': 0, 'source_items': 0}
        self.links = []
        self.marker = None
        self.jsonld = []
        self.script = None
        self.title = []
        self.in_title = False
        self.title_done = False
        self.canonical = None

    def handle_starttag(self, tag, attrs):
        data = dict(attrs)
        classes = set(str(data.get('class') or '').split())
        self.stack.append((tag, classes))
        if tag == 'article' and 'rich-article' in classes:
            self.in_article = True
            self.article_depth = len(self.stack)
            self.marker = data.get('data-article-marker')
        if tag == 'script' and data.get('type') == 'application/ld+json':
            self.script = []
        if tag == 'title' and not self.title_done: self.in_title = True
        if tag == 'link' and data.get('rel') == 'canonical': self.canonical = data.get('href')
        if self.in_article:
            if tag == 'h1': self.in_h1 = True
            if tag == 'p':
                self.paragraph = {'text': [], 'classes': classes, 'ancestors': [c for _, c in self.stack[:-1]]}
            if 'article-banner' in classes: self.counts['article_banner'] += 1
            if tag == 'svg': self.counts['svg'] += 1
            if tag == 'table': self.counts['table'] += 1
            if tag == 'li' and any('source-section' in c for _, c in self.stack): self.counts['source_items'] += 1
            if tag == 'a': self.links.append(data.get('href', ''))

    def handle_endtag(self, tag):
        if tag == 'script' and self.script is not None:
            raw = ''.join(self.script).strip()
            if raw:
                try: self.jsonld.append(json.loads(raw))
                except json.JSONDecodeError: self.jsonld.append({'_invalid': raw[:80]})
            self.script = None
        if tag == 'title' and self.in_title:
            self.in_title = False
            self.title_done = True
        if self.in_article and tag == 'h1': self.in_h1 = False
        if self.in_article and tag == 'p' and self.paragraph is not None:
            self.paragraph['text'] = ' '.join(''.join(self.paragraph['text']).split())
            self.paragraphs.append(self.paragraph)
            self.paragraph = None
        if self.in_article and tag == 'article' and len(self.stack) == self.article_depth:
            self.in_article = False
        if self.stack: self.stack.pop()

    def handle_data(self, data):
        if self.script is not None:
            self.script.append(data)
            return
        if self.in_title: self.title.append(data)
        clean = ' '.join(data.split())
        if not clean: return
        self.page_text.append(clean)
        if self.in_article:
            self.article_text.append(clean)
            if self.in_h1: self.h1.append(clean)
            if self.paragraph is not None: self.paragraph['text'].append(clean + ' ')
            if 'Methods note:' in clean: self.counts['methods_note'] += 1

def has_ancestor(paragraph, class_name):
    return any(class_name in classes for classes in paragraph['ancestors'])

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('html')
    ap.add_argument('--sitemap', required=True)
    ap.add_argument('--slug', required=True)
    ap.add_argument('--keyword', default='Philippines medical billing audit checklist')
    ap.add_argument('--marker', default='OBS-PH-MED-AUDIT-20260725')
    ap.add_argument('--quote', default='Zero trust assumes there is no implicit trust granted to assets or user accounts based solely on their physical or network location.')
    ap.add_argument('--stat', action='append', dest='stats', default=[])
    args = ap.parse_args()
    raw = Path(args.html).read_text(encoding='utf-8')
    parser = AuditParser(); parser.feed(raw)
    article_text = ' '.join(parser.article_text)
    page_text = ' '.join(parser.page_text)
    words = len(WORD_RE.findall(article_text))
    h1 = ' '.join(parser.h1)
    keyword = args.keyword
    canonical = f'https://outsourcedbillingservices.com/blog/{args.slug}'
    narrative = []
    for p in parser.paragraphs:
        is_narrative = has_ancestor(p, 'article-intro') or (
            has_ancestor(p, 'article-section')
            and not has_ancestor(p, 'source-section')
            and not has_ancestor(p, 'related-section')
            and 'module-label' not in p['classes']
        )
        if is_narrative:
            parts = [x for x in SENTENCE_RE.split(p['text']) if x.strip()]
            narrative.append({'sentences': len(parts), 'text': p['text'][:110]})
    schema_types = []
    for obj in parser.jsonld:
        value = obj.get('@type') if isinstance(obj, dict) else None
        if isinstance(value, list): schema_types.extend(value)
        elif value: schema_types.append(value)
    internal = sorted(set(x for x in parser.links if x.startswith('/') and not x.startswith('//')))
    external = sorted(set(x for x in parser.links if x.startswith('http')))
    sitemap = Path(args.sitemap).read_text(encoding='utf-8')
    failures = []
    def require(name, ok):
        if not ok: failures.append(name)
    require('word_count_1500_2000', 1500 <= words <= 2000)
    require('h1_keyword_prefix', h1.lower().startswith(keyword.lower()))
    require('title_exact', keyword.lower() in ''.join(parser.title).lower())
    require('canonical_exact', parser.canonical == canonical)
    require('marker', parser.marker == args.marker)
    require('paragraphs_2_3_sentences', all(2 <= p['sentences'] <= 3 for p in narrative))
    require('exactly_3_banners', parser.counts['article_banner'] == 3)
    require('exactly_2_svgs', parser.counts['svg'] == 2)
    require('table', parser.counts['table'] == 1)
    require('methods_note', parser.counts['methods_note'] >= 1)
    require('internal_links_3_plus', len(internal) >= 3)
    require('external_links_4_plus', len(external) >= 4)
    require('quote_exact', args.quote in article_text)
    expected_stats = args.stats or ['59.8%', '15.7%', '10.0%', '8.2%']
    require('dated_stats', all(x in article_text for x in expected_stats))
    require('numbered_sources', parser.counts['source_items'] == 5)
    require('schemas', all(x in schema_types for x in ['BlogPosting', 'FAQPage', 'BreadcrumbList']))
    require('sitemap_slug', f'/blog/{args.slug}' in sitemap)
    forbidden_copy = re.findall(r'(?i)\bpricing\b|\brates?\b|\btiers?\b|\bhourly\b|\bmonthly\b', page_text)
    forbidden_hrefs = [x for x in parser.links if '/pricing' in x.lower()]
    require('no_forbidden_copy', not forbidden_copy)
    require('no_forbidden_hrefs', not forbidden_hrefs)
    result = {
        'status': 'PASS' if not failures else 'FAIL',
        'article_words': words,
        'h1': h1,
        'title': ''.join(parser.title),
        'canonical': parser.canonical,
        'marker': parser.marker,
        'narrative_paragraphs': len(narrative),
        'paragraph_sentence_counts': [p['sentences'] for p in narrative],
        'counts': parser.counts,
        'internal_links': internal,
        'external_links': external,
        'schema_types': schema_types,
        'forbidden_copy': forbidden_copy,
        'forbidden_hrefs': forbidden_hrefs,
        'failures': failures,
    }
    print(json.dumps(result, indent=2))
    return 0 if not failures else 1

if __name__ == '__main__':
    sys.exit(main())
