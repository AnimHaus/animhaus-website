'use client';
import { useEffect } from 'react';

export default function LenisInit() {
  useEffect(() => {
    let raf: number;
    import('lenis').then(({ default: Lenis }) => {
      const lenis = new Lenis();
      (window as Window & { _lenis?: InstanceType<typeof Lenis> })._lenis = lenis;
      function animate(time: number) {
        lenis.raf(time);
        raf = requestAnimationFrame(animate);
      }
      raf = requestAnimationFrame(animate);
    });
    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return null;
}
