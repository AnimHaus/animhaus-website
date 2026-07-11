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
  title: 'KD Institute of Advance Education | Case Study',
  description: 'Case study: AnimHaus built a trust-first admissions platform for KD Institute of Advance Education — a modern school website designed to convert parent interest into admissions enquiries.',
  alternates: { canonical: 'https://animhaus.com/work/kdiae' },
  openGraph: {
    title: 'KD Institute of Advance Education | AnimHaus Studios',
    description: 'Case study: A trust-first admissions platform for a growing education institution in West Bengal.',
    url: 'https://animhaus.com/work/kdiae',
    images: [{ url: 'https://cdn.kdiae.in/front_building.jpg' }],
    type: 'article',
  },
};

export default function KdiaePage() {
  return (
    <>
      <Navbar />
      <HeadingRevealInit />
      <ArtworkViewer projectId="kdiae" />

      <section className="pt-5 px-[5%] pb-[60px] md:px-[8%] md:pb-20 lg:px-[10%] lg:pb-[100px]">
        <div className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
          <h2 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">Case Study</h2>
          <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
            <p>KD Institute of Advance Education needed a digital presence that could earn parent trust quickly, communicate academic quality clearly, and convert browsing families into admission enquiries — all on a mobile-first platform.</p>
            <p>Our task was to build a school website that works as hard as the institution itself: structured, warm, fast, and conversion-focused.</p>
          </div>
        </div>

        <div className="border-t border-[#e8e8e8]">
          <article className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
            <h3 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">The Client</h3>
            <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
              <p>KD Institute of Advance Education is a CBSE-focused school in Hooghly, West Bengal, serving learners from early years through higher classes. The institution positions itself around holistic development, safety, qualified faculty, and activity-based learning.</p>
            </div>
          </article>

          <article className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
            <h3 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">The Problem</h3>
            <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
              <p>Prospective parents often evaluate schools emotionally and practically at the same time. Before the redesign, important details such as academics, safety, facilities, and admissions were not presented in a single decision-friendly flow.</p>
              <p>Key friction points included:</p>
              <ul>
                <li>Trust-building information was scattered across sections.</li>
                <li>Admissions intent did not consistently convert into enquiries.</li>
                <li>Academic pathways were not always easy to compare by age group.</li>
                <li>Mobile users had to do extra scrolling to reach action points.</li>
                <li>Institutional growth plans needed a stronger digital backbone.</li>
              </ul>
            </div>
          </article>

          <article className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
            <h3 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">Project Goals</h3>
            <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
              <h4>1. Strengthen Parent Confidence</h4>
              <p>Communicate safety, care, and educational quality immediately so first-time visitors can trust the institution quickly.</p>
              <h4>2. Clarify Academic Structure</h4>
              <p>Organize learning stages in a way that helps families understand progression from Nursery through senior classes.</p>
              <h4>3. Improve Admission Conversion</h4>
              <p>Reduce friction between interest and action through clearer calls-to-action and better page hierarchy.</p>
              <h4>4. Build for Mobile-First Parents</h4>
              <p>Ensure all critical pathways, especially contact and admissions, are highly accessible on mobile devices.</p>
              <h4>5. Enable Long-Term Expansion</h4>
              <p>Prepare the digital system to support future training centers, ITI colleges, and broader institutional growth.</p>
            </div>
          </article>

          <article className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
            <h3 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">Research &amp; Discovery</h3>
            <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
              <h4>Parent Decision Behavior</h4>
              <p>Families typically review trust signals before academics. Safety, campus environment, and teacher quality strongly influence first impressions.</p>
              <h4>Age-Stage Browsing</h4>
              <p>Parents look for class-specific fit. Segmenting Nursery to UKG, primary, middle, and higher classes became essential for quick understanding.</p>
              <h4>Mobile-Dominant Users</h4>
              <p>The majority of parent-audience traffic arrives on mobile — so mobile-first design was a requirement, not an afterthought.</p>
              <h4>ERP Partnership Potential</h4>
              <p>The institution had longer-term ambitions for operational digitization, making a scalable architecture a strategic priority from day one.</p>
            </div>
          </article>

          <article className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
            <h3 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">Strategy</h3>
            <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
              <p>We structured the KDIAE website as a parent-first decision support system — leading with trust signals, following with academic clarity, and closing with low-friction admission pathways.</p>
              <p>The platform was designed to function as:</p>
              <ul>
                <li>A trust-first institutional showcase for new and prospective parents</li>
                <li>A clear, staged academic pathway guide from Nursery through senior classes</li>
                <li>A mobile-optimised admissions funnel with direct contact access</li>
                <li>A scalable foundation for future ERP integration and multi-center growth</li>
              </ul>
            </div>
          </article>

          <article className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
            <h3 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">Design Approach</h3>
            <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
              <h4>Trust Signals First</h4>
              <p>The homepage leads with faculty credentials, safety certifications, campus imagery, and student outcomes — the specific signals parents look for before anything else.</p>
              <h4>Academic Pathway Clarity</h4>
              <p>Learning stages are presented as a visual journey — from early years through board-level preparation — making the academic structure immediately legible.</p>
              <h4>Conversion-Optimised Hierarchy</h4>
              <p>Every page is structured with a clear primary action — enquire, apply, or contact — never buried below the fold on any device.</p>
            </div>
          </article>

          <article className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
            <h3 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">Technical Highlights</h3>
            <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
              <ul>
                <li>Fully responsive, mobile-first layout with critical CTAs above the fold on all screen sizes</li>
                <li>Performance-optimised build for fast loading on typical Indian mobile networks</li>
                <li>Structured admissions funnel with WhatsApp and direct contact integration</li>
                <li>SEO foundations for local discoverability in Hooghly and surrounding districts</li>
                <li>Architecture designed for ERP system integration and multi-campus scaling</li>
              </ul>
            </div>
          </article>

          <article className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
            <h3 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">Business Impact</h3>
            <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
              <p>The KDIAE platform gives the institution a modern, parent-trusted digital presence that converts interest into enquiries — and sets the foundation for its long-term digital growth, including ERP implementation and multi-center expansion.</p>
              <div className="flex flex-wrap gap-[10px] mt-3">
                <a href="https://kdiae.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 justify-center border border-[#111] px-[14px] py-[10px] text-[#111] no-underline uppercase text-[0.72rem] tracking-[0.08em] transition-all duration-[250ms] hover:bg-[#111] hover:text-white">Visit KDIAE <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                <a href="https://kdiae.in/admissions" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 justify-center border border-[#111] px-[14px] py-[10px] text-[#111] no-underline uppercase text-[0.72rem] tracking-[0.08em] transition-all duration-[250ms] hover:bg-[#111] hover:text-white">Admissions <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </>
  );
}
