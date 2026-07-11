'use client';
import { useEffect } from 'react';
import TransitionLink from '@/components/TransitionLink';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCreativeEffects } from '@/components/useCreativeEffects';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight, faAd, faBolt, faBullseye, faCheck, faChalkboardTeacher,
  faCogs, faComments, faCube, faDragon, faFilm, faGlobe, faLayerGroup,
  faLightbulb, faMagic, faPaintBrush, faPalette, faPenNib, faPencilRuler,
  faScroll, faShapes, faTrophy, faTv,
} from '@fortawesome/free-solid-svg-icons';

const btnPrimary = 'inline-flex items-center gap-[10px] bg-[#D91A21] text-white border-none py-4 px-8 text-[0.8rem] font-[800] tracking-[2px] uppercase cursor-pointer no-underline transition-[background,transform] duration-300 rounded-[2px] hover:bg-[#b81319] hover:-translate-y-[2px]';
const btnSecondary = 'inline-flex items-center gap-[10px] bg-transparent text-[#111] border border-[rgba(17,17,17,0.25)] py-[15px] px-8 text-[0.8rem] font-[700] tracking-[2px] uppercase cursor-pointer no-underline transition-[border-color,background,transform] duration-300 rounded-[2px] hover:border-[#111] hover:bg-[rgba(17,17,17,0.05)] hover:-translate-y-[2px]';

