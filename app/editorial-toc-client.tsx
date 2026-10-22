'use client';

import { useEffect, useState } from 'react';

type TocHeading = { id: string; label: string; level: 2 | 3 };

export function ActiveArticleToc({ headings, label }: { headings: TocHeading[]; label: string }) {
  const [activeId, setActiveId] = useState(headings[0]?.id || '');

  useEffect(() => {
    const elements = headings.map(({ id }) => document.getElementById(id)).filter((element): element is HTMLElement => Boolean(element));
    if (!elements.length) return;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActiveId(visible[0].target.id);
    }, { rootMargin: '-96px 0px -68% 0px', threshold: [0, 1] });
    elements.forEach((element) => observer.observe(element));
    const updateFromScroll = () => {
      const current = [...elements].reverse().find((element) => element.getBoundingClientRect().top <= 120);
      if (current) setActiveId(current.id);
    };
    window.addEventListener('scroll', updateFromScroll, { passive: true });
    updateFromScroll();
    return () => { observer.disconnect(); window.removeEventListener('scroll', updateFromScroll); };
  }, [headings]);

  return <nav className="editorial-toc" aria-label={label}>
    <h2>{label}</h2>
    <ol>{headings.map((heading) => <li className={heading.level === 3 ? 'toc-level-3' : undefined} key={heading.id}>
      <a href={`#${heading.id}`} aria-current={activeId === heading.id ? 'location' : undefined}>{heading.label}</a>
    </li>)}</ol>
  </nav>;
}
