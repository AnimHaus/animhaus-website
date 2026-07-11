'use client';
import { useEffect } from 'react';
import TransitionLink from '@/components/TransitionLink';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon as faIcon } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowRight, faBolt, faChartLine, faCheck, faExpandArrowsAlt,
  faExternalLinkAlt, faHeadset, faMobileAlt, faPlusCircle,
  faSearch, faShieldAlt, faSync, faTools,
  // Globe popup icons
  faHeart, faComment, faThumbsUp, faFaceSmile, faStar, faFire,
  faPaperPlane, faFaceLaughBeam, faBell, faRocket, faShareNodes,
  faEnvelope, faCirclePlay, faGlobe,
} from '@fortawesome/free-solid-svg-icons';

/* eslint-disable @typescript-eslint/no-explicit-any */
declare const topojson: any;

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'ProfessionalService',
  name: 'AnimHaus Digital Infrastructure',
  url: 'https://animhaus.com/web-systems',
  description: 'Scalable digital systems for modern businesses — websites, dashboards, automation, and operational tools.',
  areaServed: 'India',
  serviceType: ['Web Development', 'Business Automation', 'Digital Infrastructure', 'Admin Dashboards'],
};

const btnPrimary = 'inline-flex items-center gap-[10px] bg-[#D91A21] text-white px-8 py-4 text-[0.8rem] font-extrabold tracking-[2px] uppercase no-underline transition-[background,transform] duration-300 rounded-[2px] hover:bg-[#b81319] hover:-translate-y-0.5';
const btnSecondary = 'inline-flex items-center gap-[10px] bg-transparent text-[#111111] border border-black/30 px-8 py-[15px] text-[0.8rem] font-bold tracking-[2px] uppercase no-underline transition-[border-color,transform] duration-300 rounded-[2px] hover:border-black hover:-translate-y-0.5';
const btnSecondaryDark = 'inline-flex items-center gap-[10px] bg-transparent text-white border border-white/30 px-8 py-[15px] text-[0.8rem] font-bold tracking-[2px] uppercase no-underline transition-[border-color,background,transform] duration-300 rounded-[2px] hover:border-white hover:bg-white/[0.06] hover:-translate-y-0.5';
const sectionCls = 'px-[5%] py-[100px] relative overflow-hidden md:px-[8%] md:py-[120px] xl:px-[10%] xl:py-[140px]';
const labelCls = 'text-[0.65rem] tracking-[5px] uppercase text-[#D91A21] font-bold block mb-4';
const h2Cls = "text-[clamp(2rem,6vw,4rem)] font-black uppercase tracking-[-2px] leading-none text-[#111111]";

const slides = [
  { num:'01', tag:'Business Websites',      title:'Your Digital<br/>Front Door.',     desc:'Premium, conversion-optimised web presence engineered for credibility, discovery, and revenue. Every detail — from performance to hierarchy — crafted to make your brand land.',                                                                    stats:[{v:'↑ 3×',l:'Avg lead generation lift'},{v:'<2s',l:'Load time target'}],    chips:['SEO-Ready','Mobile-First','Analytics','WhatsApp Integration'] },
  { num:'02', tag:'Admin Dashboards',        title:'Control Your<br/>Operations.',     desc:"Custom control panels that give your team real-time visibility and operational clarity. Role-based access, live data feeds, and actionable views — built around how your team actually works.",                                                    stats:[{v:'↑ 40%',l:'Team efficiency avg'},{v:'Real-time',l:'Data visibility'}],    chips:['Role-Based Access','Live Data','Custom Views','Audit Logs'] },
  { num:'03', tag:'Analytics Systems',       title:'Data That<br/>Drives Decisions.',  desc:"Data pipelines and dashboards that transform raw numbers into actionable intelligence. Know exactly what's working, what isn't, and what to do next — with clarity, not clutter.",                                                                 stats:[{v:'↑ 60%',l:'Decision speed'},{v:'100%',l:'Custom KPIs'}],                  chips:['Custom KPIs','Funnel Tracking','Export Reports','API Feeds'] },
  { num:'04', tag:'Automation Systems',      title:'Work Less.<br/>Output More.',      desc:"Workflow automations that eliminate repetitive overhead. Auto-assignment, smart notifications, approval chains, and API integrations — running silently so your team doesn't have to.",                                                             stats:[{v:'↓ 70%',l:'Manual task overhead'},{v:'24/7',l:'Always running'}],         chips:['Workflow Rules','Auto-Assign','Webhooks','Smart Triggers'] },
  { num:'05', tag:'Booking & Lead Systems',  title:'Capture Every<br/>Opportunity.',   desc:'End-to-end inquiry, booking, and CRM pipelines connected directly to your business flow. Every touchpoint engineered to convert — no lead lost to friction.',                                                                                     stats:[{v:'↑ 2.5×',l:'Inquiry conversion'},{v:'<2hr',l:'Avg response trigger'}],   chips:['Lead Capture','Calendar Sync','CRM Pipeline','Auto Follow-Up'] },
  { num:'06', tag:'Multilingual Platforms',  title:'Reach Every<br/>Market.',          desc:'Fully localised digital products that reach regional and global audiences without friction. Built-in language switching, RTL support, and locale-specific content management baked in from day one.',                                               stats:[{v:'↑ 5×',l:'Regional reach'},{v:'30+',l:'Languages supported'}],            chips:['i18n Architecture','RTL Support','CMS-Driven','SEO Per Locale'] },
];

