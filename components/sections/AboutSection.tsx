'use client';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

const AboutCanvas = dynamic(() => import('./AboutCanvas'), { ssr: false });

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative h-[120vh] overflow-hidden"
    >
      {/* watermark */}
      <div
        className="absolute font-black text-transparent pointer-events-none select-none bottom-4 left-[5%] z-0 hidden md:block"
        style={{ fontSize: '18vw', WebkitTextStroke: '2px rgba(17,17,17,0.07)', lineHeight: 1 }}
      >
        STUDIO
      </div>

      {/* 3D canvas */}
      <div className="absolute inset-0 z-10">
        <AboutCanvas visible={visible} />
      </div>

      {/* Centre heading */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-[5%]">
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
