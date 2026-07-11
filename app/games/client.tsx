'use client';
import dynamic from 'next/dynamic';
import TransitionLink from '@/components/TransitionLink';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCreativeEffects } from '@/components/useCreativeEffects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faCheck,
  faCode,
  faCogs,
  faComments,
  faCube,
  faDesktop,
  faExpandArrowsAlt,
  faGamepad,
  faGem,
  faHeart,
  faLightbulb,
  faMobileAlt,
  faMountain,
  faPaintBrush,
  faRocket,
  faTh,
  faUser,
  faVectorPolygon,
} from '@fortawesome/free-solid-svg-icons';

const ControllerCanvas = dynamic(() => import('./ControllerCanvas'), { ssr: false });

const btnPrimary = 'inline-flex items-center gap-[10px] bg-[#D91A21] text-white px-8 py-4 text-[0.8rem] font-extrabold tracking-[2px] uppercase no-underline transition-[background,transform] duration-300 rounded-[2px] hover:bg-[#b81319] hover:-translate-y-0.5';
const btnSecondary = 'inline-flex items-center gap-[10px] bg-transparent text-[#111111] border border-black/25 px-8 py-[15px] text-[0.8rem] font-bold tracking-[2px] uppercase no-underline transition-[border-color,background,transform] duration-300 rounded-[2px] hover:border-black hover:bg-black/5 hover:-translate-y-0.5';
const sectionCls = 'px-[5%] py-8 !pb-0 relative overflow-hidden md:px-[8%] md:py-[100px] xl:px-[10%] xl:py-[140px]';
const labelCls = 'text-[0.65rem] tracking-[5px] uppercase text-[#D91A21] font-bold block mb-4';
const h2Cls = "text-[clamp(2.4rem,5vw,5rem)] [font-family:'Plus_Jakarta_Sans',sans-serif] font-black leading-[0.95] tracking-[-2px] text-[#111111] mb-6";
const sectionHeaderCls = 'max-w-[720px] mb-10 md:mb-16 cr-reveal';
const headerParaCls = 'text-[1.05rem] text-black/55 leading-[1.7] max-w-[560px]';