const samples = [
  { num:'01', type:'Restaurant',  name:'Harvest & Hearth',       kind:'Farm-to-Table Dining',    url:'https://sample-site-1.autom.uk/' },
  { num:'02', type:'Healthcare',  name:'Everwell Health',        kind:'Medical Centre Platform', url:'https://sample-site-2.autom.uk/' },
  { num:'03', type:'Legal',       name:'Blackstone Legal Group', kind:'Law Firm Website',        url:'https://sample-site-3.autom.uk/' },
  { num:'04', type:'Real Estate', name:'Summit Realty Partners', kind:'Property Platform',       url:'https://sample-site-4.autom.uk/' },
  { num:'05', type:'Fitness',     name:'Forge Fitness Club',     kind:'Gym & Wellness',          url:'https://sample-site-5.autom.uk/' },
  { num:'06', type:'SaaS',        name:'FlowSync',               kind:'Productivity Platform',   url:'https://sample-site-6.autom.uk/' },
  { num:'07', type:'E-commerce',  name:'Verdant Market',         kind:'Online Retail Store',     url:'https://sample-site-7.autom.uk/' },
  { num:'08', type:'Education',   name:'Scholar Path',           kind:'Learning Platform',       url:'https://sample-site-8.autom.uk/' },
];

export default function WebSystemsClient() {
  useEffect(() => {
    let mounted = true;
    let lensisRaf = 0;
    const cancelGlobe = { current: false };

    // ── Iframe preview scaling ──────────────────────────────────────────────
    const scaleIframePreviews = () => {
      document.querySelectorAll<HTMLElement>('.sr-sample-preview').forEach(container => {
        const iframe = container.querySelector<HTMLIFrameElement>('iframe');
        if (!iframe) return;
        const scale = container.offsetWidth / 1440;
        iframe.style.transform = `scale(${scale})`;
        container.style.height = `${900 * scale}px`;
      });
    };
    scaleIframePreviews();
    window.addEventListener('resize', scaleIframePreviews);

    // ── Lenis + GSAP ───────────────────────────────────────────────────────
    import('lenis').then(({ default: Lenis }) => {
      if (!mounted) return;
      const lenis = new Lenis();

      Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ gsap }, { ScrollTrigger }]) => {
        if (!mounted) return;
        gsap.registerPlugin(ScrollTrigger);

        document.querySelectorAll('.sr-reveal').forEach(el => {
          ScrollTrigger.create({ trigger: el, start: 'top 88%', onEnter: () => el.classList.add('active') });
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

        const pin = document.getElementById('sr-offer-pin');
        const slidesEl = document.querySelector<HTMLElement>('.sr-offer-slides');
        const counterEl = document.querySelector<HTMLElement>('.sr-offer-current');
        const progressBar = document.querySelector<HTMLElement>('.sr-offer-progress-bar');

        if (pin && slidesEl) {
          const slideEls = slidesEl.querySelectorAll<HTMLElement>('.sr-offer-slide');
          const totalSlides = slideEls.length;
          if (window.innerWidth >= 1024 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            const getTrackDist = () => (slidesEl.scrollWidth - window.innerWidth);
            gsap.to(slidesEl, {
              x: () => -getTrackDist(),
              ease: 'none',
              scrollTrigger: {
                trigger: pin, start: 'top top', pin: true, scrub: 1,
                invalidateOnRefresh: true,
                end: () => `+=${getTrackDist() / 1.6}`,
                onUpdate(self) {
                  if (counterEl) counterEl.textContent = String(Math.round(self.progress * (totalSlides - 1)) + 1);
                  if (progressBar) progressBar.style.width = `${self.progress * 100}%`;
                },
              },
            });
          } else {
            pin.style.overflowX = 'scroll';
            pin.style.overflowY = 'hidden';
            pin.style.maxWidth = '100vw';
            pin.style.scrollSnapType = 'x mandatory';
            slidesEl.style.display = 'flex';
            slidesEl.style.width = `${totalSlides * 100}%`;
            slideEls.forEach(slide => {
              slide.style.minWidth = '100vw';
              slide.style.maxWidth = '100vw';
              slide.style.overflowX = 'hidden';
              slide.style.scrollSnapAlign = 'start';
            });
            pin.addEventListener('scroll', () => {
              const idx = Math.round(pin.scrollLeft / pin.clientWidth) + 1;
              if (counterEl) counterEl.textContent = String(idx);
              if (progressBar) progressBar.style.width = `${(idx / totalSlides) * 100}%`;
            }, { passive: true });
          }
        }

        document.querySelectorAll('a[href^="#"]').forEach(link => {
          link.addEventListener('click', e => {
            e.preventDefault();
            const href = (link as HTMLAnchorElement).getAttribute('href');
            const target = href ? document.querySelector(href) : null;
            if (target) lenis.scrollTo(target as HTMLElement, { offset: -80 });
          });
        });

        function animate(time: number) {
          if (!mounted) return;
          lenis.raf(time);
          ScrollTrigger.update();
          lensisRaf = requestAnimationFrame(animate);
        }
        lensisRaf = requestAnimationFrame(animate);
      });
    });

    // ── Globe ──────────────────────────────────────────────────────────────
    const runGlobe = () => { if (mounted) startGlobe(cancelGlobe); };
    if (typeof topojson === 'undefined') {
      if (!document.querySelector('script[src*="topojson"]')) {
        const s = document.createElement('script');
        s.src = 'https://cdn.jsdelivr.net/npm/topojson-client@3/dist/topojson-client.min.js';
        s.onload = runGlobe;
        document.head.appendChild(s);
      } else {
        const check = setInterval(() => {
          if (typeof topojson !== 'undefined') { clearInterval(check); runGlobe(); }
        }, 50);
      }
    } else {
      runGlobe();
    }

    return () => {
      mounted = false;
      cancelGlobe.current = true;
      window.removeEventListener('resize', scaleIframePreviews);
      if (lensisRaf) cancelAnimationFrame(lensisRaf);
    };
  }, []);

  return (
    <div className="bg-white text-[#111111]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar logoSrc="/animhaus-logotype.png" transparentOnScroll />

      {/* ── HERO ── */}
      <section id="sr-offer" className="relative overflow-hidden max-w-[100vw]">
        <div className="relative z-[1] min-h-screen flex flex-col justify-center pt-[120px] pb-[10vh] px-[5%] overflow-hidden md:justify-end md:pt-[140px] md:px-[8%] xl:px-[10%]">
          <canvas id="hero-sphere" aria-hidden="true" className="absolute bottom-[-52%] right-[-25%] pointer-events-none z-0 opacity-[0.92] [image-rendering:auto] max-[767px]:top-[30vh] max-[767px]:bottom-auto max-[767px]:right-[-50%] max-[767px]:opacity-[0.45] min-[1400px]:bottom-[-70%]" />
          <div id="hero-sphere-popups" aria-hidden="true" className="absolute bottom-[-52%] right-[-25%] pointer-events-none z-0 overflow-visible max-[767px]:top-[30vh] max-[767px]:bottom-auto max-[767px]:right-[-50%] min-[1400px]:bottom-[-70%]" />

          <h1 className="[font-family:'Plus_Jakarta_Sans',sans-serif] text-[clamp(2.6rem,6.5vw,6.5rem)] font-black leading-none tracking-[-1px] uppercase text-[#111111] mb-8 xl:text-[clamp(3.5rem,5.5vw,7rem)] xl:tracking-[-4px]">
            <span className="block overflow-hidden"><span>Digital Systems</span></span>
            <span className="block overflow-hidden"><span>Built to</span></span>
            <span className="block overflow-hidden"><span><em className="not-italic text-[#D91A21]">Perform.</em></span></span>
          </h1>
          <p className="text-[clamp(0.9rem,2vw,1.1rem)] text-black/52 max-w-[580px] leading-[1.8] mb-11 z-50">
            AnimHaus builds scalable digital infrastructure for modern businesses — websites, dashboards, automation systems, booking platforms, and multilingual tools. Every build is custom. Every system is built to scale.
          </p>
          <div className="flex flex-wrap gap-[14px] mb-[52px] z-50">
            <TransitionLink href="#sr-pricing" className={btnPrimary}>View Packages <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" /></TransitionLink>
            <a href="mailto:appleboy285@gmail.com" className={btnSecondary}>Book a Consultation</a>
          </div>
        </div>

        {/* GSAP-pinned slides */}
        <div id="sr-offer-pin" className="relative overflow-hidden max-w-full">
          <div className="sr-offer-slides flex will-change-transform">
            {slides.map(({ num, tag, title, desc, stats, chips }) => (
              <div key={num} className="sr-offer-slide flex-none w-full min-h-[70vh] sm:min-h-screen px-[2rem] py-[80px] relative flex items-center overflow-hidden border-t border-black/[0.06] odd:bg-white even:bg-[#f9f9f9] md:px-[8%] md:py-[100px] xl:px-[10%] xl:py-[120px]">
                <div className="absolute right-[-1%] top-1/2 -translate-y-[55%] text-[clamp(14rem,26vw,28rem)] font-black [font-family:'Plus_Jakarta_Sans',sans-serif] leading-none text-black/[0.04] tracking-[-0.06em] pointer-events-none select-none will-change-transform max-md:text-[clamp(8rem,30vw,14rem)] max-md:right-[-2%] max-md:top-auto max-md:bottom-0 max-md:transform-none" aria-hidden="true">{num}</div>
                <div className="relative z-[1] max-w-[min(680px,100%)]">
                  <span className="text-[0.62rem] tracking-[5px] uppercase text-[#D91A21] font-bold mb-5 block">{tag}</span>
                  <h3 className="[font-family:'Plus_Jakarta_Sans',sans-serif] font-black uppercase tracking-[-2px] leading-[0.9] text-[clamp(2.2rem,5.5vw,5rem)] text-[#111111] mb-7 xl:tracking-[-3px]" dangerouslySetInnerHTML={{ __html: title }} />
                  <p className="text-[clamp(0.88rem,1.5vw,1rem)] text-black/48 leading-[1.9] max-w-[500px] mb-11">{desc}</p>
                  <div className="flex gap-[52px] mb-9 flex-wrap">
                    {stats.map(({ v, l }) => (
                      <div key={l} className="flex flex-col gap-[5px]">
                        <strong className="text-[clamp(1.6rem,3.5vw,2.4rem)] font-black [font-family:'Plus_Jakarta_Sans',sans-serif] text-[#111111] leading-none">{v}</strong>
                        <span className="text-[0.6rem] tracking-[2px] uppercase text-black/36">{l}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {chips.map(c => (
                      <span key={c} className="text-[0.62rem] tracking-[1.5px] uppercase py-[7px] px-[14px] border border-black/[0.12] text-black/48 rounded-[2px]">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress bar — absolute to the section, not inside the scroller */}
        <div className="absolute bottom-[30px] left-[5%] right-[5%] flex items-center gap-5 z-10 md:left-[8%] md:right-[8%] xl:left-[10%] xl:right-[10%]">
          <span className="text-[0.6rem] tracking-[3px] uppercase text-black/30 whitespace-nowrap shrink-0">
            <em className="sr-offer-current not-italic text-[#D91A21]">1</em> / 6
          </span>
          <div className="flex-1 h-px bg-black/10 rounded-[1px] overflow-hidden">
            <div className="sr-offer-progress-bar h-full w-0 bg-[#D91A21] rounded-[1px] transition-[width] duration-[80ms] linear" />
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-black/[0.08]" />

      {/* ── PRICING ── */}
      <section id="sr-pricing" className={`${sectionCls} bg-[#f9f9f9]`}>
        <div className="mb-16 sr-reveal">
          <h2 className={h2Cls}>Built for<br />Every Stage.</h2>
          <p className="text-[clamp(0.9rem,2vw,1rem)] text-black/48 max-w-[520px] leading-[1.8] mt-4">Three structured engagement tiers aligned to where your business is right now. Each one is a foundation for the next.</p>
        </div>
        <div className="grid grid-cols-1 gap-0.5 bg-black/[0.07] lg:grid-cols-3">
          <div className="bg-[#f9f9f9] py-[52px] px-10 relative flex flex-col transition-[background] duration-[400ms] hover:bg-[#f5f5f5] sr-reveal">
            <h3 className="text-[clamp(1.5rem,3vw,1.9rem)] font-black uppercase tracking-[-0.5px] text-[#111111] mb-2">Launch</h3>
            <p className="text-[0.72rem] text-black/35 tracking-[1px] mb-9 leading-[1.6]">For startups, local businesses, and brands establishing their digital presence for the first time.</p>
            <div className="w-full h-px bg-black/[0.08] mb-8" />
            <ul className="list-none p-0 flex flex-col gap-[14px] flex-1 mb-10">
              {['Premium business website','Full mobile optimisation','WhatsApp & contact integration','On-page SEO foundations','Google Analytics setup','Performance-optimised build','30-day post-launch support'].map(f => (
                <li key={f} className="flex items-start gap-3 text-[0.82rem] text-black/60 leading-[1.5]">
                  <FontAwesomeIcon icon={faCheck} className="h-3 w-3 text-[#D91A21] mt-[3px] shrink-0 opacity-80" /> {f}
                </li>
              ))}
            </ul>
            <p className="text-[0.75rem] text-black/30 italic leading-[1.7] mb-8 pt-6 border-t border-black/[0.07]">&ldquo;The right first impression, built with infrastructure thinking — not just design.&rdquo;</p>
            <a href="mailto:appleboy285@gmail.com" className={btnSecondary}>Get Started</a>
          </div>
          <div className="bg-white border border-[rgba(217,26,33,0.3)] z-[1] py-[52px] px-10 relative flex flex-col sr-reveal sr-reveal-delay-1">
            <div className="inline-block text-[0.6rem] tracking-[3px] uppercase text-[#D91A21] font-bold bg-[rgba(217,26,33,0.1)] border border-[rgba(217,26,33,0.25)] px-3 py-[5px] rounded-[2px] mb-7 self-start">Most Popular</div>
            <h3 className="text-[clamp(1.5rem,3vw,1.9rem)] font-black uppercase tracking-[-0.5px] text-[#111111] mb-2">Growth</h3>
            <p className="text-[0.72rem] text-black/35 tracking-[1px] mb-9 leading-[1.6]">For scaling businesses, educational institutions, and brands ready to convert traffic into growth.</p>
            <div className="w-full h-px bg-black/[0.08] mb-8" />
            <ul className="list-none p-0 flex flex-col gap-[14px] flex-1 mb-10">
              {['Everything in Launch','Multilingual support','Dynamic content management','Advanced interior pages','Lead & inquiry systems','Custom analytics dashboard','Team admin portal','Enhanced SEO architecture'].map(f => (
                <li key={f} className="flex items-start gap-3 text-[0.82rem] text-black/60 leading-[1.5]">
                  <FontAwesomeIcon icon={faCheck} className="h-3 w-3 text-[#D91A21] mt-[3px] shrink-0 opacity-80" /> {f}
                </li>
              ))}
            </ul>
            <p className="text-[0.75rem] text-black/30 italic leading-[1.7] mb-8 pt-6 border-t border-black/[0.07]">&ldquo;A system that works for your business 24/7 — capturing leads and managing operations while you focus elsewhere.&rdquo;</p>
            <a href="mailto:appleboy285@gmail.com" className={btnPrimary}>Get Started <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" /></a>
          </div>
          <div className="bg-[#f9f9f9] py-[52px] px-10 relative flex flex-col transition-[background] duration-[400ms] hover:bg-[#f5f5f5] sr-reveal sr-reveal-delay-2">
            <h3 className="text-[clamp(1.5rem,3vw,1.9rem)] font-black uppercase tracking-[-0.5px] text-[#111111] mb-2">Automation</h3>
            <p className="text-[0.72rem] text-black/35 tracking-[1px] mb-9 leading-[1.6]">For operational businesses, platforms, and enterprises needing full digital infrastructure.</p>
            <div className="w-full h-px bg-black/[0.08] mb-8" />
            <ul className="list-none p-0 flex flex-col gap-[14px] flex-1 mb-10">
              {['Everything in Growth','Custom admin & back-office systems','Workflow automation layers','Role-based access management','Advanced analytics dashboards','Automation & API integrations','Operational tooling suite','Dedicated technical partner'].map(f => (
                <li key={f} className="flex items-start gap-3 text-[0.82rem] text-black/60 leading-[1.5]">
                  <FontAwesomeIcon icon={faCheck} className="h-3 w-3 text-[#D91A21] mt-[3px] shrink-0 opacity-80" /> {f}
                </li>
              ))}
            </ul>
            <p className="text-[0.75rem] text-black/30 italic leading-[1.7] mb-8 pt-6 border-t border-black/[0.07]">&ldquo;Full-stack digital operations — your business running on infrastructure engineered for scale.&rdquo;</p>
            <a href="mailto:appleboy285@gmail.com" className={btnSecondary}>Discuss Your Project</a>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-black/[0.08]" />

      {/* ── SAMPLE SITES ── */}
      <section id="sr-samples" className={`${sectionCls} bg-white`}>
        <div className="mb-16 sr-reveal">
          <h2 className={h2Cls}>Sample<br />Sites.</h2>
          <p className="text-[clamp(0.9rem,2vw,1rem)] text-black/48 max-w-[520px] leading-[1.8] mt-4">Real websites built by AnimHaus — restaurants, law firms, healthcare, real estate, SaaS, fitness, e-commerce, and education. Every one custom-built.</p>
        </div>
        <div className="grid grid-cols-1 gap-0.5 bg-black/[0.07] border border-black/[0.07] md:grid-cols-2">
          {samples.map(({ num, type, name, kind, url }, i) => (
            <div key={num} className={`group bg-white relative flex flex-col overflow-hidden sr-reveal${i % 2 !== 0 ? ' sr-reveal-delay-1' : ''}`}>
              <div className="sr-sample-preview relative overflow-hidden bg-[#f0f0f0] shrink-0">
                <iframe src={url} scrolling="no" loading="lazy" title={name}
                  style={{ display:'block', width:1440, height:900, border:'none', transformOrigin:'top left', pointerEvents:'none' }} />
                <div className="absolute inset-0 bg-black/0 flex items-center justify-center transition-[background] duration-[350ms] group-hover:bg-black/55">
                  <a href={url} target="_blank" rel="noopener noreferrer"
                    className="opacity-0 translate-y-3 transition-[opacity,transform] duration-300 group-hover:opacity-100 group-hover:translate-y-0 inline-flex items-center gap-2 bg-white text-[#111111] px-[26px] py-[13px] text-[0.7rem] font-extrabold tracking-[2px] uppercase no-underline rounded-[2px]">
                    Visit Site <FontAwesomeIcon icon={faExternalLinkAlt} className="h-3 w-3" />
                  </a>
                </div>
              </div>
              <div className="px-7 py-[22px] pb-[26px] border-t border-black/[0.07] bg-white">
                <div className="text-[0.6rem] tracking-[3px] text-[#D91A21] uppercase font-bold mb-[6px]">{num} — {type}</div>
                <div className="text-[1rem] font-extrabold text-[#111111] mb-[6px] [font-family:'Plus_Jakarta_Sans',sans-serif]">{name}</div>
                <div className="text-[0.72rem] tracking-[2px] uppercase text-black/40">{kind}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-black/[0.08]" />

      {/* ── WHY / APPROACH ── */}
      <section id="sr-why" className={`${sectionCls} bg-[#f9f9f9]`}>
        <div className="mb-16 sr-reveal">
          <h2 className={h2Cls}>Systems Built<br />to Outlast Trends.</h2>
          <p className="text-[clamp(0.9rem,2vw,1rem)] text-black/48 max-w-[520px] leading-[1.8] mt-4">We build with a permanence mindset — infrastructure that scales with your business, not just a website that looks good today.</p>
        </div>
        <div className="grid grid-cols-2 gap-px bg-black/[0.07] border border-black/[0.07] md:grid-cols-3">
          {[
            { icon:faBolt,           title:'Performance-First', desc:'Every build is optimised for speed, Core Web Vitals, and real-world performance on Indian network conditions.'  },
            { icon:faSearch,         title:'SEO Architecture',  desc:'Technical SEO foundations baked in from the start — structured data, meta hierarchy, and crawl efficiency.'      },
            { icon:faMobileAlt,      title:'Mobile-First',      desc:'Designed and engineered for mobile as the primary experience — desktop is an enhancement, not the default.'       },
            { icon:faShieldAlt,      title:'Security-Hardened', desc:"Production-grade security practices — HTTPS enforcement, input validation, and vulnerability-aware architecture." },
            { icon:faExpandArrowsAlt,title:'Scale-Ready',       desc:"Built for growth — architecture decisions that don't require rework as your business scales."                      },
            { icon:faTools,          title:'Maintainable',      desc:'Clean, documented codebases your team (or ours) can maintain, extend, and adapt without technical debt.'          },
          ].map(({ icon, title, desc }, i) => (
            <div key={title} className={`bg-[#f9f9f9] p-[40px_28px] relative overflow-hidden transition-[background] duration-[400ms] hover:bg-[#f5f5f5] before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#D91A21] before:transition-[width] before:duration-[400ms] hover:before:w-full sr-reveal${i % 3 !== 0 ? ` sr-reveal-delay-${i % 3}` : ''}`}>
              <FontAwesomeIcon icon={icon} className="h-[1.4rem] w-[1.4rem] text-[#D91A21] mb-5 block opacity-85" />
              <h3 className="text-[0.95rem] font-extrabold uppercase tracking-[1px] text-[#111111] mb-[10px]">{title}</h3>
              <p className="text-[0.8rem] text-black/48 leading-[1.7]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-black/[0.08]" />

      {/* ── RETAINER ── */}
      <section id="sr-retainer" className={`${sectionCls} bg-white`}>
        <div className="mb-16 sr-reveal">
          <h2 className={h2Cls}>Managed Support<br />That Scales.</h2>
          <p className="text-[clamp(0.9rem,2vw,1rem)] text-black/48 max-w-[520px] leading-[1.8] mt-4">After launch, AnimHaus offers ongoing managed support — updates, improvements, monitoring, and expansion work as your business grows.</p>
        </div>
        <div className="grid grid-cols-2 gap-px bg-black/[0.07] border border-black/[0.07] md:grid-cols-3 lg:grid-cols-4">
          {[
            { icon:faSync,       title:'Monthly Updates',   desc:'Regular content updates, feature improvements, and performance monitoring handled by our team.'                      },
            { icon:faHeadset,    title:'Priority Support',  desc:'Direct access to your dedicated technical partner for issues, questions, and rapid-response fixes.'                  },
            { icon:faChartLine,  title:'Analytics Review',  desc:"Monthly performance reports and strategic recommendations based on your site's real-world data."                     },
            { icon:faPlusCircle, title:'Expansion Planning',desc:'As your business grows, we plan and execute new features, sections, and system expansions.'                         },
          ].map(({ icon, title, desc }, i) => (
            <div key={title} className={`bg-white p-[40px_28px] relative overflow-hidden transition-[background] duration-[400ms] hover:bg-[#f5f5f5] before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#D91A21] before:transition-[width] before:duration-[400ms] hover:before:w-full sr-reveal${i % 3 !== 0 ? ` sr-reveal-delay-${i % 3}` : ''}`}>
              <FontAwesomeIcon icon={icon} className="h-[1.4rem] w-[1.4rem] text-[#D91A21] mb-5 block opacity-85" />
              <h3 className="text-[0.95rem] font-extrabold uppercase tracking-[1px] text-[#111111] mb-[10px]">{title}</h3>
              <p className="text-[0.8rem] text-black/48 leading-[1.7]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-black/[0.08]" />

      {/* ── CTA ── */}
      <section id="sr-cta" className="bg-[#111111] text-center px-[5%] py-[160px] relative overflow-hidden md:px-[10%] md:py-[180px]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vmax] h-[80vmax] bg-[radial-gradient(circle,rgba(217,26,33,0.08)_0%,transparent_60%)] pointer-events-none" aria-hidden="true" />
        <div className="sr-reveal relative z-[1]">
          <span className="text-[0.65rem] tracking-[5px] uppercase text-[#D91A21] font-bold block mb-4 flex justify-center">Ready to Build?</span>
          <h2 className="[font-family:'Plus_Jakarta_Sans',sans-serif] text-[clamp(2.5rem,8vw,6.5rem)] font-black uppercase tracking-[-3px] leading-[0.88] text-white mb-7">Your Digital<br /><em className="not-italic text-[#D91A21]">Infrastructure</em><br />Awaits.</h2>
          <p className="text-[clamp(0.9rem,2vw,1.05rem)] text-white/40 max-w-[520px] mx-auto mb-12 leading-[1.8]">Tell us about your business and we&apos;ll come back with a system architecture proposal and timeline within 24 hours.</p>
          <div className="flex flex-wrap gap-[14px] justify-center">
            <a href="mailto:appleboy285@gmail.com" className={btnPrimary}>Book a Consultation <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" /></a>
            <TransitionLink href="/#contact" className={btnSecondaryDark}>Full Enquiry Form</TransitionLink>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// ── Globe canvas renderer (module-level) ────────────────────────────────────
function startGlobe(cancel: { current: boolean }) {
  const canvas = document.getElementById('hero-sphere') as HTMLCanvasElement | null;
  const popupLayer = document.getElementById('hero-sphere-popups');
  if (!canvas) return;
  const ctx = canvas.getContext('2d')!;

  const LAT_LINES = 9, LON_LINES = 14, SEG = 96, INDIA_ID = 356, RX = 0.30;
  let ry = 0;
  const CC = {
    india: { fill: [217,26,33] as [number,number,number], stroke: [217,26,33] as [number,number,number] },
    world: { fill: [184,190,198] as [number,number,number], stroke: [200,208,218] as [number,number,number] },
  };
  const POPUP_ICONS = [
    { icon: faHeart,        value: '+24'  },
    { icon: faComment,      value: '12'   },
    { icon: faThumbsUp,     value: '+9'   },
    { icon: faFaceSmile,    value: '88%'  },
    { icon: faStar,         value: '+5'   },
    { icon: faBolt,         value: 'live' },
    { icon: faFire,         value: 'hot'  },
    { icon: faPaperPlane,   value: 'sent' },
    { icon: faFaceLaughBeam,value: '+3'   },
    { icon: faBell,         value: 'new'  },
    { icon: faRocket,       value: 'boost'},
    { icon: faChartLine,    value: '+18'  },
    { icon: faShareNodes,   value: 'sync' },
    { icon: faCheck,        value: 'done' },
    { icon: faEnvelope,     value: 'mail' },
    { icon: faCirclePlay,   value: 'go'   },
    { icon: faGlobe,        value: 'intl' },
  ];
  const LOOP=3.6, FIN=0.24, FOUT=0.28;
  type GP = { x:number; y:number; z:number };
  type Ring = { isIndia:boolean; points:GP[] };
  let rings: Ring[] = [];
  const pels: HTMLElement[] = [], pst: { iconIndex:number; cycleOffset:number; pendingRefresh?:boolean }[] = [];

  const setContent = (el: HTMLElement, i: number) => {
    const p = POPUP_ICONS[i % POPUP_ICONS.length];
    const svg = faIcon(p.icon)?.html[0] ?? '';
    el.innerHTML = `<span style="display:inline-flex;align-items:center;width:0.85em;height:0.85em;">${svg}</span><span>${p.value}</span>`;
  };
  const resize = () => {
    const vw = window.innerWidth;
    const sz = vw<768 ? Math.round(vw*2) : vw<1280 ? Math.round(Math.min(vw*.95,1100)) : Math.round(Math.min(vw*.88,1400));
    canvas.width=sz; canvas.height=sz;
    if (popupLayer) { popupLayer.style.width=sz+'px'; popupLayer.style.height=sz+'px'; }
  };
  resize();
  window.addEventListener('resize', resize);

  if (popupLayer) {
    POPUP_ICONS.forEach((_,i) => {
      const el = document.createElement('div');
      el.style.cssText='position:absolute;top:0;left:0;display:inline-flex;align-items:center;gap:8px;padding:8px 12px;border-radius:999px;background:rgba(255,247,247,0.92);border:1px solid rgba(217,26,33,0.12);box-shadow:0 16px 40px rgba(217,26,33,0.08);color:#ef8d91;font-size:0.72rem;font-weight:700;letter-spacing:0.02em;white-space:nowrap;transform:translate(-50%,-50%);transform-origin:center;will-change:transform,opacity'; el.style.opacity='0';
      setContent(el,i); popupLayer.appendChild(el);
      pels.push(el); pst.push({ iconIndex:i, cycleOffset:i*0.37 });
    });
  }

  const g2s = (lon:number,lat:number): GP => {
    const lm=lon*Math.PI/180, ph=lat*Math.PI/180;
    return { x:-Math.cos(ph)*Math.cos(lm), y:-Math.sin(ph), z:Math.cos(ph)*Math.sin(lm) };
  };
  const procGeo = (geo: any, ind=false) => {
    if (!geo) return;
    if (geo.type==='Polygon') geo.coordinates.forEach((r: number[][]) => rings.push({ isIndia:ind, points:r.map(([a,b])=>g2s(a,b)) }));
    else if (geo.type==='MultiPolygon') geo.coordinates.forEach((p: number[][][]) => p.forEach(r => rings.push({ isIndia:ind, points:r.map(([a,b])=>g2s(a,b)) })));
    else if (geo.type==='GeometryCollection') geo.geometries.forEach((g: any) => procGeo(g,ind));
  };
  fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
    .then(r=>r.json()).then(w => {
      if (cancel.current||typeof topojson==='undefined') return;
      topojson.feature(w,w.objects.countries).features.forEach((f: any) => procGeo(f.geometry, Number(f.id)===INDIA_ID));
    }).catch(()=>{});

  const rotY=(x:number,y:number,z:number,a:number)=>{ const c=Math.cos(a),s=Math.sin(a); return {x:x*c+z*s,y,z:-x*s+z*c}; };
  const rotX=(x:number,y:number,z:number,a:number)=>{ const c=Math.cos(a),s=Math.sin(a); return {x,y:y*c-z*s,z:y*s+z*c}; };
  const tr=(x:number,y:number,z:number)=>{ const p=rotY(x,y,z,ry); return rotX(p.x,p.y,p.z,RX); };
  const proj=(p:GP)=>{ const fov=2.6,h=canvas.width*.5,r=canvas.width*.38,s=fov/(fov+p.z+1); return {x:p.x*s*r+h,y:p.y*s*r+h,z:p.z}; };

  const gridLine=(pts:GP[])=>{ for(let i=0;i<pts.length-1;i++){ const a=pts[i],b=pts[i+1],z=(a.z+b.z)*.5,al=z>=0?.22+z*.10:Math.max(.035,.07+z*.03); ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.strokeStyle=`rgba(175,182,192,${al.toFixed(3)})`;ctx.stroke(); } };
  const drawGrid=()=>{
    ctx.lineWidth=.8;
    for(let li=0;li<=LAT_LINES;li++){ const lat=-Math.PI/2+(Math.PI/LAT_LINES)*li,cL=Math.cos(lat),sL=Math.sin(lat),pts:GP[]=[]; for(let s=0;s<=SEG;s++){ const lon=(2*Math.PI/SEG)*s,p=tr(cL*Math.cos(lon),sL,cL*Math.sin(lon)),q=proj(p); pts.push({x:q.x,y:q.y,z:p.z}); } gridLine(pts); }
    for(let li=0;li<LON_LINES;li++){ const lon=(2*Math.PI/LON_LINES)*li,cO=Math.cos(lon),sO=Math.sin(lon),pts:GP[]=[]; for(let s=0;s<=SEG;s++){ const lat=-Math.PI/2+(Math.PI/SEG)*s,cL=Math.cos(lat),sL=Math.sin(lat),p=tr(cL*cO,sL,cL*sO),q=proj(p); pts.push({x:q.x,y:q.y,z:p.z}); } gridLine(pts); }
  };
  const drawRing=(ring:Ring)=>{
    const pj=ring.points.map(p=>{const t=tr(p.x,p.y,p.z),q=proj(t);return{x:q.x,y:q.y,z:t.z};});
    const avgZ=pj.reduce((s,p)=>s+p.z,0)/pj.length, pal=ring.isIndia?CC.india:CC.world;
    if(avgZ>-0.25){ const fa=ring.isIndia?Math.min(.78,Math.max(.16,.34+avgZ*.22)):Math.min(.28,Math.max(.05,.12+avgZ*.10)); ctx.save();ctx.beginPath();let pd=false; for(let i=0;i<pj.length;i++){const p=pj[i],jmp=i>0&&Math.abs(p.x-pj[i-1].x)>canvas.width*.25;if(!pd||jmp){ctx.moveTo(p.x,p.y);pd=true;}else ctx.lineTo(p.x,p.y);} ctx.closePath();ctx.fillStyle=`rgba(${pal.fill[0]},${pal.fill[1]},${pal.fill[2]},${fa.toFixed(3)})`;ctx.fill();ctx.restore(); }
    ctx.lineWidth=1.1; for(let i=0;i<pj.length-1;i++){const a=pj[i],b=pj[i+1];if(Math.abs(b.x-a.x)>canvas.width*.25)continue;const z=(a.z+b.z)*.5,al=ring.isIndia?(z>=0?.75+z*.18:Math.max(.08,.18+z*.08)):(z>=0?.62+z*.12:Math.max(.08,.16+z*.05));ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.strokeStyle=`rgba(${pal.stroke[0]},${pal.stroke[1]},${pal.stroke[2]},${al.toFixed(3)})`;ctx.stroke();}
  };

  const CITY_LL=[[88.3639,22.5726],[-74,40.7],[-0.1,51.5],[55.3,25.2],[103.8,1.3],[139.7,35.7],[-46.6,-23.5],[3.4,6.5],[18.4,-33.9],[31.2,30.1],[37.6,55.8],[126.9,37.6],[151.2,-33.9],[-58.4,-34.6],[116.4,39.9],[-99.1,19.4],[2.35,48.86],[13.4,52.52]];
  const CSP=CITY_LL.map(([ln,lt])=>g2s(ln,lt));
  const slerp=(a:GP,b:GP,t:number):GP=>{const d=Math.min(1,Math.max(-1,a.x*b.x+a.y*b.y+a.z*b.z)),om=Math.acos(d);if(om<1e-6)return{...a};const sO=Math.sin(om),s0=Math.sin((1-t)*om)/sO,s1=Math.sin(t*om)/sO;return{x:a.x*s0+b.x*s1,y:a.y*s0+b.y*s1,z:a.z*s0+b.z*s1};};
  const arcs=CSP.slice(1).map((B,ri)=>{const A=CSP[0],pts:GP[]=[];for(let s=0;s<=72;s++){const t=s/72,p=slerp(A,B,t),h=1+.09*Math.sin(t*Math.PI);pts.push({x:p.x*h,y:p.y*h,z:p.z*h});}return{pts,phase:ri/CSP.slice(1).length,speed:.00014+(ri%7)*.000022,popupPhase:ri*.55};});

  const updPopup=(ai:number,ep:GP,dep:number,now:number)=>{
    const el=pels[ai],st=pst[ai];if(!el)return;
    if(dep<=-0.02){el.style.opacity='0';return;}
    const cp=((now+st.cycleOffset)%LOOP)/LOOP;let lo=1;
    if(cp<FIN)lo=cp/FIN;else if(cp>1-FOUT)lo=1-(cp-(1-FOUT))/FOUT;
    if(cp>.985&&!st.pendingRefresh){st.pendingRefresh=true;st.iconIndex=(st.iconIndex+3+ai)%POPUP_ICONS.length;setContent(el,st.iconIndex);}else if(cp<.85)st.pendingRefresh=false;
    const cx=canvas.width*.5,dx=ep.x-cx,dy=ep.y-cx,dist=Math.hypot(dx,dy)||1,off=24;
    const x=ep.x+(dx/dist)*off,y=ep.y+(dy/dist)*off,pulse=.5+.5*Math.sin(now*2.1+arcs[ai].popupPhase);
    const vis=Math.min(1,Math.max(0,.25+dep*.9)),ty=12-pulse*18+(1-lo)*10,sc=.88+lo*.16+pulse*.05;
    el.style.opacity=(vis*lo).toFixed(3);el.style.transform=`translate(${x.toFixed(1)}px,${y.toFixed(1)}px) translate(-50%,calc(-50% - ${ty.toFixed(1)}px)) scale(${sc.toFixed(3)})`;
  };
  const drawArcs=()=>{
    const now=performance.now()*.001;
    arcs.forEach((arc,ai)=>{
      arc.phase=(arc.phase+arc.speed)%1;const n=arc.pts.length;
      const pj=arc.pts.map(p=>{const t=tr(p.x,p.y,p.z),q=proj(t);return{x:q.x,y:q.y,z:t.z};});
      ctx.lineWidth=1.2;for(let i=0;i<n-1;i++){const a=pj[i],b=pj[i+1],z=(a.z+b.z)*.5,al=z>=0?.55+z*.35:Math.max(0,.15+z*.5);if(al<.005)continue;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.strokeStyle=`rgba(217,26,33,${al.toFixed(3)})`;ctx.stroke();}
      const ri=arc.phase*(n-1),lo=Math.floor(ri),hi=Math.min(n-1,lo+1),fr=ri-lo,pA=pj[lo],pB=pj[hi];
      const hx=pA.x+(pB.x-pA.x)*fr,hy=pA.y+(pB.y-pA.y)*fr,hz=pA.z+(pB.z-pA.z)*fr;
      if(hz>-0.05){const da=Math.min(1,.5+hz*.5);ctx.beginPath();ctx.arc(hx,hy,7,0,Math.PI*2);ctx.fillStyle=`rgba(217,26,33,${(da*.18).toFixed(3)})`;ctx.fill();ctx.beginPath();ctx.arc(hx,hy,3,0,Math.PI*2);ctx.fillStyle=`rgba(217,26,33,${da.toFixed(3)})`;ctx.fill();}
      updPopup(ai,pj[n-1],pj[n-1].z,now);
    });
  };

  const draw=()=>{
    if(cancel.current){window.removeEventListener('resize',resize);return;}
    ctx.clearRect(0,0,canvas.width,canvas.height);
    rings.forEach(r=>drawRing(r));drawGrid();drawArcs();
    ry+=.0015; requestAnimationFrame(draw);
  };
  draw();
}
