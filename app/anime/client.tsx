'use client';
import TransitionLink from '@/components/TransitionLink';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCreativeEffects } from '@/components/useCreativeEffects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight, faBolt, faBook, faBookOpen, faCheck, faCogs, faComments,
  faCompactDisc, faDraftingCompass, faExpandArrowsAlt, faFilm, faGlobe,
  faGlobeAsia, faHeadphones, faHeadphonesAlt, faHeart, faMoon, faMusic,
  faPlayCircle, faStar, faTv, faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

const btnPrimary = 'inline-flex items-center gap-[10px] bg-[#D91A21] text-white border-none py-4 px-8 text-[0.8rem] font-[800] tracking-[2px] uppercase cursor-pointer no-underline transition-[background,transform] duration-300 rounded-[2px] hover:bg-[#b81319] hover:-translate-y-[2px]';
const btnSecondary = 'inline-flex items-center gap-[10px] bg-transparent text-[#111] border border-[rgba(17,17,17,0.25)] py-[15px] px-8 text-[0.8rem] font-[700] tracking-[2px] uppercase cursor-pointer no-underline transition-[border-color,background,transform] duration-300 rounded-[2px] hover:border-[#111] hover:bg-[rgba(17,17,17,0.05)] hover:-translate-y-[2px]';

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Anime Production', provider: { '@type': 'Organization', name: 'AnimHaus Studios' },
  url: 'https://animhaus.com/anime',
  description: 'Original anime production — series, OVAs, music videos, and opening sequences.',
  areaServed: 'Worldwide',
};

