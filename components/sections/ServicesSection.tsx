'use client';
import TransitionLink from '@/components/TransitionLink';

const SERVICES = [
  { href: '/cartoons',          title: 'Cartoons',          desc: 'Original character-driven stories crafted for series, shorts, and branded entertainment.',                                                num: '01' },
  { href: '/anime',             title: 'Anime',             desc: 'High-energy anime direction, compositing, and cinematic motion language with emotional impact.',                                           num: '02' },
  { href: '/manga',             title: 'Manga',             desc: 'From concept arcs to panel storytelling, we build memorable worlds with visual rhythm.',                                                   num: '03' },
  { href: '/comics',            title: 'Comics',            desc: 'Stylized sequential art pipelines for indie books, web comics, and long-form universes.',                                                   num: '04' },
  { href: '/games',             title: 'Games',             desc: 'Gameplay-ready assets, character systems, and environments tuned for immersive interaction.',                                               num: '05' },
  { href: '/web-systems',       title: 'Web Systems',       desc: 'Robust web infrastructure, automation, and product-focused engineering for scale.',                                                        num: '06' },
  { href: '/digital-marketing', title: 'Digital Marketing', desc: 'Data-driven social media management, content creation, and ad campaigns to grow your brand across every platform.',                        num: '07' },
] as const;

// top/z-index/padding/minHeight are all handled by CSS nth-child rules in globals.css
// Only per-card color values live here as inline styles (CSS vars can't target nth-child easily in Tailwind)
const CARD_STYLES = [
  { bg: 'var(--service-red-1)', titleColor: '#fff7f7',  bodyColor: 'rgba(255,244,244,0.9)',  indexColor: 'rgba(255,238,238,0.95)' },
  { bg: 'var(--service-red-2)', titleColor: '#fff7f7',  bodyColor: 'rgba(255,244,244,0.9)',  indexColor: 'rgba(255,238,238,0.95)' },
  { bg: 'var(--service-red-3)', titleColor: '#fff7f7',  bodyColor: 'rgba(255,244,244,0.9)',  indexColor: 'rgba(255,238,238,0.95)' },
  { bg: 'var(--service-red-4)', titleColor: '#fff7f7',  bodyColor: 'rgba(72,19,21,0.88)',    indexColor: 'rgba(72,19,21,0.94)'    },
  { bg: 'var(--service-red-5)', titleColor: '#511416',  bodyColor: 'rgba(81,20,22,0.88)',    indexColor: 'rgba(81,20,22,0.94)'    },
  { bg: 'var(--service-red-6)', titleColor: '#3d0f11',  bodyColor: 'rgba(61,15,17,0.88)',    indexColor: 'rgba(61,15,17,0.94)'    },
  { bg: 'var(--service-red-7)', titleColor: '#2e0a0b',  bodyColor: 'rgba(46,10,11,0.85)',    indexColor: 'rgba(46,10,11,0.9)'     },
] as const;

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative px-[5%] py-20 md:px-[8%] md:py-[50px] lg:px-[10%] lg:py-20"
    >
      <h2 className="mb-20 font-black" style={{ fontSize: 'clamp(1.8rem,5vw,2.5rem)' }}>SERVICES</h2>

      {/* services-container: flex column, no gap — cards have mb-3 and use sticky stacking */}
      <div className="services-container flex flex-col pb-6 md:pb-[30px]">
        {SERVICES.map(({ href, title, desc, num }, i) => {
          const s = CARD_STYLES[i];
          return (
            <TransitionLink
              href={href}
              key={href}
              // top/z-index come entirely from CSS nth-child in globals.css — no inline override
              className="service-row sticky flex flex-col justify-between no-underline cursor-pointer mb-3 rounded-3xl border-none"
              style={{
                background: s.bg,
                color: s.titleColor,
              }}
            >
              <div className="service-content max-w-[760px]">
                <h3
                  className="uppercase font-black"
                  style={{ fontSize: 'clamp(3rem,5vw,5rem)', color: s.titleColor }}
                >
                  {title}
                </h3>
                <p
                  className="mt-[14px] leading-[1.45] max-w-[42ch]"
                  style={{ fontSize: 'clamp(1.1rem,2vw,1.35rem)', color: s.bodyColor }}
                >
                  {desc}
                </p>
              </div>
              <span
                className="self-end font-bold"
                style={{ fontSize: 'clamp(0.9rem,3vw,1.2rem)', color: s.indexColor }}
              >
                {num}
              </span>
            </TransitionLink>
          );
        })}
      </div>
    </section>
  );
}
