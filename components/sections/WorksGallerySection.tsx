import TransitionLink from '@/components/TransitionLink';
import Image from 'next/image';

const ITEMS = [
  { href: '/work/shurer-dhara', src: 'https://cdn.shurerdhara.com/MFD.webp',                                   alt: 'Shurer Dhara', label: 'Shurer Dhara', cls: 'pg-item-1' },
  { href: '/work/awakynn',      src: 'https://pub-936a2a79cb9b473fabc46e4ad35a3e2e.r2.dev/awakynn.avif',        alt: 'Awakynn',      label: 'Awakynn',      cls: 'pg-item-2' },
  { href: '/work/kdiae',        src: 'https://pub-936a2a79cb9b473fabc46e4ad35a3e2e.r2.dev/kdiae/kdiae.avif',    alt: 'KDIAE',        label: 'KDIAE',        cls: 'pg-item-3' },
  { href: '/work/westra',       src: 'https://pub-936a2a79cb9b473fabc46e4ad35a3e2e.r2.dev/westra/westra.avif',  alt: 'Westra',       label: 'Westra',       cls: 'pg-item-4' },
] as const;

export default function WorksGallerySection() {
  return (
    <section
      id="works"
      className="relative bg-white text-[#111] [overflow:clip]"
      style={{ padding: "0 3% 80px" }}
    >
      {/* grain overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-[0.22] mix-blend-multiply animate-[works-grain_3.2s_steps(3,end)_infinite]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' seed='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }}
      />

      {/* sticky header with background video */}
      <div className="md:sticky top-0 h-auto md:h-screen flex flex-col items-center justify-center text-center overflow-hidden z-[1] px-[6%] py-16 md:py-0 md:px-[6%]">
        {/* background video */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            style={{ opacity: 0.08, filter: "grayscale(1) contrast(0.9)" }}
          >
            <source src="https://pub-936a2a79cb9b473fabc46e4ad35a3e2e.r2.dev/wavebg.mp4" type="video/mp4" />
          </video>
        </div>

        <h2
          className="gh-title relative z-[1] m-0 font-black leading-[0.93] tracking-[-0.03em] uppercase flex flex-col items-center text-[#111] pointer-events-none"
          style={{ fontSize: "clamp(1.9rem,7.5vw,7.5rem)" }}
        >
          <span className="gh-line block overflow-hidden"><span className="gh-line-inner block">ARCHIVE&nbsp;OF</span></span>
          <span className="gh-line block overflow-hidden"><span className="gh-line-inner block">THE&nbsp;SELECTED&nbsp;WORKS</span></span>
          <span className="gh-line block overflow-hidden"><span className="gh-line-inner block">BY&nbsp;ANIMHAUS</span></span>
        </h2>
        <p className="gh-sub-inner relative z-[1] mt-7 text-[0.82rem] text-[rgba(17,17,17,0.38)] tracking-[1px] overflow-hidden pointer-events-none">
          Visual storytelling through every frame
        </p>
      </div>

      {/* gallery grid */}
      <div
        className="grid gap-y-[60px] relative z-[2] bg-transparent grid-cols-1 md:grid-cols-2 md:gap-y-[120px]"
        style={{
          justifyContent: "space-between",
          padding: "80px 0 100px",
        }}
      >
        {ITEMS.map(({ href, src, alt, label, cls }, idx) => (
          <div
            key={href}
            className={`pg-item group ${cls} relative overflow-hidden bg-[#e8e8e8] aspect-[4/5] md:aspect-[16/10] md:w-[90%] ${idx % 2 === 1 ? "md:mt-[660px] md:ml-auto" : ""}`}
          >
            <TransitionLink href={href} aria-label={`View ${label}`} className="absolute inset-0 z-[5]" />
            <div className="pg-img-wrap absolute inset-0 overflow-hidden">
              <Image
                src={src}
                alt={alt}
                loading="lazy"
                width={800}
                height={600}
                quality={100}
                sizes="(max-width: 767px) 100vw, 50vw"
                className="w-full object-cover block will-change-transform transition-transform duration-100 ease-linear"
                style={{ height: "130%", top: "-15%", position: "relative", transformOrigin: "center top" }}
              />
            </div>
            <div
              className="pg-item-label absolute bottom-0 left-0 right-0 z-[2] pt-8 px-5 pb-5 opacity-0 translate-y-[6px] group-hover:opacity-100 group-hover:translate-y-0 transition-[opacity,transform] duration-[350ms] ease-in-out max-[767px]:opacity-100 max-[767px]:translate-y-0"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)" }}
            >
              <span className="text-[0.82rem] font-bold tracking-[2px] uppercase text-[rgba(255,255,255,0.85)]">{label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
