'use client';
import { useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Shared animation effects for all creative service pages
 * (comics, games, anime, cartoons).
 * Lenis smooth-scroll + GSAP hero animation + cr-reveal observers + anchor scroll.
 * Navbar scroll state is handled by the Navbar component itself.
 */
export function useCreativeEffects() {
  // Hide hero elements before first paint so there's no visible flash
  useLayoutEffect(() => {
    gsap.set('.cr-hero-title', { y: 80, opacity: 0 });
    gsap.set('.cr-hero-eyebrow, .cr-hero-sub, .cr-hero-ctas', { y: 40, opacity: 0 });
  }, []);

  useEffect(() => {
    let raf = 0;

    // Hero entrance animations (to, not from — initial state set in useLayoutEffect)
    gsap.to('.cr-hero-title', {
      y: 0, opacity: 1, duration: 1.4, ease: 'power4.out', delay: 0.3,
    });
    gsap.to('.cr-hero-eyebrow, .cr-hero-sub, .cr-hero-ctas', {
      y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power3.out', delay: 0.6,
    });

    // Scroll-reveal observers
    document.querySelectorAll('.cr-reveal').forEach(el => {
      ScrollTrigger.create({
        trigger: el, start: 'top 88%',
        onEnter: () => el.classList.add('active'),
      });
    });

    // Heading text reveal — word-by-word clip animation on all h2 / h3
    document.querySelectorAll<HTMLElement>('h2, h3').forEach(el => {
      if (el.querySelector('.word')) return; // already split (e.g. manga word-split)
      const walk = (node: Node) => {
        if (node.nodeType === 3) {
          const parts = (node.textContent ?? '').split(/(\s+)/);
          const frag = document.createDocumentFragment();
          parts.forEach(p => {
            if (!p.trim()) { frag.appendChild(document.createTextNode(p)); return; }
            const outer = document.createElement('span'); outer.className = 'word-wrap';
            const inner = document.createElement('span'); inner.className = 'word';
            inner.textContent = p; outer.appendChild(inner); frag.appendChild(outer);
          });
          node.parentNode?.replaceChild(frag, node);
        } else if (node.nodeType === 1 && !['SCRIPT','STYLE','BR'].includes((node as Element).tagName)) {
          Array.from(node.childNodes).forEach(walk);
        }
      };
      Array.from(el.childNodes).forEach(walk);
      const words = el.querySelectorAll<HTMLElement>('.word');
      if (!words.length) return;
      gsap.set(words, { yPercent: 110 });
      ScrollTrigger.create({
        trigger: el, start: 'top 88%', once: true,
        onEnter: () => gsap.to(words, { yPercent: 0, duration: 0.9, stagger: 0.045, ease: 'expo.out' }),
      });
    });

    // Lenis smooth scroll + anchor scroll
    import('lenis').then(({ default: Lenis }) => {
      const lenis = new Lenis();

      document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
          e.preventDefault();
          const href = (link as HTMLAnchorElement).getAttribute('href');
          const target = href ? document.querySelector(href) : null;
          if (target) lenis.scrollTo(target as HTMLElement, { offset: -80 });
        });
      });

      function animate(time: number) {
        lenis.raf(time);
        ScrollTrigger.update();
        raf = requestAnimationFrame(animate);
      }
      raf = requestAnimationFrame(animate);
    });

    return () => {
      if (raf) cancelAnimationFrame(raf);
      gsap.killTweensOf('.cr-hero-title, .cr-hero-eyebrow, .cr-hero-sub, .cr-hero-ctas');
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
}
