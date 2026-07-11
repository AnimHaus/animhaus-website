'use client';
import TransitionLink from '@/components/TransitionLink';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCreativeEffects } from '@/components/useCreativeEffects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faBolt,
  faBook,
  faCheck,
  faCogs,
  faComments,
  faExpandArrowsAlt,
  faFileAlt,
  faFilm,
  faFistRaised,
  faFont,
  faGlobe,
  faHeart,
  faImage,
  faPaintBrush,
  faPen,
  faPenNib,
  faPencilAlt,
  faStar,
  faVectorPolygon,
} from '@fortawesome/free-solid-svg-icons';
import {
  faSketch,
} from '@fortawesome/free-brands-svg-icons';

const btnPrimary = 'inline-flex items-center gap-[10px] bg-[#D91A21] text-white px-8 py-4 text-[0.8rem] font-extrabold tracking-[2px] uppercase no-underline transition-[background,transform] duration-300 rounded-[2px] hover:bg-[#b81319] hover:-translate-y-0.5';
const btnSecondary = 'inline-flex items-center gap-[10px] bg-transparent text-[#111111] border border-black/25 px-8 py-[15px] text-[0.8rem] font-bold tracking-[2px] uppercase no-underline transition-[border-color,background,transform] duration-300 rounded-[2px] hover:border-black hover:bg-black/5 hover:-translate-y-0.5';
const sectionCls = 'px-[5%] py-16 relative overflow-hidden md:px-[8%] md:py-[100px] xl:px-[10%] xl:py-[140px]';
const labelCls = 'text-[0.65rem] tracking-[5px] uppercase text-[#D91A21] font-bold block mb-4';
const h2Cls = "text-[clamp(2.4rem,5vw,5rem)] [font-family:'Plus_Jakarta_Sans',sans-serif] font-black leading-[0.95] tracking-[-2px] text-[#111111] mb-6";
const sectionHeaderCls = 'max-w-[720px] mb-10 md:mb-16 cr-reveal';
const headerParaCls = 'text-[1.05rem] text-black/55 leading-[1.7] max-w-[560px]';

