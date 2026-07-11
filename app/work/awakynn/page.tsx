import type { Metadata } from 'next';
import TransitionLink from '@/components/TransitionLink';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArtworkViewer from '@/components/ArtworkViewer';
import HeadingRevealInit from '@/components/HeadingRevealInit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'Awakynn | Case Study',
  description: 'Awakynn case study by AnimHaus Studios. A calm, ritual-led digital home for a modern yoga, meditation, and Ayurveda wellness practice.',
  alternates: { canonical: 'https://animhaus.com/work/awakynn' },
  openGraph: {
    title: 'Awakynn | AnimHaus Studios',
    description: 'Case study: AnimHaus built Awakynn\'s digital home for its yoga, meditation, and Ayurveda wellness practice.',
    url: 'https://animhaus.com/work/awakynn',
    images: [{ url: 'https://cdn.awakynn.com/hero1.avif' }],
    type: 'article',
  },
};

export default function AwakynnPage() {
  return (
    <>
      <Navbar />
      <HeadingRevealInit />
      <ArtworkViewer projectId="awakynn" />

      <section className="pt-5 px-[5%] pb-[60px] md:px-[8%] md:pb-20 lg:px-[10%] lg:pb-[100px]">
        <div className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
          <h2 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">Case Study</h2>
          <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
            <p>Awakynn needed a digital home that could carry the same stillness and intention as the practice itself. The brand spans yoga, breathwork, meditation, and Ayurvedic guidance, led by a single instructor whose credibility and care are central to why students stay.</p>
            <p>Our mandate was to translate a deeply personal, ritual-based practice into a calm, credible web experience that could support discovery, trust-building, and bookings — without losing the quiet warmth of the brand.</p>
          </div>
        </div>

        <div className="border-t border-[#e8e8e8]">
          <article className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
            <h3 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">The Client</h3>
            <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
              <p>Awakynn is a wellness practice built around Yoga (Asana &amp; Pranayama), guided meditation, and personalised Ayurvedic diet consulting, led by instructor Monalisa Manna. The brand also sits at the centre of a small constellation of sister ventures spanning conscious food, artisan chocolate, and ritual skincare — positioning Awakynn as a way of life rather than a single studio.</p>
            </div>
          </article>

          <article className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
            <h3 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">The Problem</h3>
            <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
              <p>Wellness seekers decide with feeling first and logic second. Before the redesign, Awakynn had no digital space that reflected the depth of the practice, the credibility of its instructor, or the range of its offerings in one coherent, trustworthy journey.</p>
              <p>Key friction points included:</p>
              <ul>
                <li>No structured way to browse offerings, pricing, or schedules online.</li>
                <li>Instructor credentials and lineage were not visibly communicated.</li>
                <li>Testimonials and transformation stories lived offline, not on the web.</li>
                <li>Sister brands (GrabFabs, Festiq, Éstrá Ritual) had no shared home to reinforce the wider ecosystem.</li>
                <li>No clear day-in-the-life narrative connecting practice, food, and ritual.</li>
              </ul>
            </div>
          </article>

          <article className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
            <h3 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">Project Goals</h3>
            <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
              <h4>1. Establish Instructor Trust</h4>
              <p>Give Monalisa Manna&apos;s training, certifications, and teaching philosophy visible, credible presence on the homepage.</p>
              <h4>2. Present Offerings Clearly</h4>
              <p>Turn yoga, meditation, diet consulting, and 1-on-1 sessions into a scannable, price-transparent catalogue.</p>
              <h4>3. Humanize the Practice Through Stories</h4>
              <p>Surface real student testimonials, in English and Bengali, to build emotional proof alongside rational trust.</p>
              <h4>4. Connect the Wider Ecosystem</h4>
              <p>Introduce sister brands GrabFabs, Festiq, and Éstrá Ritual as part of one wellness universe orbiting Awakynn.</p>
              <h4>5. Guide a Daily Ritual Narrative</h4>
              <p>Frame the offerings as a flowing daily path — morning practice, conscious breakfast, evening stillness, and ritual skincare — rather than a disconnected service list.</p>
            </div>
          </article>

          <article className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
            <h3 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">Research &amp; Discovery</h3>
            <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
              <h4>Feeling-First Decision Making</h4>
              <p>Wellness audiences respond to warmth, authenticity, and visible lineage before they respond to feature lists or pricing tables.</p>
              <h4>Credibility Signals Matter</h4>
              <p>Certifications, practice hours, and guru-shishya lineage needed dedicated visual space, not a footnote.</p>
              <h4>Multilingual Community</h4>
              <p>Students range across age groups and languages, with meaningful testimonials arriving in both English and Bengali.</p>
              <h4>Ecosystem Thinking</h4>
              <p>Awakynn functions less like a single studio and more like a hub, so the site needed room to introduce related ventures without diluting the core practice.</p>
            </div>
          </article>

          <article className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
            <h3 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">Strategy</h3>
            <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
              <p>We designed Awakynn&apos;s website as a calm, ritual-paced digital studio — one that mirrors the pacing of a real class: arrival, breath, practice, stillness, and integration. The experience blends emotional storytelling with practical clarity around offerings and booking intent.</p>
              <p>The platform was structured to function as:</p>
              <ul>
                <li>A trust-first introduction to the instructor and lineage</li>
                <li>A clear, browsable catalogue of classes and consulting offers</li>
                <li>A living testimonial archive across languages and ages</li>
                <li>A gateway into the wider Awakynn wellness ecosystem</li>
                <li>A daily-ritual narrative connecting movement, food, stillness, and skincare</li>
              </ul>
            </div>
          </article>

          <article className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
            <h3 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">Information Architecture</h3>
            <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
              <p>Navigation was organized around how a new visitor actually gets to know a wellness brand: understand the philosophy, meet the guide, explore the offerings, see the proof, then act.</p>
              <p>Primary pathways were aligned to:</p>
              <ul>
                <li>Philosophy and the &ldquo;awaken the body, still the mind&rdquo; narrative</li>
                <li>Instructor profile, certifications, and community of associate teachers</li>
                <li>Offerings — yoga, meditation, diet consulting, workshops, and 1-on-1 sessions</li>
                <li>A daily ritual timeline connecting practice, food, stillness, and skincare</li>
                <li>Testimonials, classes, gallery, and contact / share-your-story pathways</li>
              </ul>
            </div>
          </article>

          <article className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
            <h3 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">Design Approach</h3>
            <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
              <h4>Calm, Ritual-Paced Visual Language</h4>
              <p>Warm gold tones, generous breathing room, and soft imagery were used to mirror the stillness at the centre of the practice rather than a high-energy fitness aesthetic.</p>
              <h4>Instructor-Led Credibility</h4>
              <p>A dedicated profile section presents certifications, practice hours, first-aid credentials, and educational background alongside the guru–shishya teaching philosophy.</p>
              <h4>Offerings as Doorways</h4>
              <p>Each class or consultation is framed as &ldquo;a small ceremony, an act of becoming&rdquo; — presented with clear pricing, category tags, and imagery rather than a plain price list.</p>
            </div>
          </article>

          <article className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
            <h3 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">Booking &amp; Discovery Experience</h3>
            <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
              <p>Prospective students can move from curiosity to enquiry with minimal friction, supported by clear offering cards, a dedicated classes page, and direct contact and story-sharing pathways.</p>
              <p>Core improvements included:</p>
              <ul>
                <li>Transparent pricing across yoga, meditation, diet consulting, and workshops</li>
                <li>A day-in-the-life ritual timeline that naturally cross-promotes sister brands</li>
                <li>Testimonials segmented by real students, ages, and language for authenticity</li>
                <li>Clear safety and eligibility guidance for prospective students with health considerations</li>
              </ul>
            </div>
          </article>

          <article className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
            <h3 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">Technical Highlights</h3>
            <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
              <ul>
                <li>Responsive, imagery-led layouts tuned for a calm, editorial browsing pace</li>
                <li>Performance-conscious media delivery for fast-loading photography and video</li>
                <li>Structured content model for offerings, testimonials, and sister-brand cross-links</li>
                <li>Search-ready metadata for local wellness discoverability</li>
                <li>Clean architecture ready to scale as new offerings and ventures launch</li>
              </ul>
            </div>
          </article>

          <article className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
            <h3 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">Business Impact</h3>
            <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
              <p>The redesigned Awakynn platform gives the studio a calm, credible digital presence that reflects the quality and intention of the practice — and converts curious visitors into committed students.</p>
              <div className="flex flex-wrap gap-[10px] mt-3">
                <a href="https://awakynn.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 justify-center border border-[#111] px-[14px] py-[10px] text-[#111] no-underline uppercase text-[0.72rem] tracking-[0.08em] transition-all duration-[250ms] hover:bg-[#111] hover:text-white">Visit Awakynn <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                <a href="https://awakynn.com/classes" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 justify-center border border-[#111] px-[14px] py-[10px] text-[#111] no-underline uppercase text-[0.72rem] tracking-[0.08em] transition-all duration-[250ms] hover:bg-[#111] hover:text-white">View Classes <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </>
  );
}
