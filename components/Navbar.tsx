'use client';
import { useEffect, useState } from 'react';
import MascotSVG from './MascotSVG';
import TransitionLink from './TransitionLink';

export default function Navbar({
  logoSrc = 'https://pub-936a2a79cb9b473fabc46e4ad35a3e2e.r2.dev/animhaus-logotype.svg',
  transparentOnScroll = false,
}: {
  logoSrc?: string;
  transparentOnScroll?: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.pageYOffset > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 500);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  // Compact on desktop: scrolled + not transparentOnScroll
  // Compact on mobile: scrolled always (even on transparentOnScroll pages)
  const isCompact = scrolled && (!transparentOnScroll || isMobile);

  return (
    <nav
      id="main-nav"
      className={[
        'flex items-center fixed w-full top-0 z-[1000] transition-[background-color,backdrop-filter,padding,justify-content] duration-400 ease-in-out',
        isCompact
          ? 'px-[5%] py-[10px] justify-start max-[500px]:justify-center max-[500px]:bg-white/80 max-[500px]:backdrop-blur-[10px]'
          : 'px-[5%] py-5 justify-between md:py-[25px]',
      ].join(' ')}
    >
      <TransitionLink href="/">
        <MascotSVG
          className={[
            'h-12 transition-[transform,filter,height] duration-400 ease-in-out drop-shadow-md md:h-[50px] lg:h-[60px]',
            isCompact ? '[filter:drop-shadow(0px_6px_12px_rgba(217,26,33,0.3))] max-[500px]:absolute max-[500px]:left-1/2 max-[500px]:top-1/2 max-[500px]:-translate-x-1/2 max-[500px]:-translate-y-1/2 max-[500px]:h-10' : '',
          ].join(' ')}
        />
      </TransitionLink>
      <img
        src={logoSrc}
        alt="AnimHaus"
        className={[
          'logotype h-12 transition-[opacity,transform] duration-500 ease-in-out md:h-[50px] lg:h-[60px]',
          scrolled ? 'opacity-0 translate-x-8 pointer-events-none' : 'opacity-100 translate-x-0',
        ].join(' ')}
      />
    </nav>
  );
}