export default function GamesClient() {
  useCreativeEffects();

  return (
    <div className="bg-[#f9f9f9] text-[#111111]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context':'https://schema.org','@type':'Service', name:'Game Art & Development', provider:{name:'AnimHaus Studios'}, url:'https://animhaus.com/games' }) }} />
      <Navbar logoSrc="/animhaus-logotype.png" transparentOnScroll />

      {/* ── HERO ── */}
      <section id="cr-hero" className="relative h-screen min-h-[600px] overflow-hidden bg-[#f9f9f9]">
        {/* Full-bleed canvas — CSS fade-up on mount */}
        <div
          className="absolute inset-0 z-[1]"
          style={{ animation: 'games-hero-fadein 1.2s cubic-bezier(0.22,1,0.36,1) both' }}
        >
          <ControllerCanvas />
        </div>
        <style>{`
          @keyframes games-hero-fadein {
            from { opacity: 0; transform: translateY(40px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        {/* "YOUR WORLD" — top left, behind the controller */}
        <div className="absolute top-[20vh] md:top-[12vh] left-[5%] z-[0] pointer-events-none select-none md:left-[8%] xl:left-[10%]">
          <span
            className="[font-family:'Plus_Jakarta_Sans',sans-serif] font-black uppercase leading-none tracking-[-2px] text-[#111111] opacity-[0.07] block"
            style={{ fontSize: 'clamp(3.4rem,12vw,12rem)' }}
          >
            YOUR WORLD
          </span>
        </div>

        {/* "GAMEIFIED" — in front of the controller, above CTAs */}
        <div className="absolute inset-x-0 bottom-[200px] z-[2] flex justify-center pointer-events-none select-none sm:bottom-[120px] md:bottom-[110px]">
          <span
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: 'clamp(5.8rem,8vw,9rem)',
              color: '#D91A21',
              lineHeight: 1,
              letterSpacing: '-1px',
              opacity: 0.85,
            }}
          >
            Gameified.
          </span>
        </div>

        {/* CTAs — bottom right, wrap on small screens */}
        <div className="absolute bottom-6 z-[3] flex gap-3 items-center
          left-1/2 -translate-x-1/2
          sm:left-auto sm:translate-x-0 sm:right-8 sm:bottom-8">
          <TransitionLink href="#cr-pricing" className={btnPrimary}>View Packages <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" /></TransitionLink>
          <TransitionLink href="#cr-cta" className={btnSecondary}>Start a Project</TransitionLink>
        </div>
      </section>

      {/* ── WHAT WE BUILD ── */}
      <section id="cr-create" className="px-[5%] py-8 !pb-0 relative overflow-hidden md:px-[8%] md:py-[100px] xl:px-[10%] xl:py-[140px]">
        <div className={sectionHeaderCls}>
          <h2 className={h2Cls}>What We<br />Build.</h2>
          <p className={headerParaCls}>From visual asset creation to full game development — we cover every creative and technical layer of game production.</p>
        </div>
        <div className="grid grid-cols-1 gap-0.5 mt-8 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {[
            { icon:faPaintBrush, title:'Concept Art',           desc:"Environment concepts, character illustrations, creature design, and mood boards that define the game's visual identity.", outcome:'↑ Visual Direction'  },
            { icon:faUser,       title:'Character Design',      desc:'Playable characters, NPCs, and enemy design with full model sheets, expression sets, and animation-ready references.',    outcome:'↑ Player Connection' },
            { icon:faMountain,   title:'Environment Art',       desc:'World tiles, backgrounds, level assets, and immersive environment design crafted for visual depth and gameplay clarity.', outcome:'↑ World Immersion'   },
            { icon:faDesktop,    title:'Game UI & HUD',         desc:'Clean, functional game interface design — menus, HUDs, inventory systems, and onboarding UI tuned for player clarity.',  outcome:'↑ UX Quality'        },
            { icon:faGamepad,    title:'Full Game Development', desc:'End-to-end indie game production — design, art, development, and deployment across PC, mobile, and console platforms.',  outcome:'↑ Market Ready'      },
            { icon:faGem,        title:'Asset Packs & Kits',    desc:'Production-quality game asset packs for licensing, Unity/Unreal integration, or game jam deployment.',                   outcome:'↑ Production Speed'  },
          ].map(({ icon, title, desc, outcome }, i) => (
            <div key={title} className={`py-8 px-6 md:py-[44px] md:px-9 bg-white border border-black/[0.08] transition-[border-color,background] duration-[400ms] hover:border-[rgba(217,26,33,0.35)] hover:bg-[rgba(217,26,33,0.03)] cr-reveal${i % 3 !== 0 ? ` cr-reveal-delay-${i % 3}` : ''}`}>
              <div className="w-12 h-12 bg-[rgba(217,26,33,0.08)] rounded-full flex items-center justify-center mb-6 text-[#D91A21]">
                <FontAwesomeIcon icon={icon} className="h-[1.1rem] w-[1.1rem]" />
              </div>
              <h3 className="text-[1.15rem] [font-family:'Plus_Jakarta_Sans',sans-serif] font-extrabold text-[#111111] mb-3 tracking-[-0.3px]">{title}</h3>
              <p className="text-[0.9rem] text-black/55 leading-[1.65] mb-4">{desc}</p>
              <div className="text-[0.7rem] font-bold tracking-[2px] uppercase text-[#D91A21]">{outcome}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PIPELINE ── */}
      <section id="cr-process" className="px-[5%] py-8 !pb-0 relative overflow-hidden md:px-[8%] md:py-[100px] xl:px-[10%] xl:py-[140px]">
        <div className={sectionHeaderCls}>
          <h2 className={h2Cls}>From Concept<br />to Playable.</h2>
          <p className={headerParaCls}>Our game pipeline runs from first creative vision to final deployable build — with art and engineering under one roof.</p>
        </div>
        <div className="grid grid-cols-1 gap-0.5 mt-8 md:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {[
            { icon:faLightbulb,  title:'Concept & Vision',    desc:'Game design document, visual direction, art style exploration, and core mechanics definition.'     },
            { icon:faPaintBrush, title:'Art Production',      desc:'Full asset creation — characters, environments, UI, and all visual elements built to spec and style guide.' },
            { icon:faCode,       title:'Development & Build', desc:'Game development, mechanics implementation, level design, and integration across your target platforms.' },
            { icon:faRocket,     title:'Testing & Launch',    desc:'QA, performance optimisation, platform submission, and launch-ready delivery for PC, mobile, or console.' },
          ].map(({ icon, title, desc }, i) => (
            <div key={title} className={`py-8 px-6 md:py-[44px] md:px-8 bg-white border border-black/[0.08] relative cr-reveal${i > 0 ? ` cr-reveal-delay-${i}` : ''}`}>
              <span className="absolute top-7 right-7 text-[0.65rem] font-extrabold tracking-[3px] text-black/15">{String(i + 1).padStart(2, '0')}</span>
              <div className="text-[#D91A21] mb-6"><FontAwesomeIcon icon={icon} className="h-6 w-6" /></div>
              <h4 className="text-[1rem] [font-family:'Plus_Jakarta_Sans',sans-serif] font-extrabold text-[#111111] mb-3">{title}</h4>
              <p className="text-[0.88rem] text-black/[52] leading-[1.65]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ART STYLES ── */}
      <section id="cr-styles" className="px-[5%] py-8 !pb-0 relative overflow-hidden md:px-[8%] md:py-[100px] xl:px-[10%] xl:py-[140px]">
        <div className={sectionHeaderCls}>
          <h2 className={h2Cls}>Visual Styles<br />We Build In.</h2>
          <p className={headerParaCls}>From pixel art to painterly illustration — our game art team works across the full range of visual directions.</p>
        </div>
        <div className="grid grid-cols-1 gap-0.5 mt-8 sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
          {[
            { icon:faTh,           title:'Pixel Art',              desc:'Classic and contemporary pixel art — from 8-bit retro to high-resolution modern pixel aesthetics.'  },
            { icon:faPaintBrush,   title:'Painterly Illustration',  desc:'Rich, textured hand-painted environments and characters for narrative and RPG game styles.'          },
            { icon:faVectorPolygon,title:'Flat & Cartoon',          desc:'Clean, vibrant flat design and cartoon art for mobile games, casual genres, and brand experiences.'  },
            { icon:faCube,         title:'2.5D & Stylised 3D',     desc:'Stylised 3D and 2.5D visual directions bridging 2D illustration with dimensional game space.'        },
          ].map(({ icon, title, desc }, i) => (
            <div key={title} className={`py-9 px-7 border border-black/[0.08] bg-white transition-[border-color,background] duration-300 hover:border-[rgba(217,26,33,0.3)] hover:bg-[rgba(217,26,33,0.03)] cr-reveal${i > 0 ? ` cr-reveal-delay-${i}` : ''}`}>
              <FontAwesomeIcon icon={icon} className="h-[1.4rem] w-[1.4rem] text-[#D91A21] mb-5 block" />
              <h4 className="text-[1rem] [font-family:'Plus_Jakarta_Sans',sans-serif] font-extrabold text-[#111111] mb-[10px]">{title}</h4>
              <p className="text-[0.87rem] text-black/[52] leading-[1.6]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="cr-pricing" className="px-[5%] py-8 !pb-0 relative overflow-hidden md:px-[8%] md:py-[100px] xl:px-[10%] xl:py-[140px]">
        <div className={sectionHeaderCls}>
          <h2 className={h2Cls}>Built for Every<br />Game Creator.</h2>
          <p className={headerParaCls}>Three tiers built around the scale of your game project — from a focused asset production to a full game build.</p>
        </div>
        <div className="grid grid-cols-1 gap-0.5 mt-8 md:grid-cols-3 md:mt-16">
          <div className="py-10 px-7 md:py-[52px] md:px-10 border border-black/10 bg-white flex flex-col relative transition-[border-color] duration-[400ms] hover:border-black/20 cr-reveal">
            <span className="text-[0.65rem] tracking-[4px] uppercase text-black/35 font-bold block mb-3">Tier 01</span>
            <h3 className="[font-family:'Plus_Jakarta_Sans',sans-serif] text-[2rem] font-black text-[#111111] mb-2 tracking-[-1px]">Art Pack</h3>
            <p className="text-[0.88rem] text-black/50 leading-[1.6] mb-7">For indie developers and studios needing a focused batch of game assets or character design work.</p>
            <div className="h-px bg-black/[0.08] mb-7" />
            <ul className="list-none p-0 mb-7 flex-1 flex flex-col gap-3">
              {['Character design (up to 5)','Expression sheets & references','Environment concepts (up to 3)','Game-ready asset export','Two revision rounds'].map(f => (
                <li key={f} className="flex items-start gap-3 text-[0.9rem] text-black/75 leading-[1.45]">
                  <FontAwesomeIcon icon={faCheck} className="h-3 w-3 text-[#D91A21] mt-[3px] shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <p className="text-[0.85rem] italic text-black/40 leading-[1.6] mb-8">&ldquo;Focused game art — production-quality and engine-ready.&rdquo;</p>
            <div className="mt-auto"><TransitionLink href="#cr-cta" className={btnSecondary}>Get Started</TransitionLink></div>
          </div>
          <div className="py-10 px-7 md:py-[52px] md:px-10 border border-[rgba(217,26,33,0.35)] bg-[rgba(217,26,33,0.04)] flex flex-col relative transition-[border-color] duration-[400ms] hover:border-black/20 cr-reveal cr-reveal-delay-1">
            <div className="absolute top-[-1px] left-[-1px] bg-[#D91A21] text-white text-[0.6rem] font-extrabold tracking-[2px] uppercase py-[6px] px-[14px] rounded-[0_0_4px_0]">Most Popular</div>
            <span className="text-[0.65rem] tracking-[4px] uppercase text-black/35 font-bold block mb-3">Tier 02</span>
            <h3 className="[font-family:'Plus_Jakarta_Sans',sans-serif] text-[2rem] font-black text-[#111111] mb-2 tracking-[-1px]">Full Art Production</h3>
            <p className="text-[0.88rem] text-black/50 leading-[1.6] mb-7">For games needing complete visual production — all characters, environments, UI, and assets.</p>
            <div className="h-px bg-black/[0.08] mb-7" />
            <ul className="list-none p-0 mb-7 flex-1 flex flex-col gap-3">
              {['Complete character roster','Full environment & world art','UI / HUD design system','Animation-ready references','Art direction & style guide','Engine-ready delivery'].map(f => (
                <li key={f} className="flex items-start gap-3 text-[0.9rem] text-black/75 leading-[1.45]">
                  <FontAwesomeIcon icon={faCheck} className="h-3 w-3 text-[#D91A21] mt-[3px] shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <p className="text-[0.85rem] italic text-black/40 leading-[1.6] mb-8">&ldquo;Every visual layer of your game — built to your vision and your engine.&rdquo;</p>
            <div className="mt-auto"><TransitionLink href="#cr-cta" className={btnPrimary}>Get Started <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" /></TransitionLink></div>
          </div>
          <div className="py-10 px-7 md:py-[52px] md:px-10 border border-black/10 bg-white flex flex-col relative transition-[border-color] duration-[400ms] hover:border-black/20 cr-reveal cr-reveal-delay-2">
            <span className="text-[0.65rem] tracking-[4px] uppercase text-black/35 font-bold block mb-3">Tier 03</span>
            <h3 className="[font-family:'Plus_Jakarta_Sans',sans-serif] text-[2rem] font-black text-[#111111] mb-2 tracking-[-1px]">Full Game</h3>
            <p className="text-[0.88rem] text-black/50 leading-[1.6] mb-7">For creators and studios building a complete indie game from concept to launch-ready build.</p>
            <div className="h-px bg-black/[0.08] mb-7" />
            <ul className="list-none p-0 mb-7 flex-1 flex flex-col gap-3">
              {['Game design document','Full art production pipeline','Game development & build','Multi-platform deployment','Sound design & music','QA, testing & launch support'].map(f => (
                <li key={f} className="flex items-start gap-3 text-[0.9rem] text-black/75 leading-[1.45]">
                  <FontAwesomeIcon icon={faCheck} className="h-3 w-3 text-[#D91A21] mt-[3px] shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <p className="text-[0.85rem] italic text-black/40 leading-[1.6] mb-8">&ldquo;A complete original game — from first concept to live release.&rdquo;</p>
            <div className="mt-auto"><TransitionLink href="#cr-cta" className={btnSecondary}>Discuss Your Game</TransitionLink></div>
          </div>
        </div>
      </section>

      {/* ── WHY ANIMHAUS ── */}
      <section id="cr-why" className="px-[5%] py-8 relative overflow-hidden md:px-[8%] md:py-[100px] xl:px-[10%] xl:py-[140px]">
        <div className={sectionHeaderCls}>
          <h2 className={h2Cls}>Why Creators<br />Choose AnimHaus.</h2>
        </div>
        <div className="grid grid-cols-1 gap-0.5 mt-16 min-[480px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {[
            { icon:faHeart,          title:'Art-Led Game Design',      desc:'We believe the best games start with great art direction — visual worlds that make players want to stay.'         },
            { icon:faCogs,           title:'Art + Dev Under One Roof',  desc:'No handoff friction between artists and engineers. Our pipeline keeps creative and technical perfectly aligned.' },
            { icon:faPaintBrush,     title:'Style Versatility',         desc:'Pixel art to painterly — we match visual style to genre, audience, and platform.'                               },
            { icon:faMobileAlt,      title:'Multi-Platform Focus',      desc:'PC, mobile, web, and console — we build and optimise for the platforms your players are on.'                    },
            { icon:faCode,           title:'Engine-Agnostic',           desc:"Unity, Unreal, Godot, or custom — our assets and builds work across your engine of choice."                    },
            { icon:faRocket,         title:'Launch-Ready Delivery',     desc:"We don't just build — we deliver finished, tested, and platform-ready game products."                          },
            { icon:faComments,       title:'Creator-Collaborative',     desc:'Your game, your vision. We amplify it with art and engineering — never override it.'                           },
            { icon:faExpandArrowsAlt,title:'Scalable Scope',            desc:'From a single asset pack to a full original game — our output scales with your project.'                      },
          ].map(({ icon, title, desc }, i) => (
            <div key={title} className={`py-7 px-5 md:py-10 md:px-7 border border-black/[0.08] bg-white transition-[border-color,background] duration-[400ms] hover:border-[rgba(217,26,33,0.3)] hover:bg-[rgba(217,26,33,0.03)] cr-reveal${i % 4 !== 0 ? ` cr-reveal-delay-${i % 4}` : ''}`}>
              <FontAwesomeIcon icon={icon} className="h-[1.3rem] w-[1.3rem] text-[#D91A21] mb-5 block" />
              <h4 className="text-[0.95rem] [font-family:'Plus_Jakarta_Sans',sans-serif] font-extrabold text-[#111111] mb-[10px]">{title}</h4>
              <p className="text-[0.87rem] text-black/50 leading-[1.6]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="cr-cta" className="bg-[rgba(217,26,33,0.05)] border-t border-[rgba(217,26,33,0.15)] text-center px-[5%] py-[80px] md:px-[8%] md:py-[120px] xl:px-[10%] xl:py-[140px]">
        <div className="cr-reveal">
          <span className={labelCls}>Ready to Build?</span>
          <h2 className="[font-family:'Plus_Jakarta_Sans',sans-serif] text-[clamp(2.2rem,5vw,5rem)] font-black text-[#111111] tracking-[-2px] leading-none mb-6">Your Game World<br />Is Waiting.</h2>
          <p className="text-[1.05rem] text-black/50 max-w-[500px] mx-auto mb-12 leading-[1.7]">Tell us about your game project and we&apos;ll come back with a production brief within 24 hours.</p>
          <div className="flex gap-3 justify-center flex-wrap max-[480px]:flex-col max-[480px]:items-stretch">
            <a href="mailto:appleboy285@gmail.com" className={btnPrimary}>Email Us <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" /></a>
            <TransitionLink href="/#contact" className={btnSecondary}>Full Enquiry Form</TransitionLink>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
