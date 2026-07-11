'use client';
import { useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import gsap from 'gsap';
import { registerNavigate } from './transitionNavigate';

const DURATION = 0.6;
const EASE = 'power3.inOut';

export default function PageTransition() {
  const panelRef = useRef<HTMLDivElement>(null);
  const isNavigating = useRef(false);
  const router = useRouter();
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  // Register the navigate handler (re-registers if router changes)
  useEffect(() => {
    registerNavigate((href: string) => {
      if (isNavigating.current) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        router.push(href);
        return;
      }

      let url: URL;
      try { url = new URL(href, window.location.href); } catch { router.push(href); return; }
      if (url.pathname === window.location.pathname && url.search === window.location.search) return;

      isNavigating.current = true;
      const panel = panelRef.current;
      if (!panel) { router.push(href); return; }

      panel.style.pointerEvents = 'all';
      gsap.fromTo(
        panel,
        { clipPath: 'inset(100% 0 0% 0)' },
        {
          clipPath: 'inset(0% 0 0% 0)',
          duration: DURATION,
          ease: EASE,
          onComplete: () => {
            // Client-side navigation — no full reload, styles stay intact
            router.push(href);
          },
        }
      );
    });
  }, [router]);

  // When the pathname changes the new page is mounted — animate the overlay out
  useEffect(() => {
    if (pathname === prevPathname.current) return;
    prevPathname.current = pathname;

    const panel = panelRef.current;
    if (!panel || !isNavigating.current) return;

    // Snap to top before the overlay reveals the new page
    window.scrollTo(0, 0);

    gsap.fromTo(
      panel,
      { clipPath: 'inset(0% 0 0% 0)' },
      {
        clipPath: 'inset(0% 0 100% 0)',
        duration: DURATION,
        ease: EASE,
        onComplete: () => {
          panel.style.pointerEvents = 'none';
          gsap.set(panel, { clipPath: 'inset(100% 0 0% 0)' });
          isNavigating.current = false;
        },
      }
    );
  }, [pathname]);

  return (
    <div
      ref={panelRef}
      aria-hidden="true"
      className="fixed inset-0 z-[9998] pointer-events-none bg-[var(--red)]"
      style={{
        clipPath: 'inset(100% 0 0% 0)',
        willChange: 'clip-path',
      }}
    />
  );
}