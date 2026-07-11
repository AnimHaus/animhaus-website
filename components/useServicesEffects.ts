'use client';
import { useEffect } from 'react';

/**
 * Shared effects for services pages (digital-marketing).
 * Lenis smooth-scroll + GSAP sr-reveal observers + anchor scroll.
 * Navbar scroll state is handled by the Navbar component itself.
 */
export function useServicesEffects() {
  useEffect(() => {
    let raf = 0;

    import('lenis').then(({ default: Lenis }) => {
      const lenis = new Lenis();

      Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]).then(([{ gsap }, { ScrollTrigger }]) => {
        gsap.registerPlugin(ScrollTrigger);

        document.querySelectorAll('.sr-reveal').forEach(el => {
          ScrollTrigger.create({
            trigger: el, start: 'top 88%',
            onEnter: () => el.classList.add('active'),
          });
        });

        // Heading text reveal — word-by-word clip animation on all h2 / h3
        document.querySelectorAll<HTMLElement>('h2, h3').forEach(el => {
          if (el.querySelector('.word')) return;
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
    });

    return () => { if (raf) cancelAnimationFrame(raf); };
  }, []);
}
