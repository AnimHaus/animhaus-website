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
  title: 'Shurer Dhara | Case Study',
  description: 'Case study: AnimHaus built a multilingual, trust-first web platform for Shurer Dhara — presenting the institution\'s artistic legacy, global school network, and social impact mission.',
  alternates: { canonical: 'https://animhaus.com/work/shurer-dhara' },
  openGraph: {
    title: 'Shurer Dhara | AnimHaus Studios',
    description: 'A global digital home for Rabindrasangeet, culture, and community impact.',
    url: 'https://animhaus.com/work/shurer-dhara',
    images: [{ url: 'https://cdn.shurerdhara.com/MFD.webp' }],
    type: 'article',
  },
};

export default function ShurerDharaPage() {
  return (
    <>
      <Navbar />
      <HeadingRevealInit />
      <ArtworkViewer projectId="shurer-dhara" />

      <section className="pt-5 px-[5%] pb-[60px] md:px-[8%] md:pb-20 lg:px-[10%] lg:pb-[100px]">
        <div className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
          <h2 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">Case Study</h2>
          <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
            <p>Shurer Dhara is one of the most respected institutions for Rabindrasangeet in the world. It needed a digital platform that could carry the full weight of its cultural identity — founder profile, global school network, and the Music for Development social mission — in one coherent, trust-first experience.</p>
            <p>Our mandate was to build a multilingual platform that presented deep cultural content with editorial clarity and navigational ease.</p>
          </div>
        </div>

        <div className="border-t border-[#e8e8e8]">
          <article className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
            <h3 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">The Client</h3>
            <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
              <p>Shurer Dhara is a cultural and educational institution founded by Prof. (Dr.) Rezwana Choudhury Bannya, one of the world&apos;s most respected voices in Rabindrasangeet. The organization spans multiple regions and works to keep Tagore&apos;s musical heritage active through education and community work.</p>
            </div>
          </article>

          <article className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
            <h3 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">The Problem</h3>
            <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
              <p>The institution had rich content but needed a stronger digital structure to help visitors quickly understand the full ecosystem: artist profile, schools in different countries, and mission-led programs.</p>
              <p>Primary friction areas included:</p>
              <ul>
                <li>Legacy and mission narratives were not unified in a single guided flow.</li>
                <li>Global presence needed clearer representation and wayfinding.</li>
                <li>Program discovery required stronger section hierarchy.</li>
                <li>Cultural storytelling needed to remain immersive without reducing usability.</li>
              </ul>
            </div>
          </article>

          <article className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
            <h3 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">Project Goals</h3>
            <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
              <h4>1. Preserve Cultural Authenticity</h4>
              <p>Ensure the interface reflects tradition, seriousness, and artistic identity without becoming dated.</p>
              <h4>2. Clarify Institutional Structure</h4>
              <p>Present founder profile, schools, and Music for Development as connected components of one ecosystem.</p>
              <h4>3. Improve Global Discoverability</h4>
              <p>Help visitors from different regions understand location context and navigate to relevant programs.</p>
              <h4>4. Increase Engagement</h4>
              <p>Strengthen calls-to-action for key journeys such as schools exploration, professor profile, and MFD.</p>
              <h4>5. Build a Scalable Foundation</h4>
              <p>Enable future growth in content, initiatives, and institutional communication through a clean architecture.</p>
            </div>
          </article>

          <article className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
            <h3 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">Research &amp; Discovery</h3>
            <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
              <h4>Identity-Led Navigation</h4>
              <p>Visitors often begin with cultural context and founder credibility before exploring programs.</p>
              <h4>Geography Matters</h4>
              <p>Audience interest is location-sensitive, making multi-country school representation critical.</p>
              <h4>Mission + Program Coupling</h4>
              <p>Users engage more deeply when social impact programs like Music for Development are framed as part of the institution&apos;s broader educational philosophy.</p>
            </div>
          </article>

          <article className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
            <h3 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">Strategy</h3>
            <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
              <p>We used an editorial, section-driven structure to turn cultural depth into clear user flow. Instead of a generic brochure pattern, the website was shaped around narrative progression and action clarity.</p>
              <p>The platform was designed to function as:</p>
              <ul>
                <li>A cultural identity showcase for the founder and her legacy</li>
                <li>A program discovery gateway for schools worldwide</li>
                <li>A global school navigator across countries and regions</li>
                <li>A mission and impact storyteller for the Music for Development initiative</li>
              </ul>
            </div>
          </article>

          <article className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
            <h3 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">Design Approach</h3>
            <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
              <h4>Editorial Visual Language</h4>
              <p>Rich typography, cultural imagery, and generous white space create an environment that feels worthy of the institution&apos;s artistic legacy.</p>
              <h4>Structured Multilingual Architecture</h4>
              <p>Language switching, locale-aware content delivery, and cultural sensitivity built into the information architecture from the start.</p>
              <h4>Narrative-Driven Sections</h4>
              <p>Each major section — founder, schools, MFD — is treated as a chapter in an ongoing story, not a standalone page.</p>
            </div>
          </article>

          <article className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
            <h3 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">Technical Highlights</h3>
            <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
              <ul>
                <li>Multilingual platform with seamless language switching for global audiences</li>
                <li>Performance-optimised media delivery for international load times</li>
                <li>Structured data and SEO metadata for cultural institution discoverability</li>
                <li>Clean, scalable architecture ready for new schools, initiatives, and content growth</li>
                <li>Accessibility considerations for diverse age groups and technical literacy levels</li>
              </ul>
            </div>
          </article>

          <article className="grid grid-cols-1 gap-[14px] py-[26px] border-b border-[#e8e8e8] md:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.45fr)] md:gap-7 md:py-[34px] lg:grid-cols-[minmax(220px,0.5fr)_minmax(0,1.5fr)] lg:gap-11 lg:py-10">
            <h3 className="text-[clamp(1.1rem,3vw,1.6rem)] uppercase tracking-[-0.01em] font-[900] md:sticky md:top-[110px] md:self-start">Business Impact</h3>
            <div className="[&_p]:text-[clamp(0.9rem,2vw,1rem)] [&_p]:text-[#333] [&_p]:leading-[1.7] [&_p+p]:mt-3 [&_li]:text-[clamp(0.9rem,2vw,1rem)] [&_li]:text-[#333] [&_li]:leading-[1.7] [&_li+li]:mt-2 [&_h4]:uppercase [&_h4]:mt-4 [&_h4]:text-[#111] [&_ul]:pl-[18px] [&_ol]:pl-[18px]">
              <p>Shurer Dhara now has a unified digital identity that connects the founder&apos;s artistic profile, the institution&apos;s global school network, and the Music for Development mission — in one coherent, culturally resonant platform.</p>
              <div className="flex flex-wrap gap-[10px] mt-3">
                <a href="https://shurerdhara.vercel.app/en" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 justify-center border border-[#111] px-[14px] py-[10px] text-[#111] no-underline uppercase text-[0.72rem] tracking-[0.08em] transition-all duration-[250ms] hover:bg-[#111] hover:text-white">Visit Shurer Dhara <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                <a href="https://shurerdhara.vercel.app/en/mfd" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 justify-center border border-[#111] px-[14px] py-[10px] text-[#111] no-underline uppercase text-[0.72rem] tracking-[0.08em] transition-all duration-[250ms] hover:bg-[#111] hover:text-white">Music for Development <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </>
  );
}
