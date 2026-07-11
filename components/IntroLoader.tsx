'use client';
import { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';

const GALLERY_IMAGES = [
  'https://cdn.animhaus.com/cartoons/cartoon_1.jpg',
  'https://cdn.animhaus.com/cartoons/cartoon_2.jpg',
  'https://cdn.animhaus.com/cartoons/cartoon_3.jpg',
  ...Array.from({ length: 20 }, (_, i) => `https://cdn.animhaus.com/manga/manga_${i + 1}.jpg`),
];

// Seconds per frame during the cycle
const FRAME_STEP = 0.08;

const LOGO_URL = '/animhaus-logo-mascot.png';

export default function IntroLoader() {
  const containerRef   = useRef<HTMLDivElement>(null);
  const maskedRef      = useRef<HTMLDivElement>(null);
  const logoRef        = useRef<HTMLImageElement>(null);
  const pathname       = usePathname();
  const isHome         = pathname === '/';

  // Hide images and logo before first paint to prevent flash
  useLayoutEffect(() => {
    if (!isHome) return;
    if (sessionStorage.getItem('animhaus_intro_seen')) return;
    const imgs = maskedRef.current?.querySelectorAll('img');
    if (imgs) gsap.set(Array.from(imgs), { opacity: 0 });
    if (maskedRef.current) gsap.set(maskedRef.current, { scale: 0.85 });
    if (logoRef.current) gsap.set(logoRef.current, { opacity: 0, scale: 0.85 });
  }, [isHome]);

  useEffect(() => {
    if (!isHome) return;
    const container = containerRef.current;
    const masked    = maskedRef.current;
    const logo      = logoRef.current;
    if (!container || !masked || !logo) return;

    if (
      sessionStorage.getItem('animhaus_intro_seen') ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      container.style.display = 'none';
      return;
    }

    document.documentElement.style.overflow = 'hidden';

    const images = Array.from(masked.querySelectorAll<HTMLElement>('img'));
    const n      = images.length;

    // Scale the masked container 0.85 → 1 over the full cycle duration
    const scaleTl = gsap.timeline();
    scaleTl.to(masked, { scale: 1, duration: n * FRAME_STEP, ease: 'none' });

    // Cycle: hide previous, show current — pure opacity swap via GSAP set
    const tl = gsap.timeline();
    for (let s = 0; s < n; s++) {
      const prev = s > 0 ? s - 1 : n - 1;
      tl.set(images[prev], { opacity: 0 }, s * FRAME_STEP);
      tl.set(images[s],    { opacity: 1 }, s * FRAME_STEP);
    }

    // After the last frame — run the exit sequence
    tl.add(() => {
      scaleTl.kill();
      tl.kill();

      const exitTl = gsap.timeline({
        onComplete: () => {
          container.style.display = 'none';
          document.documentElement.style.overflow = '';
          sessionStorage.setItem('animhaus_intro_seen', '1');
          window.dispatchEvent(new Event('intro:done'));
        },
      });

      // 1. Fade out the masked image reel
      exitTl.to(masked, { opacity: 0, duration: 0.25, ease: 'power2.in' }, 0);

      // 2. True logo pops in (Marvel-style reveal of the real thing)
      exitTl.to(
        logo,
        { opacity: 1, scale: 1, duration: 0.45, ease: 'back.out(1.4)' },
        0.15,
      );

      // 3. Logo fades out
      exitTl.to(
        logo,
        { opacity: 0, scale: 0.92, duration: 0.3, ease: 'power2.in' },
        1.1,
      );

      // 4. Full overlay sweeps upward to reveal the page
      exitTl.to(
        container,
        { clipPath: 'inset(0% 0% 100% 0%)', ease: 'expo.inOut', duration: 1.1 },
        1.05,
      );
    }, (n - 1) * FRAME_STEP);

    return () => {
      scaleTl.kill();
      tl.kill();
      document.documentElement.style.overflow = '';
    };
  }, [isHome]);

  // Don't render anything on non-home routes
  if (!isHome) return null;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 z-[9999] bg-[#111111] flex items-center justify-center"
      style={{ willChange: 'clip-path' }}
    >
      {/* Images cycling through, masked by the logo shape */}
      <div
        ref={maskedRef}
        className="relative w-[280px] h-[280px] lg:w-[380px] lg:h-[380px]"
        style={{
          WebkitMaskImage: `url(${LOGO_URL})`,
          maskImage: `url(${LOGO_URL})`,
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
          willChange: 'transform',
        }}
      >
        {GALLERY_IMAGES.map((src) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            draggable={false}
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0 }}
          />
        ))}
      </div>

      {/* True logo revealed at the end */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={logoRef}
        src={LOGO_URL}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="absolute w-[280px] h-[280px] lg:w-[380px] lg:h-[380px] object-contain"
        style={{ opacity: 0 }}
      />
    </div>
  );
}