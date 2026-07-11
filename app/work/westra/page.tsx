import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArtworkViewer from '@/components/ArtworkViewer';
import HeadingRevealInit from '@/components/HeadingRevealInit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'Westra Wear | Case Study',
  description: 'Case study: AnimHaus designed and delivered a complete web experience for Westra Wear — a D2C fashion ecommerce brand with live-selling and social commerce features.',
  alternates: { canonical: 'https://animhaus.com/work/westra' },
  openGraph: {
    title: 'Westra Wear | AnimHaus Studios',
    description: 'A social-first D2C fashion ecommerce platform with live-selling and WhatsApp-assisted checkout.',
    url: 'https://animhaus.com/work/westra',
    images: [{ url: 'https://pub-936a2a79cb9b473fabc46e4ad35a3e2e.r2.dev/westra/westra.webp' }],
    type: 'article',
  },
};

export default function WestraPage() {
  return (
    <>
      <Navbar />
      <HeadingRevealInit />
      <ArtworkViewer projectId="westra" objectPosition="center 30%" />

      <section className="pt-5 px-[5%] pb-[60px] md:px-[8%] md:pb-20 lg:px-[10%] lg:pb-[100px]">
        <div className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
          <h2 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">Case Study</h2>
          <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
            <p>Westra Wear is a D2C fashion brand that sells across social media, live streams, and WhatsApp. They needed a web presence that could serve as both a catalogue and a conversion engine — bridging their social-first audience with a proper online shop.</p>
            <p>Our task was to build a complete ecommerce experience that felt native to how Westra&apos;s customers already shop: visually, impulsively, and through trusted social channels.</p>
          </div>
        </div>

        <div className="border-t border-[#e8e8e8]">
          <article className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
            <h3 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">The Client</h3>
            <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
              <p>Westra Wear is a direct-to-consumer fashion brand operating primarily through Instagram, Facebook live selling, and WhatsApp commerce. Their product range spans Co-ord Sets, Kaftans, Salwars, Kurtis, Tops, Bottoms, Shirts, and Frocks — all targeted at a fashion-conscious, mobile-first audience.</p>
            </div>
          </article>

          <article className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
            <h3 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">The Problem</h3>
            <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
              <p>Westra&apos;s existing digital footprint was entirely social — no unified product catalogue, no SEO presence, and no single conversion point outside of DMs and WhatsApp chats.</p>
              <p>Key friction points included:</p>
              <ul>
                <li>No central product catalogue for browsing outside of social media</li>
                <li>Live-sale products had no persistent digital home after the stream ended</li>
                <li>WhatsApp enquiries were unstructured and required manual follow-up</li>
                <li>Brand discovery relied entirely on algorithm-dependent social reach</li>
                <li>No SEO foundation for organic product or brand discovery</li>
              </ul>
            </div>
          </article>

          <article className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
            <h3 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">Project Goals</h3>
            <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
              <h4>1. Build a Central Product Home</h4>
              <p>Create a unified online shop where all products are discoverable, categorised, and purchasable beyond the live stream window.</p>
              <h4>2. Extend the Live-Selling Experience</h4>
              <p>Give live-sale products a landing page that keeps the energy and urgency of the live stream alive for post-stream buyers.</p>
              <h4>3. Streamline WhatsApp Commerce</h4>
              <p>Build structured WhatsApp-assisted checkout pathways that reduce manual work and speed up order completion.</p>
              <h4>4. Establish SEO Foundation</h4>
              <p>Create a search-visible product and brand presence that grows Westra&apos;s organic reach beyond social media dependency.</p>
              <h4>5. Reflect the Brand Aesthetic</h4>
              <p>The website needed to feel as fashion-forward and visually rich as Westra&apos;s social media — not a generic template.</p>
            </div>
          </article>

          <article className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
            <h3 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">Strategy</h3>
            <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
              <p>We built the Westra platform as a social-native ecommerce experience — one that felt natural to a customer who discovered the brand on Instagram but needed a more structured path to complete their purchase.</p>
              <p>The platform was structured to function as:</p>
              <ul>
                <li>A visually-led product catalogue organised by category and collection</li>
                <li>A live-sales hub with dedicated post-stream product landing pages</li>
                <li>A WhatsApp-integrated checkout assistant for assisted buying</li>
                <li>A brand story and social proof environment that builds purchase confidence</li>
                <li>An SEO foundation for long-term organic product discovery</li>
              </ul>
            </div>
          </article>

          <article className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
            <h3 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">Design Approach</h3>
            <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
              <h4>Social-First Visual Language</h4>
              <p>Fashion-editorial photography, bold product cards, and a layout language borrowed from Instagram grid aesthetics — comfortable and familiar for Westra&apos;s existing audience.</p>
              <h4>Product Discovery Flow</h4>
              <p>Categories, collections, and sale sections are structured for both browsers and buyers — with clear product imagery, pricing, and purchase pathways.</p>
              <h4>WhatsApp-Led Conversion</h4>
              <p>Every product page includes a WhatsApp enquiry pathway as the primary conversion mechanism — matching how Westra&apos;s customers already prefer to transact.</p>
            </div>
          </article>

          <article className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
            <h3 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">Technical Highlights</h3>
            <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
              <ul>
                <li>Fully responsive ecommerce layout optimised for mobile-first fashion browsing</li>
                <li>WhatsApp checkout integration with pre-filled product enquiry messages</li>
                <li>Live-sales landing page framework for post-stream product persistence</li>
                <li>Product SEO metadata for category and brand discoverability on Google</li>
                <li>Performance-optimised image delivery for fast product browsing</li>
              </ul>
            </div>
          </article>

          <article className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
            <h3 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">Business Impact</h3>
            <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
              <p>Westra now has a unified online shop that extends their live-selling reach, streamlines WhatsApp commerce, and gives their growing audience a permanent, browsable product home beyond the live stream window.</p>
              <div className="flex flex-wrap gap-[10px] mt-3">
                <a href="https://westra.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 justify-center border border-[#111] px-[14px] py-[10px] text-[#111] no-underline uppercase text-[0.72rem] tracking-[0.08em] transition-all duration-[250ms] hover:bg-[#111] hover:text-white">Visit Westra <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                <a href="https://westra.in/collections" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 justify-center border border-[#111] px-[14px] py-[10px] text-[#111] no-underline uppercase text-[0.72rem] tracking-[0.08em] transition-all duration-[250ms] hover:bg-[#111] hover:text-white">Browse Collections <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </>
  );
}
