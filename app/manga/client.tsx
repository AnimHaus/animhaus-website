'use client';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight, faBook, faMobileAlt, faPen, faUser, faMap, faPrint,
  faFeatherAlt, faBorderAll, faPencilAlt, faFont,
  faTint, faPalette, faBrush, faLayerGroup,
  faPenNib, faBookOpen, faGlobe, faComments, faUserCheck, faTrophy,
  faCheck, faChevronLeft, faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

/* eslint-disable @typescript-eslint/no-explicit-any */

export default function MangaClient() {
  const imgs = Array.from({ length: 20 }, (_, i) => `https://cdn.animhaus.com/manga/manga_${i + 1}.jpg`);

  useEffect(() => {
    let lenis: any;
    let ctx: any;

    const init = async () => {
      const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([
        import('lenis'),
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);
      gsap.registerPlugin(ScrollTrigger);

      lenis = new Lenis({ lerp: 0.075, smoothWheel: true });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time: number) => { lenis.raf(time * 1000); });
      gsap.ticker.lagSmoothing(0);

      ctx = gsap.context(() => {
        // ── Scroll progress bar ──────────────────────────────────────────
        const progressBar = document.getElementById('scroll-progress');
        const onScroll = () => {
          const p = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
          if (progressBar) progressBar.style.transform = `scaleX(${p})`;
        };
        window.addEventListener('scroll', onScroll, { passive: true });

        // ── Word-split utility ───────────────────────────────────────────
        function wordSplit(el: Element) {
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
            } else if (node.nodeType === 1 && !['SCRIPT','STYLE'].includes((node as Element).tagName)) {
              [...node.childNodes].forEach(walk);
            }
          }
          walk(el);
        }

        // ── Hero title ───────────────────────────────────────────────────
        const heroTitle = document.querySelector('.cr-hero-title');
        if (heroTitle) {
          wordSplit(heroTitle);
          gsap.set('.cr-hero-title .word', { yPercent: 115 });
        }
        gsap.timeline({ delay: 0.15 })
          .to('.cr-hero-title .word', { yPercent: 0, duration: 1.25, stagger: 0.07, ease: 'expo.out' })
          .from('.cr-hero-sub',    { y: 28, opacity: 0, duration: 1.0, ease: 'power3.out' }, 0.4)
          .from('.cr-hero-ctas a', { y: 16, opacity: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out' }, 0.62)
          .from('.mp-1', { x: -60, opacity: 0, duration: 1.2, ease: 'expo.out' }, 0.25)
          .from('.mp-2', { y: -50, opacity: 0, duration: 1.0, ease: 'expo.out' }, 0.45)
          .from('.mp-3', { x: 60, opacity: 0, duration: 1.0, ease: 'expo.out' }, 0.58);

        // ── Hero parallax ────────────────────────────────────────────────
        gsap.to('.cr-hero-visual', {
          yPercent: 18, ease: 'none',
          scrollTrigger: { trigger: '#cr-hero', start: 'top top', end: 'bottom top', scrub: 1.5 },
        });

        // ── Section header h2 word wipe ──────────────────────────────────
        gsap.utils.toArray<Element>('.cr-section-header h2').forEach(h2 => {
          wordSplit(h2);
          gsap.set(h2.querySelectorAll('.word'), { yPercent: 110 });
          ScrollTrigger.create({
            trigger: h2, start: 'top 88%',
            onEnter: () => {
              gsap.to(h2.querySelectorAll('.word'), { yPercent: 0, duration: 1.1, stagger: 0.06, ease: 'expo.out' });
              h2.closest('.cr-section-header')?.classList.add('active');
            },
          });
        });

        // ── Visual strip parallax ────────────────────────────────────────
        gsap.utils.toArray<Element>('.cr-strip-item').forEach(item => {
          const img = item.querySelector('img');
          if (img) gsap.fromTo(img, { yPercent: -12 }, {
            yPercent: 12, ease: 'none',
            scrollTrigger: { trigger: item, start: 'top bottom', end: 'bottom top', scrub: 1 },
          });
          const overlay = item.querySelector('.cr-strip-overlay');
          if (overlay) gsap.from(overlay, { y: 32, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: item, start: 'top 78%' } });
        });

        // ── Pinned horizontal gallery ────────────────────────────────────
        const galleryTrack = document.querySelector<HTMLElement>('.cr-gallery-track');
        if (galleryTrack && window.innerWidth >= 768) {
          ScrollTrigger.refresh();
          gsap.to(galleryTrack, {
            x: () => -(galleryTrack.scrollWidth - window.innerWidth + 1),
            ease: 'none',
            scrollTrigger: {
              trigger: '#cr-gallery', pin: true, scrub: 0.5,
              start: 'top top',
              end: () => '+=' + (galleryTrack.scrollWidth - window.innerWidth),
              invalidateOnRefresh: true, anticipatePin: 1,
            },
          });
        }

        // ── Process steps ────────────────────────────────────────────────
        document.querySelectorAll('.cr-step').forEach(el => {
          el.classList.remove('cr-reveal','cr-reveal-delay-1','cr-reveal-delay-2','cr-reveal-delay-3');
          (el as HTMLElement).style.cssText = 'opacity:1;transform:none;transition:none';
        });
        gsap.from('.cr-step', {
          x: -36, opacity: 0, duration: 0.9, stagger: 0.1, ease: 'expo.out',
          scrollTrigger: { trigger: '.cr-process-steps', start: 'top 82%' },
        });

        // ── Pricing tiers ────────────────────────────────────────────────
        document.querySelectorAll('.cr-tier').forEach(el => {
          el.classList.remove('cr-reveal','cr-reveal-delay-1','cr-reveal-delay-2');
          (el as HTMLElement).style.cssText = 'opacity:1;transform:none;transition:none';
        });
        gsap.from('.cr-tier', {
          y: 60, opacity: 0, duration: 1.0, stagger: 0.15, ease: 'expo.out',
          scrollTrigger: { trigger: '.cr-pricing-grid', start: 'top 85%', invalidateOnRefresh: true, once: true },
        });

        // ── Why grid ─────────────────────────────────────────────────────
        document.querySelectorAll('.cr-why-item').forEach(el => {
          el.classList.remove('cr-reveal','cr-reveal-delay-1','cr-reveal-delay-2','cr-reveal-delay-3');
          (el as HTMLElement).style.cssText = 'opacity:1;transform:none;transition:none';
        });
        gsap.from('.cr-why-item', {
          scale: 0.87, opacity: 0, duration: 0.75, stagger: { each: 0.055 }, ease: 'power3.out',
          scrollTrigger: { trigger: '.cr-why-grid', start: 'top 90%', invalidateOnRefresh: true, once: true },
        });

        // ── Style cards ──────────────────────────────────────────────────
        document.querySelectorAll('.cr-style-item').forEach(el => {
          el.classList.remove('cr-reveal','cr-reveal-delay-1','cr-reveal-delay-2','cr-reveal-delay-3');
        });
        gsap.from('.cr-style-item', {
          y: 52, opacity: 0, duration: 0.95, stagger: 0.12, ease: 'expo.out',
          scrollTrigger: { trigger: '.cr-styles-grid', start: 'top 85%', invalidateOnRefresh: true },
        });

        // ── Create cards clip-path ───────────────────────────────────────
        document.querySelectorAll('.cr-create-card').forEach(el => {
          el.classList.remove('cr-reveal','cr-reveal-delay-1','cr-reveal-delay-2','cr-reveal-delay-3');
          gsap.set(el, { clipPath: 'inset(0 0 100% 0)', opacity: 1 });
          gsap.to(el, {
            clipPath: 'inset(0 0 0% 0)', duration: 0.85, ease: 'expo.out',
            scrollTrigger: { trigger: el, start: 'top 86%' },
          });
        });

        // ── CTA h2 word split ────────────────────────────────────────────
        const ctaH2 = document.querySelector<HTMLElement>('#cr-cta h2');
        if (ctaH2) {
          wordSplit(ctaH2);
          gsap.set('#cr-cta h2 .word', { yPercent: 115 });
          gsap.to('#cr-cta h2 .word', {
            yPercent: 0, duration: 1.2, stagger: 0.09, ease: 'expo.out',
            scrollTrigger: { trigger: ctaH2, start: 'top 85%' },
          });
        }
        gsap.from('#cr-cta p, #cr-cta .cr-cta-btns', {
          y: 24, opacity: 0, stagger: 0.14, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '#cr-cta', start: 'top 78%' },
        });

        // ── Magnetic buttons ─────────────────────────────────────────────
        document.querySelectorAll<HTMLElement>('.cr-btn-primary, .cr-btn-secondary').forEach(btn => {
          btn.addEventListener('mousemove', e => {
            const r = btn.getBoundingClientRect();
            gsap.to(btn, { x: (e.clientX - r.left - r.width / 2) * 0.22, y: (e.clientY - r.top - r.height / 2) * 0.22, duration: 0.35, ease: 'power2.out' });
          });
          btn.addEventListener('mouseleave', () => { gsap.to(btn, { x: 0, y: 0, duration: 0.65, ease: 'elastic.out(1, 0.55)' }); });
        });

        // ── Catch-all heading reveal (h3 + any h2 not yet split) ─────────
        document.querySelectorAll<HTMLElement>('h2, h3').forEach(el => {
          if (el.querySelector('.word')) return; // already handled above
          wordSplit(el);
          const words = el.querySelectorAll<HTMLElement>('.word');
          if (!words.length) return;
          gsap.set(words, { yPercent: 110 });
          ScrollTrigger.create({
            trigger: el, start: 'top 88%', once: true,
            onEnter: () => gsap.to(words, { yPercent: 0, duration: 0.9, stagger: 0.045, ease: 'expo.out' }),
          });
        });

        // ── CSS reveal fallback ──────────────────────────────────────────
        document.querySelectorAll('.cr-reveal').forEach(el => {
          ScrollTrigger.create({ trigger: el, start: 'top 88%', onEnter: () => el.classList.add('active') });
        });

        window.addEventListener('load', () => {
          requestAnimationFrame(() => requestAnimationFrame(() => ScrollTrigger.refresh()));
        });

        // ── Smooth anchor scroll ─────────────────────────────────────────
        document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(link => {
          link.addEventListener('click', e => {
            e.preventDefault();
            const t = document.querySelector(link.getAttribute('href') ?? '');
            if (t) lenis.scrollTo(t, { offset: -80 });
          });
        });

        return () => { window.removeEventListener('scroll', onScroll); };
      });

      // ── Lightbox ─────────────────────────────────────────────────────
      const lb        = document.getElementById('mg-lightbox');
      const lbImg     = document.getElementById('mg-lb-img') as HTMLImageElement | null;
      const lbCounter = document.getElementById('mg-lb-counter');
      const lbStage   = document.getElementById('mg-lb-stage');
      const items     = Array.from(document.querySelectorAll<HTMLElement>('.cr-gallery-item'));
      if (!lb || !lbImg || !lbStage || items.length === 0) return;

      let current = 0, scale = 1, tx = 0, ty = 0;
      let isDragging = false, startX = 0, startY = 0, originTx = 0, originTy = 0;
      const clamp = (v: number, mn: number, mx: number) => Math.max(mn, Math.min(mx, v));

      const applyTransform = (transition: boolean) => {
        lbImg.style.transition = transition ? 'transform 0.2s ease' : 'none';
        lbImg.style.transform = `matrix(${scale},0,0,${scale},${tx},${ty})`;
      };
      const resetZoom = () => { scale = 1; tx = 0; ty = 0; applyTransform(true); };
      const clampPan  = () => {
        const maxX = Math.max(0, (lbImg.naturalWidth  * scale - lbStage.clientWidth)  / 2);
        const maxY = Math.max(0, (lbImg.naturalHeight * scale - lbStage.clientHeight) / 2);
        tx = clamp(tx, -maxX, maxX); ty = clamp(ty, -maxY, maxY);
      };

      const showItem = (index: number) => {
        current = (index + items.length) % items.length;
        lbImg.style.opacity = '0';
        lbImg.src = items[current].querySelector('img')?.src ?? '';
        resetZoom();
        lbImg.onload = () => { lbImg.style.opacity = '1'; };
        if (lbCounter) lbCounter.textContent = `${current + 1} / ${items.length}`;
      };
      const openLb = (index: number) => {
        lb.classList.add('open');
        document.body.style.overflow = 'hidden';
        lenis?.stop();
        showItem(index);
      };
      const closeLb = () => {
        lb.classList.remove('open');
        document.body.style.overflow = '';
        lenis?.start();
        resetZoom();
      };

      items.forEach((item, i) => item.addEventListener('click', () => openLb(i)));
      document.getElementById('mg-lb-close')?.addEventListener('click', closeLb);
      document.getElementById('mg-lb-prev')?.addEventListener('click',  () => { resetZoom(); showItem(current - 1); });
      document.getElementById('mg-lb-next')?.addEventListener('click',  () => { resetZoom(); showItem(current + 1); });
      lb.addEventListener('click', e => { if (e.target === lb || e.target === lbStage) closeLb(); });
      document.addEventListener('keydown', e => {
        if (!lb.classList.contains('open')) return;
        if (e.key === 'Escape')     closeLb();
        if (e.key === 'ArrowLeft')  { resetZoom(); showItem(current - 1); }
        if (e.key === 'ArrowRight') { resetZoom(); showItem(current + 1); }
      });
      lbStage.addEventListener('wheel', e => {
        e.preventDefault();
        const rect = lbImg.getBoundingClientRect();
        const ox = e.clientX - rect.left - rect.width / 2;
        const oy = e.clientY - rect.top  - rect.height / 2;
        const delta = e.deltaY < 0 ? 1.15 : 0.87;
        const newScale = clamp(scale * delta, 1, 6);
        const ratio = newScale / scale;
        tx = (tx - ox) * ratio + ox; ty = (ty - oy) * ratio + oy;
        scale = newScale;
        if (scale === 1) { tx = 0; ty = 0; } else clampPan();
        applyTransform(false);
      }, { passive: false });
      lbStage.addEventListener('mousedown', e => {
        if (scale <= 1) return;
        isDragging = true; startX = e.clientX; startY = e.clientY; originTx = tx; originTy = ty;
        lbStage.classList.add('grabbing');
      });
      window.addEventListener('mousemove', e => {
        if (!isDragging) return;
        tx = originTx + (e.clientX - startX); ty = originTy + (e.clientY - startY); clampPan(); applyTransform(false);
      });
      window.addEventListener('mouseup', () => { isDragging = false; lbStage.classList.remove('grabbing'); });

      let touches: Touch[] = [], initDist = 0, initScale = 1, initTx = 0, initTy = 0, initMidX = 0, initMidY = 0;
      lbStage.addEventListener('touchstart', e => {
        touches = Array.from(e.touches);
        if (touches.length === 2) {
          initDist = Math.hypot(touches[1].clientX - touches[0].clientX, touches[1].clientY - touches[0].clientY);
          initScale = scale; initTx = tx; initTy = ty;
          const rect = lbImg.getBoundingClientRect();
          initMidX = (touches[0].clientX + touches[1].clientX) / 2 - rect.left - rect.width  / 2;
          initMidY = (touches[0].clientY + touches[1].clientY) / 2 - rect.top  - rect.height / 2;
        } else if (touches.length === 1 && scale > 1) {
          startX = touches[0].clientX; startY = touches[0].clientY; originTx = tx; originTy = ty;
        }
      }, { passive: true });
      lbStage.addEventListener('touchmove', e => {
        touches = Array.from(e.touches);
        if (touches.length === 2) {
          e.preventDefault();
          const dist = Math.hypot(touches[1].clientX - touches[0].clientX, touches[1].clientY - touches[0].clientY);
          const newScale = clamp(initScale * dist / initDist, 1, 6);
          const ratio = newScale / initScale;
          tx = (initTx - initMidX) * ratio + initMidX; ty = (initTy - initMidY) * ratio + initMidY;
          scale = newScale;
          if (scale === 1) { tx = 0; ty = 0; } else clampPan();
          applyTransform(false);
        } else if (touches.length === 1 && scale > 1) {
          e.preventDefault();
          tx = originTx + (touches[0].clientX - startX); ty = originTy + (touches[0].clientY - startY); clampPan(); applyTransform(false);
        }
      }, { passive: false });
      let lastTap = 0;
      lbStage.addEventListener('touchend', () => {
        const now = Date.now();
        if (now - lastTap < 300) resetZoom();
        lastTap = now;
      });
    };

    init();

    return () => {
      ctx?.revert();
      lenis?.destroy();
    };
  }, []);

  return (
    <div className="bg-[#f9f9f9] text-[#111]">
      {/* Scroll progress bar */}
      <div
        id="scroll-progress"
        className="fixed top-0 left-0 w-full h-[3px] bg-[#D91A21] origin-left scale-x-0 z-[1000] pointer-events-none"
      />

      <Navbar logoSrc="/animhaus-logotype.png" transparentOnScroll />

      {/* ── HERO ── */}
      <section id="cr-hero" className="min-h-screen flex flex-col justify-center bg-[#f9f9f9] relative overflow-clip pt-[120px] pb-[10vh] px-[5%] md:pt-[140px] md:px-[8%] xl:pt-[160px] xl:px-[10%]">
        <div className="absolute top-[-20%] right-[-10%] w-[60vmax] h-[60vmax] pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(217,26,33,0.1) 0%, transparent 65%)' }} />
        <div className="absolute bottom-[10%] left-[-15%] w-[50vmax] h-[50vmax] pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(217,26,33,0.05) 0%, transparent 65%)' }} />
        <div className="grid grid-cols-1 gap-8 w-full relative z-[1] mb-8 lg:grid-cols-2 lg:items-center lg:gap-[72px]">
          <div className="cr-hero-content relative z-[1]">
            <h1 className="cr-hero-title [font-family:'Plus_Jakarta_Sans',sans-serif] text-[clamp(2.6rem,6.5vw,5rem)] font-[900] leading-none tracking-[-2px] text-[#111] mb-8 md:tracking-[-3px] md:leading-[0.95] xl:tracking-[-4px] xl:leading-[0.92]">
              Stories Told
              <br />
              <span className="text-[#D91A21]">Panel by Panel.</span>
            </h1>
            <p className="cr-hero-sub text-[rgba(17,17,17,0.55)] leading-[1.75] max-w-[560px] mb-12 text-[clamp(1rem,1.8vw,1.2rem)]">
              AnimHaus creates original manga, webtoons, and sequential art that hold their own on
              any platform — from Tapas and Webtoon to print volumes and anthologies.
            </p>
            <div className="cr-hero-ctas flex gap-4 flex-wrap">
              <a href="#cr-pricing" className="inline-flex items-center gap-[10px] bg-[#D91A21] text-white border-none py-4 px-8 text-[0.8rem] font-[800] tracking-[2px] uppercase cursor-pointer no-underline transition-[background,transform] duration-300 rounded-[2px] hover:bg-[#b81319] hover:-translate-y-[2px]">
                View Packages <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" />
              </a>
              <a href="#cr-cta" className="inline-flex items-center gap-[10px] bg-transparent text-[#111] border border-[rgba(17,17,17,0.25)] py-[15px] px-8 text-[0.8rem] font-[700] tracking-[2px] uppercase cursor-pointer no-underline transition-[border-color,background,transform] duration-300 rounded-[2px] hover:border-[#111] hover:bg-[rgba(17,17,17,0.05)] hover:-translate-y-[2px]">
                Start a Project
              </a>
            </div>
          </div>

          <div className="cr-hero-visual hidden lg:block">
            <div className="grid grid-cols-2 grid-rows-[500px_220px] gap-[4px] relative before:content-[''] before:absolute before:inset-0 before:outline before:outline-[3px] before:outline-[#111] before:outline-offset-[-3px] before:pointer-events-none before:z-[3] after:content-['AnimHaus_Manga:Commissioned_By_Trio'] after:absolute after:top-[-1px] after:right-[-1px] after:bg-[#D91A21] after:text-white after:text-[0.55rem] after:font-[800] after:tracking-[2px] after:uppercase after:py-[6px] after:px-3 after:z-[4]">
              <div className="cr-mp mp-1 overflow-hidden relative row-span-2 group">
                <img src="https://cdn.animhaus.com/manga/manga_10.jpg" alt="AnimHaus manga panel — action sequence" loading="eager" className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-[1.04]" />
                <span className="absolute bottom-[10px] left-[12px] text-[0.55rem] tracking-[3px] uppercase text-[rgba(255,255,255,0.7)] font-bold z-[2]">Action</span>
              </div>
              <div className="cr-mp mp-2 overflow-hidden relative col-start-2 row-start-1 group">
                <img src="https://cdn.animhaus.com/manga/manga_8.jpg" alt="AnimHaus manga panel — character close-up" loading="eager" className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-[1.04]" />
                <span className="absolute bottom-[10px] left-[12px] text-[0.55rem] tracking-[3px] uppercase text-[rgba(255,255,255,0.7)] font-bold z-[2]">Character</span>
              </div>
              <div className="cr-mp mp-3 overflow-hidden relative col-start-2 row-start-2 group">
                <img src="https://cdn.animhaus.com/manga/manga_15.jpg" alt="AnimHaus manga panel — multi-panel page" loading="eager" className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-[1.04]" />
                <span className="absolute bottom-[10px] left-[12px] text-[0.55rem] tracking-[3px] uppercase text-[rgba(255,255,255,0.7)] font-bold z-[2]">Sequential</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="overflow-hidden bg-[#111] py-[14px]">
        <div className="inline-flex whitespace-nowrap" style={{ animation: 'mgMarquee 28s linear infinite' }}>
          {[
            ['Original Manga', false], ['AnimHaus Studios', true], ['Sequential Art', false],
            ['Panel by Panel', false], ['Webtoon & Print', false], ['From Kolkata', true],
            ['Character-First', false], ['Story-Led', false],
            ['Original Manga', false], ['AnimHaus Studios', true], ['Sequential Art', false],
            ['Panel by Panel', false], ['Webtoon & Print', false], ['From Kolkata', true],
            ['Character-First', false], ['Story-Led', false],
          ].map(([label, hi], i) => (
            <span key={i} className={`inline-flex items-center gap-3 text-[0.68rem] font-[700] tracking-[3px] uppercase px-5 ${hi ? 'text-[#D91A21]' : 'text-[rgba(255,255,255,0.38)]'}`}>
              {label} <span className="w-[5px] h-[5px] bg-[#D91A21] rounded-full shrink-0" />
            </span>
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-[rgba(17,17,17,0.1)]" />

      {/* ── WHAT WE CREATE ── */}
      <section id="cr-create" className="py-16 px-[5%] relative overflow-hidden md:py-[100px] md:px-[8%] xl:py-[140px] xl:px-[10%]">
        <div className="cr-section-header cr-reveal max-w-[720px] mb-10 md:mb-16">
          <h2 className="text-[clamp(2.2rem,5vw,4.5rem)] font-[900] leading-[0.95] tracking-[-2px] text-[#111] mb-5">What We<br />Illustrate.</h2>
          <p className="text-[clamp(0.9rem,1.5vw,1.05rem)] text-[rgba(17,17,17,0.52)] leading-[1.75] max-w-[520px]">Every page we produce is drawn with intention — lettering, pacing, and art that serve the story, not the other way around.</p>
        </div>
        <div className="cr-create-grid grid grid-cols-1 gap-[2px] mt-8 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {[
            { icon: faBook,      title: 'Original Manga Series',    desc: 'Long-form serialised manga from chapter one to collected volumes — built for dedicated readerships and publication.',            outcome: 'Readership Depth'   },
            { icon: faMobileAlt, title: 'Webtoons & Digital Comics', desc: 'Vertical scroll webcomics optimised for mobile platforms — Tapas, Webtoon, Lezhin, and self-hosted portals.',                  outcome: 'Platform Reach'     },
            { icon: faPen,       title: 'One-Shots & Short Stories', desc: 'Standalone manga chapters and anthology pieces — self-contained narratives with punching emotional density.',                   outcome: 'Story Diversity'    },
            { icon: faUser,      title: 'Character Design',          desc: 'Detailed manga-style character sheets, expression guides, outfit variations, and turnarounds for any production.',              outcome: 'Visual Consistency' },
            { icon: faMap,       title: 'World & Lore Art',          desc: 'Maps, environment sketches, creature designs, and in-world artefacts that make your universe feel lived in.',                   outcome: 'World Depth'        },
            { icon: faPrint,     title: 'Print-Ready Volumes',       desc: 'Complete production for physical manga release — layout, typesetting, bleed-ready artwork, and cover design.',                  outcome: 'Commercial Viability'},
          ].map(({ icon, title, desc, outcome }, i) => (
            <div key={i} className={`p-8 bg-white border border-[rgba(17,17,17,0.08)] transition-[border-color,background] duration-[400ms] hover:border-[rgba(217,26,33,0.35)] hover:bg-[rgba(217,26,33,0.03)] cr-reveal md:p-11${i % 3 === 1 ? ' cr-reveal-delay-1' : i % 3 === 2 ? ' cr-reveal-delay-2' : ''}`}>
              <div className="w-12 h-12 bg-[rgba(217,26,33,0.08)] rounded-full flex items-center justify-center mb-6 text-[#D91A21] shrink-0"><FontAwesomeIcon icon={icon} className="h-5 w-5" /></div>
              <h3 className="text-[0.95rem] font-[800] tracking-[0.5px] uppercase text-[#111] mb-2">{title}</h3>
              <p className="text-[0.84rem] text-[rgba(17,17,17,0.5)] leading-[1.7] mb-4">{desc}</p>
              <div className="text-[0.7rem] font-[700] tracking-[2px] uppercase text-[#D91A21]">↑ {outcome}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-[rgba(17,17,17,0.1)]" />

      {/* ── VISUAL SHOWCASE STRIP ── */}
      <section id="cr-visual-strip" className="p-0 overflow-hidden">
        <div className="cr-strip-grid grid grid-cols-1 gap-[2px] md:grid-cols-[1fr_1.3fr_1fr] md:min-h-[440px]">
          {[
            { src: 'https://cdn.animhaus.com/manga/manga_3.jpg',  alt: 'AnimHaus manga — atmospheric character storytelling', label: '01 — Character Design',  strong: 'Every face, a world.'      },
            { src: 'https://cdn.animhaus.com/manga/manga_15.jpg', alt: 'AnimHaus manga — multi-panel page layout',            label: '02 — Panel Storytelling', strong: 'Tension in every frame.'  },
            { src: 'https://cdn.animhaus.com/manga/manga_8.jpg',  alt: 'AnimHaus manga — character expression and dialogue',  label: '03 — Sequential Art',     strong: 'Built for the shelf.'     },
          ].map(({ src, alt, label, strong }, i) => (
            <div key={i} className="cr-strip-item relative overflow-hidden min-h-[220px] group min-[480px]:min-h-[300px] md:min-h-0">
              <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover block transition-[transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <div className="absolute bottom-0 left-0 right-0 px-6 pt-8 pb-7" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)' }}>
                <span className="text-[0.6rem] tracking-[3px] uppercase text-[rgba(255,255,255,0.5)] font-[600] block mb-1">{label}</span>
                <strong className="text-white text-[0.95rem] font-[800] block">{strong}</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-[rgba(17,17,17,0.1)]" />

      {/* ── PROCESS ── */}
      <section id="cr-process" className="py-16 px-[5%] relative overflow-hidden md:py-[100px] md:px-[8%] xl:py-[140px] xl:px-[10%]">
        <div className="cr-section-header cr-reveal max-w-[720px] mb-10 md:mb-16">
          <h2 className="text-[clamp(2.2rem,5vw,4.5rem)] font-[900] leading-[0.95] tracking-[-2px] text-[#111] mb-5">From Script<br />to Page.</h2>
          <p className="text-[clamp(0.9rem,1.5vw,1.05rem)] text-[rgba(17,17,17,0.52)] leading-[1.75] max-w-[520px]">Sequential art is a craft of pacing, tension, and visual rhythm. Our process is designed to honour all three.</p>
        </div>
        <div className="cr-process-steps grid grid-cols-1 gap-[2px] mt-8 md:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {[
            { icon: faFeatherAlt, title: 'Script & Story Breakdown',   desc: 'Scene-by-scene scripting, beat sheets, and narrative arc planning to know exactly what every chapter needs to deliver.' },
            { icon: faBorderAll,  title: 'Panel Layout & Thumbnail',   desc: 'Rough panel compositions, page pacing, and flow thumbnails — approved before detailed art begins.' },
            { icon: faPencilAlt,  title: 'Pencils, Inks & Screentone', desc: 'Full illustration with linework, inking, and toning — character consistency maintained across every panel.' },
            { icon: faFont,       title: 'Lettering & Final Output',   desc: 'Professional balloon placement, SFX lettering, and platform-specific export for print or digital distribution.' },
          ].map(({ icon, title, desc }, i) => (
            <div key={i} className={`cr-step py-8 px-6 bg-white border border-[rgba(17,17,17,0.08)] relative cr-reveal md:py-11 md:px-8${i > 0 ? ` cr-reveal-delay-${i}` : ''}`}>
              <div className="text-[#D91A21] mb-6"><FontAwesomeIcon icon={icon} className="h-6 w-6" /></div>
              <h4 className="text-[0.95rem] font-[800] tracking-[0.5px] uppercase text-[#111] mb-2">{title}</h4>
              <p className="text-[0.84rem] text-[rgba(17,17,17,0.5)] leading-[1.7]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HORIZONTAL GALLERY ── */}
      <section id="cr-gallery" className="h-screen overflow-hidden relative bg-[#111]">
        <div className="absolute top-9 left-[5%] z-[10] flex items-baseline gap-5 md:left-[8%] xl:left-[10%] max-[767px]:top-4 max-[767px]:left-4">
          <span className="text-[0.62rem] tracking-[4px] uppercase text-[rgba(255,255,255,0.45)] font-[600]">Original Pages</span>
          <em className="not-italic text-[0.55rem] tracking-[2px] uppercase text-[rgba(255,255,255,0.25)]">Scroll to explore →</em>
        </div>
        <div className="cr-gallery-track flex gap-[3px] h-full will-change-transform p-20">
          {imgs.map((src, i) => (
            <div key={i} className="cr-gallery-item shrink-0 w-[420px] h-full overflow-hidden relative cursor-zoom-in">
              <img src={src} alt={`AnimHaus manga page ${String(i + 1).padStart(2, '0')}`} loading="lazy" className="w-full h-full object-cover block transition-[transform] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <span className="absolute bottom-[14px] left-[14px] text-[0.55rem] font-extrabold tracking-[3px] text-[rgba(255,255,255,0.4)] pointer-events-none">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      <div
        id="mg-lightbox"
        aria-modal="true"
        role="dialog"
        aria-label="Manga page viewer"
        className="hidden fixed inset-0 z-[9999] bg-[rgba(0,0,0,0.96)] items-center justify-center flex-col"
      >
        <button
          id="mg-lb-close"
          aria-label="Close"
          className="absolute top-[18px] right-[22px] bg-transparent border-0 text-[rgba(255,255,255,0.7)] text-[2.2rem] leading-none cursor-pointer z-[2] py-[4px] px-[10px]"
        >
          &times;
        </button>
        <button
          id="mg-lb-prev"
          aria-label="Previous page"
          className="absolute top-1/2 -translate-y-1/2 left-4 bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] text-[rgba(255,255,255,0.7)] text-[1.4rem] cursor-pointer py-[14px] px-[18px] z-[2] rounded-[3px]"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="h-4 w-4" />
        </button>
        <button
          id="mg-lb-next"
          aria-label="Next page"
          className="absolute top-1/2 -translate-y-1/2 right-4 bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] text-[rgba(255,255,255,0.7)] text-[1.4rem] cursor-pointer py-[14px] px-[18px] z-[2] rounded-[3px]"
        >
          <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4" />
        </button>
        <div
          id="mg-lb-stage"
          className="relative w-full h-full overflow-hidden flex items-center justify-center cursor-grab"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            id="mg-lb-img"
            src=""
            alt=""
            className="max-w-full max-h-full object-contain block origin-[0_0] transition-opacity duration-[150ms] select-none"
          />
        </div>
        <div
          id="mg-lb-counter"
          className="absolute bottom-[18px] left-1/2 -translate-x-1/2 text-[0.6rem] tracking-[4px] uppercase text-[rgba(255,255,255,0.35)] pointer-events-none"
        />
      </div>

      {/* ── ART STYLES ── */}
      <section id="cr-styles" className="py-16 px-[5%] relative overflow-hidden pb-0 md:py-[100px] md:px-[8%] xl:py-[140px] xl:px-[10%]">
        <div className="cr-section-header cr-reveal max-w-[720px] mb-10 md:mb-16">
          <h2 className="text-[clamp(2.2rem,5vw,4.5rem)] font-[900] leading-[0.95] tracking-[-2px] text-[#111] mb-5">Style &amp;<br />Aesthetic Range.</h2>
          <p className="text-[clamp(0.9rem,1.5vw,1.05rem)] text-[rgba(17,17,17,0.52)] leading-[1.75] max-w-[520px]">Our artists work across the full spectrum of manga visual language — from highly detailed realism to expressive loose linework.</p>
        </div>
        <div className="cr-styles-grid grid grid-cols-1 gap-[2px] sm:grid-cols-2 lg:grid-cols-4">
          {[
            { img: 'https://cdn.animhaus.com/manga/manga_3.jpg',  imgAlt: 'Classic B&W manga — AnimHaus',          icon: faTint,       h4: 'Classic Manga B&W',      p: 'Traditional ink and screentone manga — clean, high-contrast, and suited for print and digital publication.' },
            { img: 'https://cdn.animhaus.com/manga/manga_8.jpg',  imgAlt: 'Full colour webtoon — AnimHaus',        icon: faPalette,    h4: 'Full Colour Webtoon',    p: 'Vibrant digital colour styles for webtoon platforms — flat, cel-shaded, or painterly depending on the genre.' },
            { img: 'https://cdn.animhaus.com/manga/manga_10.jpg', imgAlt: 'Painterly expressive manga — AnimHaus', icon: faBrush,      h4: 'Painterly & Expressive', p: 'Loose, textured, illustrative work with a strong artistic presence — ideal for prestige or art-book production.' },
            { img: 'https://cdn.animhaus.com/manga/manga_15.jpg', imgAlt: 'Manhwa webtoon style — AnimHaus',       icon: faLayerGroup, h4: 'Manhwa / Korean Style',  p: 'Clean lines, modern proportions, and webtoon-native formatting — built for vertical scroll platforms.' },
          ].map(({ img, imgAlt, icon, h4, p }, i) => (
            <div key={i} className={`border border-[rgba(17,17,17,0.08)] bg-white transition-[border-color,background] duration-300 hover:border-[rgba(217,26,33,0.3)] hover:bg-[rgba(217,26,33,0.03)] p-0 overflow-hidden cr-reveal${i > 0 ? ` cr-reveal-delay-${i}` : ''}`}>
              <div className="w-full aspect-video overflow-hidden">
                <img src={img} alt={imgAlt} loading="lazy" className="w-full h-full object-cover block transition-[transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </div>
              <div className="px-5 pt-5 pb-6">
                <FontAwesomeIcon icon={icon} className="h-5 w-5 text-[#D91A21] mb-4 block" />
                <h4 className="text-[0.95rem] font-[800] tracking-[0.5px] uppercase text-[#111] mb-2">{h4}</h4>
                <p className="text-[0.84rem] text-[rgba(17,17,17,0.52)] leading-[1.7]">{p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section id="cr-pricing" className="py-16 px-[5%] relative overflow-hidden md:py-[100px] md:px-[8%] xl:py-[140px] xl:px-[10%]">
        <div className="cr-section-header cr-reveal max-w-[720px] mb-10 md:mb-16">
          <span className="text-[0.65rem] tracking-[5px] uppercase text-[#D91A21] font-[700] block mb-4">Service Tiers</span>
          <h2 className="text-[clamp(2.2rem,5vw,4.5rem)] font-[900] leading-[0.95] tracking-[-2px] text-[#111] mb-5">For Every Scale<br />of Story.</h2>
          <p className="text-[clamp(0.9rem,1.5vw,1.05rem)] text-[rgba(17,17,17,0.52)] leading-[1.75] max-w-[520px]">Whether it&apos;s a standalone chapter or a full serialised series, we have a production tier that fits your scope.</p>
        </div>
        <div className="cr-pricing-grid grid grid-cols-1 gap-[2px] md:grid-cols-3">
          <div className="cr-tier py-10 px-7 border border-[rgba(17,17,17,0.1)] bg-white flex flex-col relative transition-[border-color] duration-[400ms] hover:border-[rgba(17,17,17,0.2)] cr-reveal md:py-[52px] md:px-10">
            <h3 className="text-[clamp(1.3rem,2.2vw,1.7rem)] font-[900] tracking-[-0.5px] text-[#111] mb-2">Chapter</h3>
            <p className="text-[0.88rem] text-[rgba(17,17,17,0.5)] leading-[1.6] mb-7">For creators needing a single polished chapter, one-shot, or short-form sequential piece.</p>
            <div className="h-px bg-[rgba(17,17,17,0.08)] mb-7" />
            <ul className="list-none p-0 mb-7 flex-1 flex flex-col gap-3">
              {['Up to 24 pages','Character design (up to 4 characters)','Panel layout & thumbnails','Full pencil & ink artwork','Screentone / colour finish','Lettering & SFX'].map(f => (
                <li key={f} className="flex items-start gap-[10px] text-[0.85rem] text-[rgba(17,17,17,0.6)] leading-[1.55]"><FontAwesomeIcon icon={faCheck} className="h-3 w-3 text-[#D91A21] mt-1 shrink-0" /> {f}</li>
              ))}
            </ul>
            <p className="text-[0.85rem] italic text-[rgba(17,17,17,0.4)] leading-[1.6] mb-8">&ldquo;One complete chapter — every panel done to production standard.&rdquo;</p>
            <div className="mt-auto"><a href="#cr-cta" className="inline-flex items-center gap-[10px] bg-transparent text-[#111] border border-[rgba(17,17,17,0.25)] py-[15px] px-8 text-[0.8rem] font-[700] tracking-[2px] uppercase cursor-pointer no-underline transition-[border-color,background,transform] duration-300 rounded-[2px] hover:border-[#111] hover:bg-[rgba(17,17,17,0.05)] hover:-translate-y-[2px]">Get Started</a></div>
          </div>
          <div className="cr-tier py-10 px-7 border border-[rgba(217,26,33,0.35)] bg-[rgba(217,26,33,0.04)] flex flex-col relative transition-[border-color] duration-[400ms] cr-reveal cr-reveal-delay-1 md:py-[52px] md:px-10">
            <div className="absolute top-[-1px] left-[-1px] bg-[#D91A21] text-white text-[0.6rem] font-[800] tracking-[2px] uppercase py-[6px] px-[14px] rounded-[0_0_4px_0]">Most Popular</div>
            <h3 className="text-[clamp(1.3rem,2.2vw,1.7rem)] font-[900] tracking-[-0.5px] text-[#111] mb-2">Volume</h3>
            <p className="text-[0.88rem] text-[rgba(17,17,17,0.5)] leading-[1.6] mb-7">For creators launching a multi-chapter manga or webtoon season with full character and world consistency.</p>
            <div className="h-px bg-[rgba(17,17,17,0.08)] mb-7" />
            <ul className="list-none p-0 mb-7 flex-1 flex flex-col gap-3">
              {['Up to 5 chapters / full volume','Full character roster & sheets','World & environment design','Cover art & chapter covers','Full lettering & typesetting','Print & digital output','Platform submission files'].map(f => (
                <li key={f} className="flex items-start gap-[10px] text-[0.85rem] text-[rgba(17,17,17,0.6)] leading-[1.55]"><FontAwesomeIcon icon={faCheck} className="h-3 w-3 text-[#D91A21] mt-1 shrink-0" /> {f}</li>
              ))}
            </ul>
            <p className="text-[0.85rem] italic text-[rgba(17,17,17,0.4)] leading-[1.6] mb-8">&ldquo;A complete first volume — ready for print, Webtoon, or self-publishing.&rdquo;</p>
            <div className="mt-auto">
              <a href="#cr-cta" className="inline-flex items-center gap-[10px] bg-[#D91A21] text-white border-none py-4 px-8 text-[0.8rem] font-[800] tracking-[2px] uppercase cursor-pointer no-underline transition-[background,transform] duration-300 rounded-[2px] hover:bg-[#b81319] hover:-translate-y-[2px]">Get Started <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" /></a>
            </div>
          </div>
          <div className="cr-tier py-10 px-7 border border-[rgba(17,17,17,0.1)] bg-white flex flex-col relative transition-[border-color] duration-[400ms] hover:border-[rgba(17,17,17,0.2)] cr-reveal cr-reveal-delay-2 md:py-[52px] md:px-10">
            <h3 className="text-[clamp(1.3rem,2.2vw,1.7rem)] font-[900] tracking-[-0.5px] text-[#111] mb-2">Series</h3>
            <p className="text-[0.88rem] text-[rgba(17,17,17,0.5)] leading-[1.6] mb-7">For creators building a long-running serialised manga or webtoon with ongoing chapter production.</p>
            <div className="h-px bg-[rgba(17,17,17,0.08)] mb-7" />
            <ul className="list-none p-0 mb-7 flex-1 flex flex-col gap-3">
              {['Everything in Volume','Series bible & arc planning','Ongoing chapter production','Full world-building art package','Consistent art team dedicated','Publisher-ready package','Distribution strategy support'].map(f => (
                <li key={f} className="flex items-start gap-[10px] text-[0.85rem] text-[rgba(17,17,17,0.6)] leading-[1.55]"><FontAwesomeIcon icon={faCheck} className="h-3 w-3 text-[#D91A21] mt-1 shrink-0" /> {f}</li>
              ))}
            </ul>
            <p className="text-[0.85rem] italic text-[rgba(17,17,17,0.4)] leading-[1.6] mb-8">&ldquo;From chapter one to full serialisation — a long-term creative partnership.&rdquo;</p>
            <div className="mt-auto"><a href="#cr-cta" className="inline-flex items-center gap-[10px] bg-transparent text-[#111] border border-[rgba(17,17,17,0.25)] py-[15px] px-8 text-[0.8rem] font-[700] tracking-[2px] uppercase cursor-pointer no-underline transition-[border-color,background,transform] duration-300 rounded-[2px] hover:border-[#111] hover:bg-[rgba(17,17,17,0.05)] hover:-translate-y-[2px]">Discuss Your Series</a></div>
          </div>
        </div>
      </section>

      {/* ── WHY ANIMHAUS ── */}
      <section id="cr-why" className="py-16 px-[5%] relative overflow-hidden pt-0 md:py-[100px] md:px-[8%] xl:py-[140px] xl:px-[10%]">
        <div className="cr-section-header cr-reveal max-w-[720px] mb-10 md:mb-16">
          <span className="text-[0.65rem] tracking-[5px] uppercase text-[#D91A21] font-[700] block mb-4">Our Differentiators</span>
          <h2 className="text-[clamp(2.2rem,5vw,4.5rem)] font-[900] leading-[0.95] tracking-[-2px] text-[#111] mb-5">Why Creators<br />Choose AnimHaus.</h2>
        </div>
        <div className="cr-why-grid grid grid-cols-1 gap-[2px] min-[480px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {[
            { icon: faPenNib,    h4: 'Panelist Thinking',         p: 'We think in panels, not just pages. Every layout is designed for flow, tension, and visual rhythm.' },
            { icon: faBookOpen,  h4: 'Story-Led at Every Stage',  p: 'The art serves the narrative — not the other way. Every artistic decision traces back to story intent.' },
            { icon: faPrint,     h4: 'Print & Digital Ready',     p: 'All artwork is produced at print resolution and delivered in platform-optimised formats simultaneously.' },
            { icon: faUserCheck, h4: 'Character Consistency',     p: 'Every character looks the same across every page, every chapter. No drift, no inconsistency.' },
            { icon: faGlobe,     h4: 'Platform-Native Output',    p: 'Files ready for Webtoon, Tapas, Lezhin, Comixology, and print-on-demand services — no extra work needed.' },
            { icon: faComments,  h4: 'Transparent Collaboration', p: "You're reviewing thumbnails and pencils before inking. No surprise final pages — only confirmed ones." },
            { icon: faFont,      h4: 'Professional Lettering',    p: 'Manga without great lettering is unfinished. Ours is done to publication standard, every time.' },
            { icon: faTrophy,    h4: 'Publication-Grade Quality', p: 'Everything we produce is ready for submission to publishers, art fairs, and online storefronts.' },
          ].map(({ icon, h4, p }, i) => (
            <div key={i} className={`p-7 px-5 border border-[rgba(17,17,17,0.08)] bg-white transition-[border-color,background] duration-[400ms] hover:border-[rgba(217,26,33,0.3)] hover:bg-[rgba(217,26,33,0.03)] cr-reveal md:p-10 md:px-7${i % 4 > 0 ? ` cr-reveal-delay-${i % 4}` : ''}`}>
              <FontAwesomeIcon icon={icon} className="h-6 w-6 text-[#D91A21] mb-5 block" />
              <h4 className="text-[0.95rem] font-[800] tracking-[0.5px] uppercase text-[#111] mb-2">{h4}</h4>
              <p className="text-[0.84rem] text-[rgba(17,17,17,0.5)] leading-[1.7]">{p}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-[rgba(17,17,17,0.1)]" />

      {/* ── CTA ── */}
      <section
        id="cr-cta"
        className="relative overflow-hidden bg-[#f9f9f9] border-t border-[rgba(17,17,17,0.08)]"
      >
        <div
          className="absolute top-[-10%] right-[5%] w-[340px] h-[120%] flex gap-[6px] pointer-events-none z-[1] origin-top-right"
          aria-hidden="true"
          style={{
            transform: 'rotate(-8deg) translateX(20px)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
          }}
        >
          <div id="cta-strip-a" className="flex-1 flex flex-col gap-[6px] will-change-transform" style={{ animation: 'ctaScrollUp 22s linear infinite' }}>
            {[1, 4, 7, 11, 14, 17, 20, 1, 4, 7, 11, 14, 17, 20].map((n, i) => (
              <img key={i} src={`https://cdn.animhaus.com/manga/manga_${n}.jpg`} alt="" className="w-full aspect-[2/3] object-cover block rounded-[2px] opacity-[0.45]" />
            ))}
          </div>
          <div id="cta-strip-b" className="flex-1 flex flex-col gap-[6px] will-change-transform" style={{ animation: 'ctaScrollDown 18s linear infinite' }}>
            {[2, 5, 9, 12, 15, 18, 3, 2, 5, 9, 12, 15, 18, 3].map((n, i) => (
              <img key={i} src={`https://cdn.animhaus.com/manga/manga_${n}.jpg`} alt="" className="w-full aspect-[2/3] object-cover block rounded-[2px] opacity-[0.45]" />
            ))}
          </div>
        </div>

        <div className="cr-reveal relative z-[2] text-center px-[5%] py-20 md:py-[120px] md:px-[8%] xl:py-[140px] xl:px-[10%]">
          <span className="text-[0.65rem] tracking-[5px] uppercase text-[#D91A21] font-[700] block mb-4">Ready to Create?</span>
          <h2 className="text-[clamp(2.4rem,6vw,5rem)] font-[900] leading-[0.95] tracking-[-2px] text-[#111] mb-5">Your Story<br />Has a Page Count.</h2>
          <p className="text-[clamp(0.9rem,1.5vw,1.05rem)] text-[rgba(17,17,17,0.5)] leading-[1.75] max-w-[520px] mx-auto mb-10 text-center">Tell us about your manga project — we&apos;ll respond within 24 hours with a brief and chapter plan.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="mailto:appleboy285@gmail.com" className="inline-flex items-center gap-[10px] bg-[#D91A21] text-white border-none py-4 px-8 text-[0.8rem] font-[800] tracking-[2px] uppercase cursor-pointer no-underline transition-[background,transform] duration-300 rounded-[2px] hover:bg-[#b81319] hover:-translate-y-[2px]">
              Email Us <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" />
            </a>
            <a href="/#contact" className="inline-flex items-center gap-[10px] bg-transparent text-[#111] border border-[rgba(17,17,17,0.25)] py-[15px] px-8 text-[0.8rem] font-[700] tracking-[2px] uppercase cursor-pointer no-underline transition-[border-color,background,transform] duration-300 rounded-[2px] hover:border-[#111] hover:bg-[rgba(17,17,17,0.05)] hover:-translate-y-[2px]">Full Enquiry Form</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
