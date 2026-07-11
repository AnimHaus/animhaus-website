'use client';
import { useEffect } from 'react';

/**
 * Drop-in client component for server-rendered pages.
 * Applies scroll-triggered word-reveal to all h2 and h3 elements.
 * Renders nothing — pure side-effect.
 */
export default function HeadingRevealInit() {
  useEffect(() => {
    let st: { scrollTriggerInstance?: { refresh: () => void } } | null = null;

    Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
    ]).then(([{ gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);

      function wordSplit(el: Element) {
        if (el.querySelector('.word')) return;
        function walk(node: Node) {
          if (node.nodeType === 3) {
            const parts = (node.textContent ?? '').split(/(\s+)/);
            const frag = document.createDocumentFragment();
            parts.forEach(p => {
              if (!p.trim()) { frag.appendChild(document.createTextNode(p)); return; }
              const outer = document.createElement('span');
              outer.className = 'word-wrap';
              const inner = document.createElement('span');
              inner.className = 'word';
              inner.textContent = p;
              outer.appendChild(inner);
              frag.appendChild(outer);
            });
            node.parentNode?.replaceChild(frag, node);
          } else if (
            node.nodeType === 1 &&
            !['SCRIPT', 'STYLE', 'BR'].includes((node as Element).tagName)
          ) {
            Array.from(node.childNodes).forEach(walk);
          }
        }
        Array.from(el.childNodes).forEach(walk);
      }

      document.querySelectorAll<HTMLElement>('h2, h3').forEach(el => {
        wordSplit(el);
        const words = el.querySelectorAll<HTMLElement>('.word');
        if (!words.length) return;
        gsap.set(words, { yPercent: 110 });
        ScrollTrigger.create({
          trigger: el,
          start: 'top 88%',
          once: true,
          onEnter: () => {
            gsap.to(words, {
              yPercent: 0,
              duration: 0.9,
              stagger: 0.045,
              ease: 'expo.out',
            });
          },
        });
      });

      // ScrollTrigger calculates positions while the intro loader has
      // overflow:hidden on <html>, so element offsets are wrong.
      // Refresh after the intro completes (or immediately if already past it).
      // After refresh, manually fire any headings already in the viewport.
      function revealInViewport() {
        document.querySelectorAll<HTMLElement>('h2, h3').forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.88) {
            const words = el.querySelectorAll<HTMLElement>('.word');
            if (!words.length) return;
            gsap.to(words, {
              yPercent: 0,
              duration: 0.9,
              stagger: 0.045,
              ease: 'expo.out',
            });
          }
        });
      }

      function refresh() {
        ScrollTrigger.refresh(true);
        // Small defer so refresh fully settles before we check positions
        requestAnimationFrame(revealInViewport);
      }

      if (sessionStorage.getItem('animhaus_intro_seen')) {
        // No intro running — just refresh on next frame so layout is settled
        requestAnimationFrame(refresh);
      } else {
        window.addEventListener('intro:done', refresh, { once: true });
      }
    });

    return () => {
      // cleanup is handled by GSAP's own ScrollTrigger kill on unmount
    };
  }, []);

  return null;
}
