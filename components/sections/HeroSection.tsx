'use client';
import { useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  // Pre-hide before first paint
  useLayoutEffect(() => {
    gsap.set('.hero-title', { opacity: 0, y: 100 });
    gsap.set('.hero-sub',   { opacity: 0, y: 30  });
    gsap.set('.hero-bg',    { opacity: 0 });
  }, []);

  useEffect(() => {
    function runEntrance() {
      gsap.to('.hero-bg',    { opacity: 1, duration: 0.4, ease: 'power2.out' });
      gsap.to('.hero-title', { y: 0, opacity: 1, duration: 1.5, stagger: 0.2, ease: 'power4.out', delay: 0.15 });
      gsap.to('.hero-sub',   { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.55 });
    }

    // If the intro loader fired already (e.g. coming back after skip) run immediately
    const alreadyDone = sessionStorage.getItem('animhaus_intro_seen');

    if (alreadyDone) {
      // Small defer so GSAP is ready
      const t = setTimeout(runEntrance, 60);
      return () => clearTimeout(t);
    }

    // Wait for the intro loader to signal completion
    window.addEventListener('intro:done', runEntrance, { once: true });
    return () => window.removeEventListener('intro:done', runEntrance);
  }, []);

  return (
    <section
      id="hero"
      className="h-screen min-h-[600px] flex items-end justify-start overflow-hidden relative"
      style={{ paddingBottom: '10vh', paddingLeft: '8%', backgroundColor: '#0a0a0a' }}
    >
      <div
        className="hero-bg absolute top-0 left-0 w-full h-full max-[500px]:[background-position:75%_center]"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.7)), url('https://pub-936a2a79cb9b473fabc46e4ad35a3e2e.r2.dev/zoros-dream/zoros-dream.avif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="text-left relative z-[2] text-white">
        <h1
          className="hero-title font-black uppercase leading-[0.8] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-5px]"
          style={{ fontSize: 'clamp(3rem,15vw,9rem)' }}
        >
          BEYOND
        </h1>
        <h1
          className="hero-title font-black uppercase leading-[0.8] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-5px]"
          style={{ fontSize: 'clamp(3rem,15vw,9rem)', color: 'var(--red)' }}
        >
          REALITY
        </h1>
        <div
          className="hero-sub mt-5 uppercase tracking-[5px] md:tracking-[8px] lg:tracking-[10px]"
          style={{ fontSize: 'clamp(0.6rem,2vw,1rem)', color: 'var(--red)' }}
        >
          AnimHaus Studios 2026
        </div>
      </div>
    </section>
  );
}
