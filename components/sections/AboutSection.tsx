'use client';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

const AboutCanvas = dynamic<{ visible: boolean; isMobile?: boolean; scrollProgress?: number }>(
  () => import('./AboutCanvas'),
  { ssr: false },
);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    setIsMobile(mq.matches);
    const onMQ = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', onMQ);
    return () => mq.removeEventListener('change', onMQ);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const el = sectionRef.current;
    if (!el) return;
    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const scrolled = -rect.top;
      setScrollProgress(Math.min(1, Math.max(0, scrolled / total)));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative h-[120vh] overflow-hidden"
    >
      {/* watermark — desktop only */}
      <div
        className="absolute font-black text-transparent pointer-events-none select-none bottom-4 left-[5%] z-0 hidden md:block"
        style={{ fontSize: '18vw', WebkitTextStroke: '2px rgba(17,17,17,0.07)', lineHeight: 1 }}
      >
        STUDIO
      </div>

      {/* MOBILE: text above, canvas below, both centered */}
      <div className="flex flex-col items-center justify-center h-full md:hidden">
        <div
          className={[
            'flex flex-col items-center text-center gap-4 px-[5%] z-20 transition-[opacity,transform] duration-700 ease-out',
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
          ].join(' ')}
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#d91a21]">
            About Us
          </span>
          <h2 className="font-black leading-tight text-[2rem]">
            Crafting Worlds
          </h2>
          <p className="text-[#444] text-[0.95rem]">
            We are a high-octane animation house based in Kolkata. We don’t just animate
            — we build legacies through visual engineering and emotional storytelling.
          </p>
        </div>
        <div className="w-full h-[80vw] max-h-[480px] z-10">
          <AboutCanvas visible={visible} isMobile={isMobile} scrollProgress={scrollProgress} />
        </div>
      </div>

      {/* DESKTOP: original absolute overlay */}
      <div className="hidden md:block absolute inset-0 z-10">
        <AboutCanvas visible={visible} isMobile={false} scrollProgress={0} />
      </div>

      <div className="hidden md:flex absolute inset-0 z-20 flex-col items-center justify-center pointer-events-none px-[5%]">
        <div
          className={[
            'flex flex-col items-center text-center gap-4 max-w-2xl transition-[opacity,transform] duration-700 ease-out',
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
          ].join(' ')}
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#d91a21]">
            About Us
          </span>
          <h2
            className="font-black leading-tight"
            style={{ fontSize: 'clamp(2rem,4.5vw,5rem)' }}
          >
            Crafting Worlds
          </h2>
          <p
            className="text-[#444]"
            style={{ fontSize: 'clamp(0.9rem,1.4vw,1.05rem)' }}
          >
            We are a high-octane animation house based in Kolkata. We don’t just animate
            — we build legacies through visual engineering and emotional storytelling.
          </p>
        </div>
      </div>
    </section>
  );
}