export default function CartoonsClient() {
  useCreativeEffects();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

      // Hero visual parallax
      const heroVisual = document.querySelector<HTMLElement>('.cr-hero-visual');
      if (heroVisual) {
        gsap.to(heroVisual, {
          y: 90,
          ease: 'none',
          scrollTrigger: { trigger: '#cr-hero', start: 'top top', end: 'bottom top', scrub: true },
        });
      }

      // Showcase clip-path reveal
      gsap.fromTo('.cr-showcase-inner',
        { clipPath: 'inset(6% 4% 6% 4%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', ease: 'none', scrollTrigger: { trigger: '#cr-showcase', start: 'top 85%', end: 'top 30%', scrub: 1 } }
      );

      // Showcase image parallax
      const showcaseImg = document.querySelector<HTMLElement>('.cr-showcase-img');
      if (showcaseImg) {
        gsap.fromTo(showcaseImg,
          { y: '0%' },
          { y: '-10%', ease: 'none', scrollTrigger: { trigger: '#cr-showcase', start: 'top bottom', end: 'bottom top', scrub: true } }
        );
      }
  }, []);

  return (
    <div className="bg-[#f9f9f9] text-[#111]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context':'https://schema.org','@type':'Service', name:'Cartoon Production', provider:{name:'AnimHaus Studios'}, url:'https://animhaus.com/cartoons' }) }} />
      <Navbar logoSrc="/animhaus-logotype.png" transparentOnScroll />

      {/* ── Hero ── */}
      <section
        id="cr-hero"
        className="min-h-screen flex flex-col justify-center bg-[#f9f9f9] relative overflow-clip pt-[120px] pb-[10vh] px-[5%] md:pt-[140px] md:px-[8%] xl:pt-[160px] xl:px-[10%]"
      >
        <div className="absolute top-[-20%] right-[-10%] w-[60vmax] h-[60vmax] pointer-events-none z-0"
          style={{ background: 'radial-gradient(circle, rgba(217,26,33,0.1) 0%, transparent 65%)' }} />
        <div className="absolute bottom-[10%] left-[-15%] w-[50vmax] h-[50vmax] pointer-events-none z-0"
          style={{ background: 'radial-gradient(circle, rgba(217,26,33,0.05) 0%, transparent 65%)' }} />

        <div className="relative z-[1] flex flex-col lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1 max-w-[min(640px,100%)]">
            <h1
              className="cr-hero-title font-[900] leading-none tracking-[-2px] text-[#111] mb-8 md:tracking-[-3px] md:leading-[0.95] xl:tracking-[-4px] xl:leading-[0.92]"
              style={{ fontSize: 'clamp(2.6rem,6.5vw,5rem)' }}
            >
              Where Characters<br />Come to <em className="not-italic text-[#D91A21]">Life.</em>
            </h1>
            <p
              className="cr-hero-sub text-[rgba(17,17,17,0.55)] leading-[1.75] max-w-[560px] mb-12"
              style={{ fontSize: 'clamp(1rem,1.8vw,1.2rem)' }}
            >
              From brand mascots and series pilots to short films and motion graphics — AnimHaus builds cartoons that audiences remember and brands trust.
            </p>
            <div className="cr-hero-ctas flex gap-4 flex-wrap">
              <TransitionLink href="#cr-pricing" className={btnPrimary}>View Packages <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" /></TransitionLink>
              <TransitionLink href="#cr-cta" className={btnSecondary}>Start a Project</TransitionLink>
            </div>
          </div>

          <div className="cr-hero-visual relative mt-12 flex-1 max-w-[520px] lg:mt-0 rounded-[4px] overflow-hidden">
            <Image
              src="/cartoon_1.jpg"
              alt="Original cartoon by AnimHaus"
              width={520}
              height={400}
              className="w-full h-auto block object-cover"
              priority
            />
            <span className="absolute bottom-4 left-4 text-[0.6rem] font-[800] tracking-[3px] uppercase text-white bg-[rgba(0,0,0,0.5)] px-3 py-1 rounded-[2px]">Original Art</span>
          </div>
        </div>
      </section>

      {/* ── Work Gallery ── */}
      <section id="cr-work" className="py-8 px-[5%] pb-0 md:py-[100px] md:px-[8%] md:pb-0 xl:px-[10%] xl:pb-0">
        <div className="max-w-[720px] mb-10 cr-reveal md:mb-16">
          <h2 className="font-[900] leading-[0.95] tracking-[-2px] text-[#111] mb-6" style={{ fontSize: 'clamp(2.4rem,5vw,5rem)' }}>
            Works From<br />The Studio.
          </h2>
          <p className="text-[1.05rem] text-[rgba(17,17,17,0.55)] leading-[1.7] max-w-[560px]">
            Original cartoon artwork — every frame drawn, coloured, and composed in-house by the AnimHaus team.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-[2px] sm:grid-cols-2 lg:grid-cols-3">
          {[
            { src: '/cartoon_1.jpg', alt: 'AnimHaus cartoon — Lazy Afternoon', num: 'Work 01', title: 'Lazy Afternoon', desc: 'Single-panel editorial cartoon. Character design & environment illustration.', wide: false },
            { src: '/cartoon_2.jpg', alt: 'AnimHaus cartoon — The Thinker',    num: 'Work 02', title: 'The Thinker',    desc: 'Social commentary through character design. Economic satire in illustrated form.', wide: false },
            { src: '/cartoon_3.jpg', alt: 'AnimHaus cartoon — By the River',   num: 'Work 03', title: 'By the River',  desc: 'Multi-character scene composition with full environment design and narrative depth.', wide: true },
          ].map(({ src, alt, num, title, desc, wide }, i) => (
            <div key={title} className={`relative overflow-hidden group cr-reveal${i > 0 ? ` cr-reveal-delay-${i}` : ''}${wide ? ' sm:col-span-2 lg:col-span-1' : ''}`}>
              <Image src={src} alt={alt} width={600} height={400} className="w-full h-[420px] object-cover block transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.75)] to-transparent flex flex-col justify-end p-6 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                <span className="text-[0.6rem] font-[800] tracking-[3px] uppercase text-[rgba(255,255,255,0.5)] mb-2">{num}</span>
                <h4 className="text-white font-[800] text-[1.05rem] mb-1">{title}</h4>
                <p className="text-[rgba(255,255,255,0.7)] text-[0.82rem] leading-[1.5]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── What We Create ── */}
      <section id="cr-create" className="py-16 px-[5%] pb-0 md:py-[100px] md:px-[8%] md:pb-0 xl:py-[140px] xl:px-[10%] xl:pb-0">
        <div className="max-w-[720px] mb-10 cr-reveal md:mb-16">
          <h2 className="font-[900] leading-[0.95] tracking-[-2px] text-[#111] mb-6" style={{ fontSize: 'clamp(2.4rem,5vw,5rem)' }}>
            What We<br />Create.
          </h2>
          <p className="text-[1.05rem] text-[rgba(17,17,17,0.55)] leading-[1.7] max-w-[560px]">
            Every cartoon we produce starts with a story worth telling — and ends with something audiences can&apos;t look away from.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-[2px] sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: faTv,                title: 'Series & Pilots',     desc: 'Episodic cartoon series from concept to pilot — built for streaming, broadcast, or digital distribution.',           outcome: '↑ Audience Retention'   },
            { icon: faFilm,              title: 'Short Films',          desc: 'Standalone animated shorts — festival-ready, emotionally resonant, and visually striking.',                          outcome: '↑ Brand Depth'          },
            { icon: faDragon,            title: 'Brand Characters',     desc: 'Original mascots and animated brand personalities designed to live across all platforms and touchpoints.',            outcome: '↑ Brand Recognition'    },
            { icon: faChalkboardTeacher, title: 'Explainer Animation',  desc: "Complex ideas made simple and engaging through character-driven explainer videos your audience will actually watch.", outcome: '↑ Conversion Rate'       },
            { icon: faAd,                title: 'Advertising & Promo',  desc: 'Animated ads, social-first content, and promotional campaigns that hit harder than live-action alternatives.',        outcome: '↑ Campaign Performance' },
            { icon: faMagic,             title: 'Motion Graphics',      desc: 'Kinetic title sequences, lower thirds, intros, and data visualisations crafted for maximum visual impact.',          outcome: '↑ Production Value'     },
          ].map(({ icon, title, desc, outcome }, i) => (
            <div key={title} className={`p-8 bg-white border border-[rgba(17,17,17,0.08)] transition-[border-color,background] duration-[400ms] hover:border-[rgba(217,26,33,0.35)] hover:bg-[rgba(217,26,33,0.03)] cr-reveal md:p-11${i % 3 !== 0 ? ` cr-reveal-delay-${i % 3}` : ''}`}>
              <div className="w-6 h-6 bg-[rgba(217,26,33,0.08)] rounded-full flex items-center justify-center mb-6 text-[1.1rem] text-[#D91A21]">
                <FontAwesomeIcon icon={icon} />
              </div>
              <h3 className="text-[1.15rem] font-[800] text-[#111] mb-3 tracking-[-0.3px]">{title}</h3>
              <p className="text-[0.9rem] text-[rgba(17,17,17,0.55)] leading-[1.65] mb-4">{desc}</p>
              <div className="text-[0.7rem] font-[700] tracking-[2px] uppercase text-[#D91A21]">{outcome}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section id="cr-process" className="py-16 px-[5%] md:py-[100px] md:px-[8%] xl:py-[140px] xl:px-[10%]">
        <div className="max-w-[720px] mb-10 cr-reveal md:mb-16">
          <h2 className="font-[900] leading-[0.95] tracking-[-2px] text-[#111] mb-6" style={{ fontSize: 'clamp(2.4rem,5vw,5rem)' }}>
            From Concept<br />to Screen.
          </h2>
          <p className="text-[1.05rem] text-[rgba(17,17,17,0.55)] leading-[1.7] max-w-[560px]">
            Our production pipeline is structured for clarity and quality — so you always know what&apos;s happening and what&apos;s coming next.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-[2px] mt-8 md:grid-cols-2 md:mt-16 lg:grid-cols-4" style={{ counterReset: 'step' }}>
          {[
            { icon: faLightbulb,   title: 'Discovery & Concept',      desc: 'We dig into your story, audience, and goals. Scripts, mood boards, and character direction established here.' },
            { icon: faPencilRuler, title: 'Character & Art Direction', desc: 'Character sheets, environment design, colour palettes, and style guides — the visual bible of your production.' },
            { icon: faScroll,      title: 'Storyboard & Animatic',     desc: 'Every shot planned. Animatics reviewed and locked before full production begins — saving time and budget.' },
            { icon: faFilm,        title: 'Production & Delivery',     desc: 'Full animation, compositing, sound design, and final render delivered in your required format and resolution.' },
          ].map(({ icon, title, desc }, i) => (
            <div key={title} className={`cr-step py-8 px-6 bg-white border border-[rgba(17,17,17,0.08)] relative cr-reveal md:py-11 md:px-8${i > 0 ? ` cr-reveal-delay-${i}` : ''}`}>
              <div className="text-[1.6rem] text-[#D91A21] mb-6"><FontAwesomeIcon icon={icon} className="h-6 w-6" /></div>
              <h4 className="text-[1rem] font-[800] text-[#111] mb-3">{title}</h4>
              <p className="text-[0.88rem] text-[rgba(17,17,17,0.52)] leading-[1.65]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Cinematic Showcase ── */}
      <section id="cr-showcase" className="relative overflow-hidden h-[120vh]">
        <div className="cr-showcase-inner w-full h-full relative" style={{ clipPath: 'inset(6% 4% 6% 4%)' }}>
          <Image
            src="/cartoon_3.jpg"
            alt="AnimHaus cartoon scene — By the River"
            fill
            className="cr-showcase-img object-cover object-center will-change-transform"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.65)] via-[rgba(0,0,0,0.2)] to-transparent" />
          <div className="absolute inset-0 flex items-end p-[5%] md:p-[8%] xl:p-[10%]">
            <div className="cr-showcase-caption cr-reveal max-w-[560px]">
              <span className="text-[0.65rem] tracking-[5px] uppercase text-[rgba(255,255,255,0.6)] font-[700] block mb-4">Scene Design</span>
              <h3 className="font-[900] leading-[0.95] tracking-[-2px] text-white mb-4" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}>
                Every Frame<br />Tells a Story.
              </h3>
              <p className="text-[rgba(255,255,255,0.7)] text-[1rem] leading-[1.65] max-w-[440px]">
                Rich environments, dynamic characters, layered narrative detail — all crafted in-house by the AnimHaus team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Style Spectrum ── */}
      <section id="cr-styles" className="py-16 px-[5%] pb-0 md:py-[100px] md:px-[8%] md:pb-0 xl:py-[140px] xl:px-[10%] xl:pb-0">
        <div className="max-w-[720px] mb-10 cr-reveal md:mb-16">
          <h2 className="font-[900] leading-[0.95] tracking-[-2px] text-[#111] mb-6" style={{ fontSize: 'clamp(2.4rem,5vw,5rem)' }}>
            Every Style.<br />One Studio.
          </h2>
          <p className="text-[1.05rem] text-[rgba(17,17,17,0.55)] leading-[1.7] max-w-[560px]">
            We don&apos;t have a house style — we have range. Our art directors match the visual language to your story.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-[2px] sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: faShapes,     title: '2D Flat & Vector',         desc: 'Clean, bold, scalable. Perfect for branding, explainers, and social-first content.' },
            { icon: faPaintBrush, title: 'Hand-Drawn & Expressive',  desc: 'Loose, organic, emotive. Ideal for artistic shorts, music videos, and premium storytelling.' },
            { icon: faCube,       title: '3D & CGI Blend',            desc: 'Depth, weight, and cinematic presence. Used for character-driven series and high-production promo.' },
            { icon: faLayerGroup, title: 'Mixed Media & Collage',     desc: 'Experimental aesthetics combining digital, texture, photo, and illustration for distinctive visual flair.' },
          ].map(({ icon, title, desc }, i) => (
            <div key={title} className={`p-9 px-7 border border-[rgba(17,17,17,0.08)] bg-white transition-[border-color,background] duration-300 hover:border-[rgba(217,26,33,0.3)] hover:bg-[rgba(217,26,33,0.03)] cr-reveal${i > 0 ? ` cr-reveal-delay-${i}` : ''}`}>
              <FontAwesomeIcon icon={icon} className="text-[1.4rem] text-[#D91A21] mb-5 block h-6 w-6" />
              <h4 className="text-[1rem] font-[800] text-[#111] mb-[10px]">{title}</h4>
              <p className="text-[0.87rem] text-[rgba(17,17,17,0.52)] leading-[1.6]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="cr-pricing" className="py-16 px-[5%] pb-0 md:py-[100px] md:px-[8%] md:pb-0 xl:py-[140px] xl:px-[10%] xl:pb-0">
        <div className="max-w-[720px] mb-10 cr-reveal md:mb-16">
          <h2 className="font-[900] leading-[0.95] tracking-[-2px] text-[#111] mb-6" style={{ fontSize: 'clamp(2.4rem,5vw,5rem)' }}>
            Built for Every<br />Scale of Project.
          </h2>
          <p className="text-[1.05rem] text-[rgba(17,17,17,0.55)] leading-[1.7] max-w-[560px]">
            Whether you&apos;re launching a brand character or building a full series, we have a production tier for you.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-[2px] md:grid-cols-3">
          <div className="py-10 px-7 border border-[rgba(17,17,17,0.1)] bg-white flex flex-col relative transition-[border-color] duration-[400ms] hover:border-[rgba(17,17,17,0.2)] cr-reveal md:py-[52px] md:px-10">
            <span className="text-[0.65rem] tracking-[4px] uppercase text-[rgba(17,17,17,0.35)] font-[700] block mb-3">Tier 01</span>
            <h3 className="text-[2rem] font-[900] text-[#111] mb-2 tracking-[-1px]">Concept</h3>
            <p className="text-[0.88rem] text-[rgba(17,17,17,0.5)] leading-[1.6] mb-7">For brands and creators needing character design, visual style, and pre-production assets.</p>
            <div className="h-px bg-[rgba(17,17,17,0.08)] mb-7" />
            <ul className="list-none p-0 mb-7 flex-1 flex flex-col gap-3">
              {['Character concept & design sheets','Art direction & style guide','Colour palette development','Script & story consultation','Mood boards & references','2 rounds of revisions'].map(f => (
                <li key={f} className="flex items-start gap-3 text-[0.9rem] text-[rgba(17,17,17,0.75)] leading-[1.45]">
                  <FontAwesomeIcon icon={faCheck} className="text-[#D91A21] text-[0.75rem] mt-[3px] shrink-0 h-4 w-4" />{f}
                </li>
              ))}
            </ul>
            <p className="text-[0.85rem] italic text-[rgba(17,17,17,0.4)] leading-[1.6] mb-8">&ldquo;The creative foundation before production begins — done right.&rdquo;</p>
            <div className="mt-auto"><TransitionLink href="#cr-cta" className={btnSecondary}>Get Started</TransitionLink></div>
          </div>
          <div className="py-10 px-7 border border-[rgba(217,26,33,0.35)] bg-[rgba(217,26,33,0.04)] flex flex-col relative transition-[border-color] duration-[400ms] hover:border-[rgba(217,26,33,0.55)] cr-reveal cr-reveal-delay-1 md:py-[52px] md:px-10">
            <div className="absolute top-[-1px] left-[-1px] bg-[#D91A21] text-white text-[0.6rem] font-[800] tracking-[2px] uppercase py-[6px] px-[14px] rounded-[0_0_4px_0]">Most Popular</div>
            <span className="text-[0.65rem] tracking-[4px] uppercase text-[rgba(17,17,17,0.35)] font-[700] block mb-3">Tier 02</span>
            <h3 className="text-[2rem] font-[900] text-[#111] mb-2 tracking-[-1px]">Production</h3>
            <p className="text-[0.88rem] text-[rgba(17,17,17,0.5)] leading-[1.6] mb-7">For brands and content creators needing finished animated content — shorts, explainers, and promos.</p>
            <div className="h-px bg-[rgba(17,17,17,0.08)] mb-7" />
            <ul className="list-none p-0 mb-7 flex-1 flex flex-col gap-3">
              {['Everything in Concept','Storyboard & animatic','Full 2D animation production','Voice-over integration support','Sound design & SFX','Multi-format delivery','Licensed background music'].map(f => (
                <li key={f} className="flex items-start gap-3 text-[0.9rem] text-[rgba(17,17,17,0.75)] leading-[1.45]">
                  <FontAwesomeIcon icon={faCheck} className="text-[#D91A21] text-[0.75rem] mt-[3px] shrink-0 h-4 w-4" />{f}
                </li>
              ))}
            </ul>
            <p className="text-[0.85rem] italic text-[rgba(17,17,17,0.4)] leading-[1.6] mb-8">&ldquo;A complete animated production from brief to broadcast-ready delivery.&rdquo;</p>
            <div className="mt-auto"><TransitionLink href="#cr-cta" className={btnPrimary}>Get Started <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" /></TransitionLink></div>
          </div>
          <div className="py-10 px-7 border border-[rgba(17,17,17,0.1)] bg-white flex flex-col relative transition-[border-color] duration-[400ms] hover:border-[rgba(17,17,17,0.2)] cr-reveal cr-reveal-delay-2 md:py-[52px] md:px-10">
            <span className="text-[0.65rem] tracking-[4px] uppercase text-[rgba(17,17,17,0.35)] font-[700] block mb-3">Tier 03</span>
            <h3 className="text-[2rem] font-[900] text-[#111] mb-2 tracking-[-1px]">Series</h3>
            <p className="text-[0.88rem] text-[rgba(17,17,17,0.5)] leading-[1.6] mb-7">For creators and studios building episodic cartoon series — from pilot to full season rollout.</p>
            <div className="h-px bg-[rgba(17,17,17,0.08)] mb-7" />
            <ul className="list-none p-0 mb-7 flex-1 flex flex-col gap-3">
              {['Everything in Production','Series bible & world-building','Multi-episode planning','Full character roster design','Background & environment library','Pilot episode production','Distribution strategy support'].map(f => (
                <li key={f} className="flex items-start gap-3 text-[0.9rem] text-[rgba(17,17,17,0.75)] leading-[1.45]">
                  <FontAwesomeIcon icon={faCheck} className="text-[#D91A21] text-[0.75rem] mt-[3px] shrink-0 h-4 w-4" />{f}
                </li>
              ))}
            </ul>
            <p className="text-[0.85rem] italic text-[rgba(17,17,17,0.4)] leading-[1.6] mb-8">&ldquo;From pilot to series — a complete creative production partnership.&rdquo;</p>
            <div className="mt-auto"><TransitionLink href="#cr-cta" className={btnSecondary}>Discuss Your Series</TransitionLink></div>
          </div>
        </div>
      </section>

      {/* ── Why AnimHaus ── */}
      <section id="cr-why" className="py-16 px-[5%] md:py-[100px] md:px-[8%] xl:py-[140px] xl:px-[10%]">
        <div className="max-w-[720px] mb-10 cr-reveal md:mb-16">
          <h2 className="font-[900] leading-[0.95] tracking-[-2px] text-[#111] mb-6" style={{ fontSize: 'clamp(2.4rem,5vw,5rem)' }}>
            Why Creators<br />Choose AnimHaus.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-[2px] sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {[
            { icon: faPenNib,   title: 'Story-First Approach',      desc: 'We lead with narrative, not tools. The best cartoon in the world is nothing without a story that connects.' },
            { icon: faPalette,  title: 'Versatile Art Direction',   desc: 'Multiple styles, one studio. We adapt our visual language to match your project — not the other way around.' },
            { icon: faCogs,     title: 'Full In-House Pipeline',    desc: 'From script to final render, everything happens under one roof. No outsourcing, no quality gaps.' },
            { icon: faBolt,     title: 'Fast Turnaround',           desc: 'Structured sprints and clear milestones mean you see progress every week — not every quarter.' },
            { icon: faBullseye, title: 'Brand-Aware Production',    desc: 'We understand what brands need — not just what looks good, but what communicates and converts.' },
            { icon: faGlobe,    title: 'Global Format Delivery',    desc: 'Need your cartoon ready for YouTube, broadcast, or streaming? We deliver in every format and spec.' },
            { icon: faComments, title: 'Transparent Collaboration', desc: "You're in the creative loop at every stage — with structured feedback rounds and clear revision policies." },
            { icon: faTrophy,   title: 'Cinematic Standard',        desc: "AnimHaus was built for cinematic excellence. Every frame is treated as if it's going to a festival." },
          ].map(({ icon, title, desc }, i) => (
            <div key={title} className={`p-7 px-5 border border-[rgba(17,17,17,0.08)] bg-white transition-[border-color,background] duration-[400ms] hover:border-[rgba(217,26,33,0.3)] hover:bg-[rgba(217,26,33,0.03)] cr-reveal md:p-10 md:px-7${i % 4 !== 0 ? ` cr-reveal-delay-${i % 4}` : ''}`}>
              <FontAwesomeIcon icon={icon} className="text-[1.3rem] text-[#D91A21] mb-5 block h-6 w-6" />
              <h4 className="text-[0.95rem] font-[800] text-[#111] mb-[10px]">{title}</h4>
              <p className="text-[0.87rem] text-[rgba(17,17,17,0.5)] leading-[1.6]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        id="cr-cta"
        className="text-center py-20 px-[5%] border-t border-[rgba(217,26,33,0.15)] md:py-[120px] md:px-[8%] xl:py-[140px] xl:px-[10%]"
        style={{ background: 'rgba(217,26,33,0.05)' }}
      >
        <div className="cr-reveal">
          <span className="text-[0.65rem] tracking-[5px] uppercase text-[#D91A21] font-[700] flex justify-center mb-4">Ready to Build?</span>
          <h2 className="font-[900] text-[#111] tracking-[-2px] leading-none mb-6" style={{ fontSize: 'clamp(2.2rem,5vw,5rem)' }}>
            Let&apos;s Make<br />Something Iconic.
          </h2>
          <p className="text-[1.05rem] text-[rgba(17,17,17,0.5)] max-w-[500px] mx-auto mb-12 leading-[1.7]">
            Tell us about your project — we&apos;ll get back within 24 hours with a production brief and next steps.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="mailto:appleboy285@gmail.com" className={btnPrimary}>Email Us <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" /></a>
            <TransitionLink href="/#contact" className={btnSecondary}>Full Enquiry Form</TransitionLink>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