export default function AnimeClient() {
  useCreativeEffects();

  return (
    <div className="bg-[#f9f9f9] text-[#111]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar logoSrc="/animhaus-logotype.png" transparentOnScroll />

      {/* ── Hero ── */}
      <section id="cr-hero" className="min-h-screen flex flex-col justify-center bg-[#f9f9f9] relative overflow-clip pt-[120px] pb-[10vh] px-[5%] md:pt-[140px] md:px-[8%] xl:pt-[160px] xl:px-[10%]">
        <div className="absolute top-[-20%] right-[-10%] w-[60vmax] h-[60vmax] pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(217,26,33,0.1) 0%, transparent 65%)' }} />
        <div className="absolute bottom-[10%] left-[-15%] w-[50vmax] h-[50vmax] pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(217,26,33,0.05) 0%, transparent 65%)' }} />
        <div className="relative z-[1] max-w-[min(960px,100%)] w-full">
          <p className="cr-hero-eyebrow text-[0.65rem] tracking-[6px] uppercase text-[#D91A21] font-[700] mb-7 block">Anime Production — AnimHaus</p>
          <h1 className="cr-hero-title font-[900] leading-none tracking-[-2px] text-[#111] mb-8 md:tracking-[-3px] md:leading-[0.95] xl:tracking-[-4px] xl:leading-[0.92]" style={{ fontSize: 'clamp(2.6rem,6.5vw,5rem)' }}>
            Anime, Engineered<br />from the <em className="not-italic text-[#D91A21]">Soul.</em>
          </h1>
          <p className="cr-hero-sub text-[rgba(17,17,17,0.55)] leading-[1.75] max-w-[560px] mb-12" style={{ fontSize: 'clamp(1rem,1.8vw,1.2rem)' }}>
            AnimHaus crafts original anime built for emotional depth and cinematic permanence — original series, OVAs, music videos, and opening sequences that linger long after the screen goes dark.
          </p>
          <div className="cr-hero-ctas flex gap-4 flex-wrap">
            <TransitionLink href="#cr-pricing" className={btnPrimary}>View Packages <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" /></TransitionLink>
            <TransitionLink href="#cr-cta" className={btnSecondary}>Start a Project</TransitionLink>
          </div>
        </div>
        <div className="flex flex-wrap gap-7 mt-12 mx-[-5%] px-[5%] pt-8 relative z-[1] md:mx-[-8%] md:px-[8%] xl:mx-[-10%] xl:px-[10%]">
          {[
            { stat: 'Cinematic', label: 'Production Quality' },
            { stat: 'Original',  label: 'Every Story'        },
            { stat: 'Full',      label: 'In-House Pipeline'  },
            { stat: 'India-HQ',  label: 'Global Audience'    },
          ].map(({ stat, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <strong className="font-[900] text-[#111]" style={{ fontSize: 'clamp(1.3rem,3vw,1.8rem)' }}>{stat}</strong>
              <span className="text-[0.65rem] tracking-[3px] uppercase text-[rgba(17,17,17,0.4)]">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── What We Produce ── */}
      <section id="cr-create" className="py-8 pb-0 px-[5%] relative overflow-hidden md:py-[100px] md:px-[8%] xl:px-[10%]">
        <div className="max-w-[720px] mb-10 cr-reveal md:mb-16">
          <h2 className="font-[900] leading-[0.95] tracking-[-2px] text-[#111] mb-6" style={{ fontSize: 'clamp(2.4rem,5vw,5rem)' }}>What We<br />Produce.</h2>
          <p className="text-[1.05rem] text-[rgba(17,17,17,0.55)] leading-[1.7] max-w-[560px]">Every production we take on is crafted with the intention of becoming something that matters — to the audience and to the culture.</p>
        </div>
        <div className="grid grid-cols-1 gap-[2px] mt-8 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {[
            { icon: faTv,          title: 'Original Series',             desc: 'Episodic anime series built from the ground up — from world-building and pilot to full season production.',    outcome: '↑ Long-Form Audience'   },
            { icon: faCompactDisc, title: 'OVAs & Specials',             desc: 'Standalone animated features and special episodes — premium quality for theatrical or streaming release.',     outcome: '↑ Production Prestige'  },
            { icon: faMusic,       title: 'Anime Music Videos',          desc: 'AMVs and lyric videos that serve as standalone artistic statements — cinematic, evocative, and shareable.',    outcome: '↑ Viral Potential'      },
            { icon: faPlayCircle,  title: 'Opening & Ending Sequences',  desc: 'High-energy OP/ED sequences with dramatic visual language that set the tone for an entire series.',           outcome: '↑ Series Identity'      },
            { icon: faBookOpen,    title: 'Manga Adaptations',           desc: 'Bringing existing manga to motion — panel-to-screen adaptations with faithful visual direction and pacing.',   outcome: '↑ Story Expansion'      },
            { icon: faStar,        title: 'Promotional Anime',           desc: 'Brand and event promos in anime style — for games, products, concerts, and cultural experiences.',            outcome: '↑ Engagement'           },
          ].map(({ icon, title, desc, outcome }, i) => (
            <div key={title} className={`p-8 bg-white border border-[rgba(17,17,17,0.08)] transition-[border-color,background] duration-[400ms] hover:border-[rgba(217,26,33,0.35)] hover:bg-[rgba(217,26,33,0.03)] cr-reveal md:p-11${i % 3 !== 0 ? ` cr-reveal-delay-${i % 3}` : ''}`}>
              <div className="w-8 h-8 bg-[rgba(217,26,33,0.08)] rounded-full flex items-center justify-center mb-6 text-[1.1rem] text-[#D91A21]"><FontAwesomeIcon icon={icon} /></div>
              <h3 className="text-[1.15rem] font-[800] text-[#111] mb-3 tracking-[-0.3px]">{title}</h3>
              <p className="text-[0.9rem] text-[rgba(17,17,17,0.55)] leading-[1.65] mb-4">{desc}</p>
              <div className="text-[0.7rem] font-[700] tracking-[2px] uppercase text-[#D91A21]">{outcome}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section id="cr-process" className="py-8 pb-0 px-[5%] relative overflow-hidden md:py-[100px] md:px-[8%] xl:px-[10%]">
        <div className="max-w-[720px] mb-10 cr-reveal md:mb-16">
          <h2 className="font-[900] leading-[0.95] tracking-[-2px] text-[#111] mb-6" style={{ fontSize: 'clamp(2.4rem,5vw,5rem)' }}>How We<br />Build Worlds.</h2>
          <p className="text-[1.05rem] text-[rgba(17,17,17,0.55)] leading-[1.7] max-w-[560px]">Anime isn&apos;t just animation — it&apos;s a complete visual language. Our process treats every project as a cinematic universe in the making.</p>
        </div>
        <div className="grid grid-cols-1 gap-[2px] mt-8 md:grid-cols-2 md:mt-16 lg:grid-cols-4" style={{ counterReset: 'step' }}>
          {[
            { icon: faBook,       title: 'Story & World-Building', desc: 'Lore, characters, universe rules. We develop the world before we draw a single frame.' },
            { icon: faUserCircle, title: 'Character Development',  desc: 'Full character sheets, emotional arcs, design language, and expression libraries for every major character.' },
            { icon: faFilm,       title: 'Keyframe & Layout',      desc: 'Storyboards, key animation, and layout. Every shot is planned for maximum emotional and visual effect.' },
            { icon: faHeadphones, title: 'Post Production',        desc: 'Compositing, colour grading, sound design, voice integration, and final delivery in your required specs.' },
          ].map(({ icon, title, desc }, i) => (
            <div key={title} className={`cr-step py-8 px-6 bg-white border border-[rgba(17,17,17,0.08)] relative cr-reveal md:py-11 md:px-8${i > 0 ? ` cr-reveal-delay-${i}` : ''}`}>
              <div className="text-[1.6rem] text-[#D91A21] mb-6 w-6 h-6"><FontAwesomeIcon icon={icon} /></div>
              <h4 className="text-[1rem] font-[800] text-[#111] mb-3">{title}</h4>
              <p className="text-[0.88rem] text-[rgba(17,17,17,0.52)] leading-[1.65]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Visual Specialties ── */}
      <section id="cr-styles" className="py-8 pb-0 px-[5%] relative overflow-hidden md:py-[100px] md:px-[8%] xl:px-[10%]">
        <div className="max-w-[720px] mb-10 cr-reveal md:mb-16">
          <h2 className="font-[900] leading-[0.95] tracking-[-2px] text-[#111] mb-6" style={{ fontSize: 'clamp(2.4rem,5vw,5rem)' }}>Our Anime<br />Specialties.</h2>
          <p className="text-[1.05rem] text-[rgba(17,17,17,0.55)] leading-[1.7] max-w-[560px]">AnimHaus draws from a wide range of anime visual traditions — and combines them into something distinctly ours.</p>
        </div>
        <div className="grid grid-cols-1 gap-[2px] mt-8 sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
          {[
            { icon: faBolt,  title: 'Action & Shonen',       desc: 'High-energy fight choreography, dynamic camera work, and explosive visual effects.' },
            { icon: faHeart, title: 'Drama & Slice of Life',  desc: 'Quiet emotional moments, expressive character animation, and cinematic everyday storytelling.' },
            { icon: faMoon,  title: 'Dark & Psychological',   desc: 'Heavy themes, atmospheric visuals, and a visual style that unsettles as much as it mesmerises.' },
            { icon: faGlobe, title: 'Sci-Fi & Fantasy',       desc: 'World-scale environments, mechanical design, and speculative visual worldbuilding done right.' },
          ].map(({ icon, title, desc }, i) => (
            <div key={title} className={`p-9 px-7 border border-[rgba(17,17,17,0.08)] bg-white transition-[border-color,background] duration-300 hover:border-[rgba(217,26,33,0.3)] hover:bg-[rgba(217,26,33,0.03)] cr-reveal${i > 0 ? ` cr-reveal-delay-${i}` : ''}`}>
              <FontAwesomeIcon icon={icon} className="text-[1.4rem] text-[#D91A21] mb-5 block w-6 h-6" />
              <h4 className="text-[1rem] font-[800] text-[#111] mb-[10px]">{title}</h4>
              <p className="text-[0.87rem] text-[rgba(17,17,17,0.52)] leading-[1.6]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="cr-pricing" className="py-8 pb-0 px-[5%] relative overflow-hidden md:py-[100px] md:px-[8%] xl:px-[10%]">
        <div className="max-w-[720px] mb-10 cr-reveal md:mb-16">
          <h2 className="font-[900] leading-[0.95] tracking-[-2px] text-[#111] mb-6" style={{ fontSize: 'clamp(2.4rem,5vw,5rem)' }}>Production Tiers<br />for Every Scale.</h2>
          <p className="text-[1.05rem] text-[rgba(17,17,17,0.55)] leading-[1.7] max-w-[560px]">From a single promotional cut to a full original series — structured engagement tiers for every kind of project.</p>
        </div>
        <div className="grid grid-cols-1 gap-[2px] mt-8 md:grid-cols-3 md:mt-16">
          <div className="py-10 px-7 border border-[rgba(17,17,17,0.1)] bg-white flex flex-col relative transition-[border-color] duration-[400ms] hover:border-[rgba(17,17,17,0.2)] cr-reveal md:py-[52px] md:px-10">
            <span className="text-[0.65rem] tracking-[4px] uppercase text-[rgba(17,17,17,0.35)] font-[700] block mb-3">Tier 01</span>
            <h3 className="text-[2rem] font-[900] text-[#111] mb-2 tracking-[-1px]">Promo Cut</h3>
            <p className="text-[0.88rem] text-[rgba(17,17,17,0.5)] leading-[1.6] mb-7">For brands, creators, and musicians needing a single high-quality anime-style animated piece.</p>
            <div className="h-px bg-[rgba(17,17,17,0.08)] mb-7" />
            <ul className="list-none p-0 mb-7 flex-1 flex flex-col gap-3">
              {['Up to 2-minute animation','Character design (up to 3 characters)','Background art & environment','Sound design & SFX','Colour grading & compositing','Two revision rounds'].map(f => (
                <li key={f} className="flex items-start gap-3 text-[0.9rem] text-[rgba(17,17,17,0.75)] leading-[1.45]">
                  <FontAwesomeIcon icon={faCheck} className="text-[#D91A21] w-4 h-4 text-[0.75rem] mt-[3px] shrink-0" />{f}
                </li>
              ))}
            </ul>
            <p className="text-[0.85rem] italic text-[rgba(17,17,17,0.4)] leading-[1.6] mb-8">&ldquo;One polished cut — full AnimHaus cinematic quality.&rdquo;</p>
            <div className="mt-auto"><TransitionLink href="#cr-cta" className={btnSecondary}>Get Started</TransitionLink></div>
          </div>
          <div className="py-10 px-7 border border-[rgba(217,26,33,0.35)] bg-[rgba(217,26,33,0.04)] flex flex-col relative transition-[border-color] duration-[400ms] hover:border-[rgba(217,26,33,0.55)] cr-reveal cr-reveal-delay-1 md:py-[52px] md:px-10">
            <div className="absolute top-[-1px] left-[-1px] bg-[#D91A21] text-white text-[0.6rem] font-[800] tracking-[2px] uppercase py-[6px] px-[14px] rounded-[0_0_4px_0]">Most Popular</div>
            <span className="text-[0.65rem] tracking-[4px] uppercase text-[rgba(17,17,17,0.35)] font-[700] block mb-3">Tier 02</span>
            <h3 className="text-[2rem] font-[900] text-[#111] mb-2 tracking-[-1px]">OVA / Short</h3>
            <p className="text-[0.88rem] text-[rgba(17,17,17,0.5)] leading-[1.6] mb-7">For creators building a standalone animated short or OVA for streaming, festivals, or digital release.</p>
            <div className="h-px bg-[rgba(17,17,17,0.08)] mb-7" />
            <ul className="list-none p-0 mb-7 flex-1 flex flex-col gap-3">
              {['Up to 15-minute production','Full character roster & design','World & environment design','Storyboard & animatic approval','Voice-over integration support','Full post production','Festival-ready delivery'].map(f => (
                <li key={f} className="flex items-start gap-3 text-[0.9rem] text-[rgba(17,17,17,0.75)] leading-[1.45]">
                  <FontAwesomeIcon icon={faCheck} className="text-[#D91A21] w-4 h-4 text-[0.75rem] mt-[3px] shrink-0" />{f}
                </li>
              ))}
            </ul>
            <p className="text-[0.85rem] italic text-[rgba(17,17,17,0.4)] leading-[1.6] mb-8">&ldquo;A complete original anime production — built to last and ready to screen.&rdquo;</p>
            <div className="mt-auto"><TransitionLink href="#cr-cta" className={btnPrimary}>Get Started <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" /></TransitionLink></div>
          </div>
          <div className="py-10 px-7 border border-[rgba(17,17,17,0.1)] bg-white flex flex-col relative transition-[border-color] duration-[400ms] hover:border-[rgba(17,17,17,0.2)] cr-reveal cr-reveal-delay-2 md:py-[52px] md:px-10">
            <span className="text-[0.65rem] tracking-[4px] uppercase text-[rgba(17,17,17,0.35)] font-[700] block mb-3">Tier 03</span>
            <h3 className="text-[2rem] font-[900] text-[#111] mb-2 tracking-[-1px]">Series</h3>
            <p className="text-[0.88rem] text-[rgba(17,17,17,0.5)] leading-[1.6] mb-7">For studios and creators producing a multi-episode original anime series from pilot to season.</p>
            <div className="h-px bg-[rgba(17,17,17,0.08)] mb-7" />
            <ul className="list-none p-0 mb-7 flex-1 flex flex-col gap-3">
              {['Series bible & lore development','Full character & world design','OP/ED sequence production','Episode-by-episode production','Dedicated creative director','Full audio production pipeline','Distribution-ready delivery'].map(f => (
                <li key={f} className="flex items-start gap-3 text-[0.9rem] text-[rgba(17,17,17,0.75)] leading-[1.45]">
                  <FontAwesomeIcon icon={faCheck} className="text-[#D91A21] w-4 h-4 text-[0.75rem] mt-[3px] shrink-0" />{f}
                </li>
              ))}
            </ul>
            <p className="text-[0.85rem] italic text-[rgba(17,17,17,0.4)] leading-[1.6] mb-8">&ldquo;An original anime series — from concept to full season production.&rdquo;</p>
            <div className="mt-auto"><TransitionLink href="#cr-cta" className={btnSecondary}>Discuss Your Series</TransitionLink></div>
          </div>
        </div>
      </section>

      {/* ── Why AnimHaus ── */}
      <section id="cr-why" className="py-8 pb-0 px-[5%] relative overflow-hidden md:py-[100px] md:px-[8%] xl:px-[10%]">
        <div className="max-w-[720px] mb-10 cr-reveal md:mb-16">
          <h2 className="font-[900] leading-[0.95] tracking-[-2px] text-[#111] mb-6" style={{ fontSize: 'clamp(2.4rem,5vw,5rem)' }}>Why Creators<br />Choose AnimHaus.</h2>
        </div>
        <div className="grid grid-cols-1 gap-[2px] mt-16 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {[
            { icon: faHeart,            title: 'Emotion-First Direction',  desc: "We don't animate scenes — we animate feelings. Every production decision serves the emotional core." },
            { icon: faFilm,             title: 'Cinematic Pipeline',       desc: 'Our production standards are set at cinematic quality — not YouTube-ready, but festival-ready.' },
            { icon: faGlobeAsia,        title: 'Rooted in the Culture',    desc: 'AnimHaus grew up on the genre. We understand anime as fans first — and that shows in everything we make.' },
            { icon: faCogs,             title: 'Full In-House Pipeline',   desc: 'Script to screen under one roof. No fragmented outsourcing — just a single cohesive creative team.' },
            { icon: faDraftingCompass,  title: 'Original World-Building',  desc: "We don't just animate — we build universes. Every project gets a living, breathing creative world." },
            { icon: faHeadphonesAlt,    title: 'Sound & Music Direction',  desc: 'Anime lives in its sound. We treat audio as a core creative element, not an afterthought.' },
            { icon: faComments,         title: 'Creator-Collaborative',    desc: "Your vision is the priority. We amplify it — we don't replace it with our own aesthetic preferences." },
            { icon: faExpandArrowsAlt,  title: 'Scalable Production',      desc: "Whether it's a 90-second MV or a 12-episode series — our pipeline scales to match the ambition." },
          ].map(({ icon, title, desc }, i) => (
            <div key={title} className={`p-7 px-5 border border-[rgba(17,17,17,0.08)] bg-white transition-[border-color,background] duration-[400ms] hover:border-[rgba(217,26,33,0.3)] hover:bg-[rgba(217,26,33,0.03)] cr-reveal md:p-10 md:px-7${i % 4 !== 0 ? ` cr-reveal-delay-${i % 4}` : ''}`}>
              <FontAwesomeIcon icon={icon} className="text-[1.3rem] w-6 h-6 text-[#D91A21] mb-5 block" />
              <h4 className="text-[0.95rem] font-[800] text-[#111] mb-[10px]">{title}</h4>
              <p className="text-[0.87rem] text-[rgba(17,17,17,0.5)] leading-[1.6]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-[rgba(17,17,17,0.1)]" />

      {/* ── CTA ── */}
      <section id="cr-cta" className="text-center py-20 px-[5%] border-t border-[rgba(217,26,33,0.15)] md:py-[120px] md:px-[8%] xl:py-[140px] xl:px-[10%]" style={{ background: 'rgba(217,26,33,0.05)' }}>
        <div className="cr-reveal">
          <span className="text-[0.65rem] tracking-[5px] uppercase text-[#D91A21] font-[700] flex justify-center mb-4">Ready to Create?</span>
          <h2 className="font-[900] text-[#111] tracking-[-2px] leading-none mb-6" style={{ fontSize: 'clamp(2.2rem,5vw,5rem)' }}>Your Story<br />Deserves to Move.</h2>
          <p className="text-[1.05rem] text-[rgba(17,17,17,0.5)] max-w-[500px] mx-auto mb-12 leading-[1.7]">Tell us about your anime project and we&apos;ll come back with a production brief and creative direction within 24 hours.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="mailto:appleboy285@gmail.com" className={btnPrimary}>Email Us <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" /></a>
            <TransitionLink href="/#contact" className={btnSecondary}>Full Enquiry Form</TransitionLink>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