export default function ComicsClient() {
  useCreativeEffects();

  return (
    <div className="bg-[#f9f9f9] text-[#111111]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context':'https://schema.org','@type':'Service', name:'Comics & Graphic Novel Production', provider:{name:'AnimHaus Studios'}, url:'https://animhaus.com/comics' }) }} />
      <Navbar logoSrc="/animhaus-logotype.png" transparentOnScroll />

      {/* ── HERO ── */}
      <section id="cr-hero" className="min-h-screen flex flex-col justify-center px-[5%] pt-[120px] pb-[10vh] bg-[#f9f9f9] relative overflow-clip md:px-[8%] md:pt-[140px] xl:px-[10%] xl:pt-[160px]">
        <div className="absolute top-[-20%] right-[-10%] w-[60vmax] h-[60vmax] bg-[radial-gradient(circle,rgba(217,26,33,0.1)_0%,transparent_65%)] pointer-events-none z-0" />
        <div className="absolute bottom-[10%] left-[-15%] w-[50vmax] h-[50vmax] bg-[radial-gradient(circle,rgba(217,26,33,0.05)_0%,transparent_65%)] pointer-events-none z-0" />
        <div className="relative z-[1] max-w-[min(960px,100%)] w-full">
          <p className="text-[0.65rem] tracking-[6px] uppercase text-[#D91A21] font-bold mb-7 block">Comics &amp; Graphic Novels — AnimHaus</p>
          <h1 className="[font-family:'Plus_Jakarta_Sans',sans-serif] text-[clamp(2.6rem,6.5vw,5rem)] font-black leading-none tracking-[-2px] text-[#111111] mb-8 md:tracking-[-3px] md:leading-[0.95] xl:text-[clamp(4rem,6.5vw,5rem)] xl:tracking-[-4px] xl:leading-[0.92]">Worlds Between<br /><em>the Panels.</em></h1>
          <p className="text-[clamp(1rem,1.8vw,1.2rem)] text-black/55 leading-[1.75] max-w-[560px] mb-12">AnimHaus creates original comics and graphic novels — full-colour superhero books, literary indie narratives, and illustrated stories that earn their place on any shelf or screen.</p>
          <div className="flex gap-4 flex-wrap">
            <TransitionLink href="#cr-pricing" className={btnPrimary}>View Packages <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" /></TransitionLink>
            <TransitionLink href="#cr-cta" className={btnSecondary}>Start a Project</TransitionLink>
          </div>
        </div>
        <div className="flex flex-wrap gap-7 mt-12 mx-[-5%] px-[5%] pt-8 relative z-[1] md:mx-[-8%] md:px-[8%] xl:mx-[-10%] xl:px-[10%]">
          {[
            { strong: 'Original',    span: 'Every Story'   },
            { strong: 'Full Colour', span: 'Illustration'  },
            { strong: 'Print &',     span: 'Digital Ready' },
            { strong: 'India-HQ',    span: 'Global Reach'  },
          ].map(({ strong, span }) => (
            <div key={strong} className="flex flex-col gap-1">
              <strong className="text-[clamp(1.3rem,3vw,1.8rem)] font-black [font-family:'Plus_Jakarta_Sans',sans-serif] text-[#111111]">{strong}</strong>
              <span className="text-[0.65rem] tracking-[3px] uppercase text-black/40">{span}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT WE PRODUCE ── */}
      <section id="cr-create" className='px-[5%] py-16 !pt-0 relative overflow-hidden md:px-[8%] md:py-[100px] xl:px-[10%] xl:py-[140px]'>
        <div className={sectionHeaderCls}>
          <h2 className={h2Cls}>What We<br />Produce.</h2>
          <p className={headerParaCls}>Every book we make is crafted with the intention of lasting — visually ambitious, narratively sharp, and built for real readers.</p>
        </div>
        <div className="grid grid-cols-1 gap-0.5 mt-8 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {[
            { icon:faBook,      title:'Graphic Novels',            desc:'Complete standalone narratives in full-colour illustrated form — literary, experimental, or genre-driven storytelling.',       outcome:'↑ Narrative Prestige'   },
            { icon:faFistRaised,title:'Superhero & Action Books',   desc:'Full-colour superhero comics with dynamic panel work, multi-character casts, and high-octane visual direction.',             outcome:'↑ Action Impact'        },
            { icon:faPenNib,    title:'Indie & Art Comics',         desc:'Creator-driven indie books with experimental layouts, unique visual voices, and literary depth.',                             outcome:'↑ Cultural Credibility' },
            { icon:faGlobe,     title:'Webcomics',                  desc:'Episodic, platform-optimised web comics designed for regular serialisation and growing digital audiences.',                   outcome:'↑ Digital Audience'     },
            { icon:faImage,     title:'Cover Art & Variant Covers', desc:'Iconic, shelf-stopping cover illustrations — main covers, variant editions, and promotional key visuals.',                   outcome:'↑ Retail Visibility'    },
            { icon:faStar,      title:'Brand & IP Comics',          desc:'Comics as marketing — brand mascot stories, universe expansions, and IP-driven sequential narratives.',                      outcome:'↑ Brand Engagement'     },
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

      {/* ── PRODUCTION PIPELINE ── */}
      <section id="cr-process" className={sectionCls}>
        <div className={sectionHeaderCls}>
          <h2 className={h2Cls}>From Script<br />to Shelf.</h2>
          <p className={headerParaCls}>Our comics pipeline runs from first idea to final print-ready file with precision and creative consistency at every stage.</p>
        </div>
        <div className="grid grid-cols-1 gap-0.5 mt-8 md:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {[
            { icon:faFileAlt,  title:'Script & Issue Plan',     desc:'Full issue scripts, story arc planning, and panel-by-panel breakdowns before a single line is drawn.' },
            { icon:faPencilAlt,title:'Pencils & Layouts',       desc:'Tight pencil artwork and panel composition — every page laid out for visual flow and reader impact.'   },
            { icon:faPen,      title:'Inks & Colour',           desc:'Clean inks, full-colour illustration, and visual effects applied with precision for print and screen.'  },
            { icon:faFont,     title:'Lettering & Final Output',desc:'Professional lettering, balloon placement, SFX text, and final delivery in print-ready and digital formats.' },
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
      <section id="cr-styles" className={sectionCls}>
        <div className={sectionHeaderCls}>
          <span className={labelCls}>Art Styles</span>
          <h2 className={h2Cls}>Visual Styles<br />We Master.</h2>
          <p className={headerParaCls}>From classic superhero blockbuster to painterly literary art — we work across the full comics visual spectrum.</p>
        </div>
        <div className="grid grid-cols-1 gap-0.5 mt-8 sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
          {[
            { icon:faBolt,          title:'Superhero Blockbuster', desc:'Dynamic anatomy, dramatic foreshortening, bold colour, and cinematic action sequences.'                                    },
            { icon:faPaintBrush,    title:'Literary & Painterly',  desc:'Textured, expressive illustration with fine-art sensibility for graphic novels and prestige titles.'                        },
            { icon:faSketch,        title:'Indie & Underground',   desc:'Raw, distinctive visual voices — experimental layouts, alternative aesthetics, and artistic individuality.'                  },
            { icon:faVectorPolygon, title:'Clean Digital & Flat',  desc:'Crisp, modern digital illustration with clean linework and vibrant flat colour for web and brand comics.'                   },
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
      <section id="cr-pricing" className={sectionCls}>
        <div className={sectionHeaderCls}>
          <span className={labelCls}>Service Tiers</span>
          <h2 className={h2Cls}>Built for Every<br />Comics Creator.</h2>
          <p className={headerParaCls}>Three production tiers built around the scale and ambition of your comics project.</p>
        </div>
        <div className="grid grid-cols-1 gap-0.5 mt-8 md:grid-cols-3 md:mt-16">
          <div className="py-10 px-7 md:py-[52px] md:px-10 border border-black/10 bg-white flex flex-col relative transition-[border-color] duration-[400ms] hover:border-black/20 cr-reveal">
            <span className="text-[0.65rem] tracking-[4px] uppercase text-black/35 font-bold block mb-3">Tier 01</span>
            <h3 className="[font-family:'Plus_Jakarta_Sans',sans-serif] text-[2rem] font-black text-[#111111] mb-2 tracking-[-1px]">Single Issue</h3>
            <p className="text-[0.88rem] text-black/50 leading-[1.6] mb-7">For independent creators launching a debut issue, one-shot, or short-run comic.</p>
            <div className="h-px bg-black/[0.08] mb-7" />
            <ul className="list-none p-0 mb-7 flex-1 flex flex-col gap-3">
              {['Up to 24 pages','Full-colour illustration','Character design (up to 4)','Cover art','Lettering & SFX','Print & digital delivery'].map(f => (
                <li key={f} className="flex items-start gap-3 text-[0.9rem] text-black/75 leading-[1.45]">
                  <FontAwesomeIcon icon={faCheck} className="h-3 w-3 text-[#D91A21] mt-[3px] shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <p className="text-[0.85rem] italic text-black/40 leading-[1.6] mb-8">&ldquo;One issue — shelf-ready and story-complete.&rdquo;</p>
            <div className="mt-auto"><TransitionLink href="#cr-cta" className={btnSecondary}>Get Started</TransitionLink></div>
          </div>
          <div className="py-10 px-7 md:py-[52px] md:px-10 border border-[rgba(217,26,33,0.35)] bg-[rgba(217,26,33,0.04)] flex flex-col relative transition-[border-color] duration-[400ms] hover:border-black/20 cr-reveal cr-reveal-delay-1">
            <div className="absolute top-[-1px] left-[-1px] bg-[#D91A21] text-white text-[0.6rem] font-extrabold tracking-[2px] uppercase py-[6px] px-[14px] rounded-[0_0_4px_0]">Most Popular</div>
            <span className="text-[0.65rem] tracking-[4px] uppercase text-black/35 font-bold block mb-3">Tier 02</span>
            <h3 className="[font-family:'Plus_Jakarta_Sans',sans-serif] text-[2rem] font-black text-[#111111] mb-2 tracking-[-1px]">Graphic Novel</h3>
            <p className="text-[0.88rem] text-black/50 leading-[1.6] mb-7">For creators building a complete standalone graphic novel for publication, festivals, or digital release.</p>
            <div className="h-px bg-black/[0.08] mb-7" />
            <ul className="list-none p-0 mb-7 flex-1 flex flex-col gap-3">
              {['Up to 120 pages','Full character & world design','Complete story arc production','Cover + interior illustration','Lettering & balloon design','Festival & publication ready'].map(f => (
                <li key={f} className="flex items-start gap-3 text-[0.9rem] text-black/75 leading-[1.45]">
                  <FontAwesomeIcon icon={faCheck} className="h-3 w-3 text-[#D91A21] mt-[3px] shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <p className="text-[0.85rem] italic text-black/40 leading-[1.6] mb-8">&ldquo;A complete graphic novel — made to read, built to last.&rdquo;</p>
            <div className="mt-auto"><TransitionLink href="#cr-cta" className={btnPrimary}>Get Started <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" /></TransitionLink></div>
          </div>
          <div className="py-10 px-7 md:py-[52px] md:px-10 border border-black/10 bg-white flex flex-col relative transition-[border-color] duration-[400ms] hover:border-black/20 cr-reveal cr-reveal-delay-2">
            <span className="text-[0.65rem] tracking-[4px] uppercase text-black/35 font-bold block mb-3">Tier 03</span>
            <h3 className="[font-family:'Plus_Jakarta_Sans',sans-serif] text-[2rem] font-black text-[#111111] mb-2 tracking-[-1px]">Universe</h3>
            <p className="text-[0.88rem] text-black/50 leading-[1.6] mb-7">For IP owners and studios building multi-title comic universes, ongoing series, and shared-world storytelling.</p>
            <div className="h-px bg-black/[0.08] mb-7" />
            <ul className="list-none p-0 mb-7 flex-1 flex flex-col gap-3">
              {['Universe bible & IP development','Multi-title production pipeline','Shared character & world design','Dedicated art director','Ongoing serialisation support','Publishing strategy consultation'].map(f => (
                <li key={f} className="flex items-start gap-3 text-[0.9rem] text-black/75 leading-[1.45]">
                  <FontAwesomeIcon icon={faCheck} className="h-3 w-3 text-[#D91A21] mt-[3px] shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <p className="text-[0.85rem] italic text-black/40 leading-[1.6] mb-8">&ldquo;Your comics universe — from IP concept to ongoing multi-title production.&rdquo;</p>
            <div className="mt-auto"><TransitionLink href="#cr-cta" className={btnSecondary}>Discuss Your Universe</TransitionLink></div>
          </div>
        </div>
      </section>

      {/* ── WHY ANIMHAUS ── */}
      <section id="cr-why" className={sectionCls}>
        <div className={sectionHeaderCls}>
          <span className={labelCls}>Our Differentiators</span>
          <h2 className={h2Cls}>Why Creators<br />Choose AnimHaus.</h2>
        </div>
        <div className="grid grid-cols-1 gap-0.5 mt-16 min-[480px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {[
            { icon:faHeart,          title:'Story-Led Visuals',          desc:'Every panel exists to serve the story. Our artists are storytellers first, illustrators second.'                       },
            { icon:faFilm,           title:'Cinematic Composition',       desc:'Page layouts inspired by cinematic visual language — tension, pacing, and impact baked into every spread.'              },
            { icon:faBook,           title:'Genre Fluency',               desc:'From superhero blockbuster to literary indie — we work across every corner of the comics medium.'                       },
            { icon:faCogs,           title:'Full In-House Pipeline',      desc:'Script to print under one roof. Consistent creative vision from page one to the final delivered file.'                  },
            { icon:faPaintBrush,     title:'Colour Mastery',              desc:'Full-colour illustration done with intent — colour as narrative tool, not decoration.'                                  },
            { icon:faFont,           title:'Professional Lettering',      desc:'Clean, readable, expressive balloon lettering and SFX that complete the visual experience.'                             },
            { icon:faComments,       title:'Creator-First Collaboration', desc:'Your IP, your story, your vision. We build the visual world around what you want to say.'                              },
            { icon:faExpandArrowsAlt,title:'Scale-Ready Output',          desc:"From a debut issue to an ongoing universe — our production pipeline grows with your ambition."                          },
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
          <span className={labelCls}>Ready to Create?</span>
          <h2 className="[font-family:'Plus_Jakarta_Sans',sans-serif] text-[clamp(2.2rem,5vw,5rem)] font-black text-[#111111] tracking-[-2px] leading-none mb-6">Your Story<br />Deserves Great Panels.</h2>
          <p className="text-[1.05rem] text-black/50 max-w-[500px] mx-auto mb-12 leading-[1.7]">Tell us about your comics project and we&apos;ll come back with a production brief within 24 hours.</p>
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
