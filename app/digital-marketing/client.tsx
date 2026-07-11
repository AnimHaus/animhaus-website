'use client';
import { useState } from 'react';
import TransitionLink from '@/components/TransitionLink';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useServicesEffects } from '@/components/useServicesEffects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight, faArrowUp, faBullseye, faCalendarAlt, faChartLine,
  faCheck, faComments, faEye, faHeart, faPenNib, faShieldAlt, faStar,
  faBullhorn, faLayerGroup, faPaintBrush, faSyncAlt,
  faTag, faShareAlt, faMapMarkerAlt, faImages, faFilm, faGlobe,
  faInfinity, faBolt, faPlus,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF, faInstagram, faLinkedinIn, faPinterestP,
  faSnapchatGhost, faTiktok, faWhatsapp, faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'ProfessionalService',
  name: 'AnimHaus Digital Marketing',
  url: 'https://animhaus.com/digital-marketing',
  description: 'Data-driven digital marketing services for brands across India.',
  areaServed: 'India',
  serviceType: ['Social Media Marketing', 'Content Creation', 'Ad Campaigns', 'Brand Management'],
};

const btnPrimary   = 'inline-flex items-center gap-[10px] bg-[#D91A21] text-white px-8 py-4 text-[0.8rem] font-extrabold tracking-[2px] uppercase no-underline transition-[background,transform] duration-300 rounded-[2px] hover:bg-[#b81319] hover:-translate-y-0.5';
const btnSecondary = 'inline-flex items-center gap-[10px] bg-transparent text-[#111111] border border-black/30 px-8 py-[15px] text-[0.8rem] font-bold tracking-[2px] uppercase no-underline transition-[border-color,transform] duration-300 rounded-[2px] hover:border-black hover:-translate-y-0.5';
const btnSecondaryDark = 'inline-flex items-center gap-[10px] bg-transparent text-white border border-white/30 px-8 py-[15px] text-[0.8rem] font-bold tracking-[2px] uppercase no-underline transition-[border-color,background,transform] duration-300 rounded-[2px] hover:border-white hover:bg-white/[0.06] hover:-translate-y-0.5';
const sectionCls = 'px-[5%] py-[100px] relative overflow-hidden md:px-[8%] md:py-[120px] xl:px-[10%] xl:py-[140px]';
const labelCls   = 'text-[0.65rem] tracking-[5px] uppercase text-[#D91A21] font-bold block mb-4';
const h2Cls      = 'text-[clamp(2rem,6vw,4rem)] font-black uppercase tracking-[-2px] leading-none text-[#111111]';

const whatWeDo = [
  { icon: faPenNib,      title: 'Content Creation',     desc: 'Branded posts, carousels, polls, reels, and short-form videos crafted to your voice and audience.',                             outcome: 'Consistent presence' },
  { icon: faCalendarAlt, title: 'Content Calendar',     desc: 'Structured publishing schedules planned around platform algorithms, trends, and campaign goals.',                               outcome: 'Strategic posting'   },
  { icon: faBullhorn,    title: 'Ad Campaigns',         desc: 'Targeted paid promotions across Meta and beyond — reach the right audience at the right moment.',                              outcome: 'Boosted reach'       },
  { icon: faComments,    title: 'Community Management', desc: 'Responding to DMs, comments, and mentions to keep your audience engaged and your brand reputation strong.',                    outcome: 'Active community'    },
  { icon: faChartLine,   title: 'Analytics & Reporting',desc: 'Monthly performance reports covering reach, engagement, follower growth, and campaign ROI.',                                   outcome: 'Data-driven decisions'},
  { icon: faGlobe,       title: 'Audience Targeting',   desc: 'Precision targeting by region, interest, and demographic — focused on India or expanded globally.',                            outcome: 'Right people, right time'},
  { icon: faYoutube,     title: 'Video Production',     desc: 'Short-form video content for Reels, YouTube Shorts, and platform-native formats — crafted for engagement.',                    outcome: 'Premium video tier'  },
  { icon: faLayerGroup,  title: 'Multi-Brand Management',desc: 'Running multiple brands simultaneously with dedicated strategies, distinct voices, and separate analytics.',                  outcome: 'Custom plan only'    },
];

const statCards = [
  {
    variant: 'ig', icon: faInstagram, name: 'Instagram',
    iconBg: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
    borderColor: 'rgba(214,36,159,0.3)',
    cardBg: 'rgba(214,36,159,0.04)',
    barColor: 'rgba(214,36,159,0.28)',
    barHighlight: '#d6249f',
    nums: [{ v: '+847%', l: 'Reach Growth' }, { v: '12.4K', l: 'New Followers' }],
    delta: '+847% reach',
    platformIcons: null as null | { icon: import('@fortawesome/fontawesome-svg-core').IconDefinition; bg: string }[],
  },
  {
    variant: 'meta', icon: faFacebookF, name: 'Meta Suite',
    iconBg: 'linear-gradient(135deg, #1877f2, #0a66c2)',
    borderColor: 'rgba(6,104,225,0.3)',
    cardBg: 'rgba(6,104,225,0.04)',
    barColor: 'rgba(24,119,242,0.3)',
    barHighlight: '#1877f2',
    nums: [{ v: '3.2M', l: 'Total Reach' }, { v: '94K', l: 'Engagements' }],
    delta: '+3.2M reach',
    platformIcons: [
      { icon: faFacebookF,  bg: '#1877f2' },
      { icon: faInstagram,  bg: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' },
      { icon: faWhatsapp,   bg: '#25d366' },
    ] as { icon: import('@fortawesome/fontawesome-svg-core').IconDefinition; bg: string }[],
  },
  {
    variant: 'yt', icon: faYoutube, name: 'YouTube',
    iconBg: '#ff0000',
    borderColor: 'rgba(255,0,0,0.25)',
    cardBg: 'rgba(255,0,0,0.04)',
    barColor: 'rgba(255,0,0,0.22)',
    barHighlight: '#ff0000',
    nums: [{ v: '2.1M', l: 'Views / Month' }, { v: '+320%', l: 'Watch Time' }],
    delta: '+320% watch time',
    platformIcons: null as null | { icon: import('@fortawesome/fontawesome-svg-core').IconDefinition; bg: string }[],
  },
];

const platforms = [
  {
    icon: faFacebookF, iconBg: '#1877f2', name: 'Facebook',
    desc: 'Posts, polls, community groups, event promotions, and targeted ad campaigns for broad Indian audiences.',
    tag: 'Meta Suite', custom: false,
  },
  {
    icon: faInstagram, iconBg: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)', name: 'Instagram',
    desc: 'Feed posts, carousels, stories, reels, and branded content optimised for visual discovery and engagement.',
    tag: 'Meta Suite', custom: false,
  },
  {
    icon: faWhatsapp, iconBg: '#25d366', name: 'WhatsApp',
    desc: 'Business channel management, broadcast messaging, and customer engagement through WhatsApp Business.',
    tag: 'Meta Suite', custom: false,
  },
  {
    icon: faYoutube, iconBg: '#ff0000', name: 'YouTube',
    desc: 'Channel management, video uploads, Shorts creation, and SEO-optimised descriptions for discoverability.',
    tag: 'Premium & Custom', custom: false,
  },
  {
    icon: faPinterestP, iconBg: '#e60023', name: 'Pinterest',
    desc: 'Visual pin boards and idea collections for lifestyle, product, and brand discovery campaigns.',
    tag: 'Premium & Custom', custom: false,
  },
  {
    icon: faPlus, iconBg: 'rgba(17,17,17,0.08)', iconColor: '#111', name: 'More Platforms',
    desc: 'LinkedIn, Snapchat, TikTok, and emerging platforms — available on the Custom plan.',
    tag: 'Custom Plan', custom: true,
  },
];

const BASIC_FEATS   = ['Monthly content calendar','Branded post design','Poll & engagement content','Community management','Monthly analytics report','WhatsApp Business setup'];
const PREMIUM_FEATS = ['Everything in Basic','YouTube channel management','Short-form video content (Reels, Shorts)','Pinterest boards & pin strategy','Cross-platform content adaptation','Advanced monthly analytics','Competitor & trend tracking'];
const CUSTOM_FEATS  = ['Everything in Premium','Dedicated account manager','Full ad campaign management','Multi-country audience targeting','Multi-brand strategy & separation','Influencer outreach & coordination','Custom analytics dashboard','Priority support & turnaround','Quarterly growth strategy sessions'];

type SpecRow = { icon: import('@fortawesome/fontawesome-svg-core').IconDefinition; strong: string; span: string };
const BASIC_SPEC: SpecRow[]   = [{ icon: faTag, strong: '1 Brand', span: 'Single brand identity managed' }, { icon: faShareAlt, strong: 'Up to 3 Platforms', span: 'Facebook, Instagram, WhatsApp' }, { icon: faMapMarkerAlt, strong: 'Native Country', span: "Client's home country targeting" }, { icon: faImages, strong: 'Posts & Polls', span: 'No video content' }];
const PREMIUM_SPEC: SpecRow[] = [{ icon: faTag, strong: '1 Brand', span: 'Full brand identity management' }, { icon: faShareAlt, strong: 'Up to 5 Platforms', span: 'Meta Suite + YouTube + Pinterest' }, { icon: faMapMarkerAlt, strong: 'Native Country', span: "Client's home country targeting" }, { icon: faFilm, strong: 'Posts, Polls & Videos', span: 'Full content suite including video' }];
const CUSTOM_SPEC: SpecRow[]  = [{ icon: faLayerGroup, strong: 'Multiple Brands', span: 'Unlimited brand portfolios' }, { icon: faShareAlt, strong: 'All Platforms', span: 'Every relevant channel covered' }, { icon: faGlobe, strong: 'Multi-Country Targeting', span: 'Native country + international markets' }, { icon: faInfinity, strong: 'All Content Types', span: 'Posts, polls, videos, ads & more' }];

export default function DigitalMarketingClient() {
  useServicesEffects();
  const [billing, setBilling] = useState<'monthly' | 'quarterly'>('monthly');

  return (
    <div className="bg-white text-[#111111]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar logoSrc="/animhaus-logotype.png" transparentOnScroll />

      {/* ── HERO ── */}
      <section id="sr-hero" className="min-h-screen flex flex-col justify-end pt-[120px] pb-[10vh] px-[5%] bg-white relative overflow-hidden md:px-[8%] md:pt-[140px] xl:px-[10%] xl:pt-[160px]">
        {/* noise */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")" }} aria-hidden="true" />
        {/* radial glow */}
        <div className="absolute top-[-10%] right-[-15%] w-[70vmax] h-[70vmax] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(217,26,33,0.18) 0%, rgba(214,36,159,0.06) 40%, transparent 65%)' }} aria-hidden="true" />
        {/* decorative blobs */}
        <div className="absolute w-[340px] h-[340px] top-[-80px] right-[10%] rounded-full pointer-events-none z-0 blur-[60px] opacity-55" style={{ background: 'rgba(217,26,33,0.18)', animation: 'dm-blob-pulse 8s ease-in-out infinite' }} aria-hidden="true" />
        <div className="absolute w-[260px] h-[260px] rounded-full pointer-events-none z-0 blur-[60px] opacity-55" style={{ top: '40%', right: '25%', background: 'rgba(24,119,242,0.12)', animation: 'dm-blob-pulse 12s ease-in-out 2s infinite' }} aria-hidden="true" />
        <div className="absolute w-[200px] h-[200px] rounded-full pointer-events-none z-0 blur-[60px] opacity-55" style={{ bottom: '10%', right: '15%', background: 'rgba(37,211,102,0.12)', animation: 'dm-blob-pulse 10s ease-in-out 4s infinite' }} aria-hidden="true" />

        {/* floating platform orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 hidden xl:block" aria-hidden="true">
          {/* Instagram — top of first card */}
          <div className="absolute w-[54px] h-[54px] rounded-full flex items-center justify-center text-white shadow-[0_4px_20px_rgba(214,36,159,0.4)]" style={{ left:'65%',top:'9%',background:'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',animation:'dm-float 6s ease-in-out 0s infinite, dm-blob-pulse 5s ease-in-out infinite' }}><FontAwesomeIcon icon={faInstagram} className="h-5 w-5" /></div>
          {/* TikTok — left of first card */}
          <div className="absolute w-[50px] h-[50px] rounded-full flex items-center justify-center text-white shadow-[0_4px_16px_rgba(0,0,0,0.25)]" style={{ left:'57%',top:'22%',background:'linear-gradient(135deg, #69c9d0, #010101, #ee1d52)',animation:'dm-float 7.5s ease-in-out -0.5s infinite, dm-blob-pulse 5s ease-in-out infinite' }}><FontAwesomeIcon icon={faTiktok} className="h-[1.1rem] w-[1.1rem]" /></div>
          {/* Facebook — top right outside cards */}
          <div className="absolute w-[54px] h-[54px] rounded-full flex items-center justify-center text-white shadow-[0_4px_20px_rgba(24,119,242,0.4)]" style={{ left:'87%',top:'18%',background:'#1877f2',animation:'dm-float 8s ease-in-out -2s infinite, dm-blob-pulse 5s ease-in-out infinite' }}><FontAwesomeIcon icon={faFacebookF} className="h-5 w-5" /></div>
          {/* LinkedIn — far right mid */}
          <div className="absolute w-[54px] h-[54px] rounded-full flex items-center justify-center text-white shadow-[0_4px_20px_rgba(10,102,194,0.4)]" style={{ left:'95%',top:'44%',background:'#0a66c2',animation:'dm-float 10s ease-in-out -1.5s infinite, dm-blob-pulse 5s ease-in-out infinite' }}><FontAwesomeIcon icon={faLinkedinIn} className="h-5 w-5" /></div>
          {/* YouTube — left between card 1-2 */}
          <div className="absolute w-[54px] h-[54px] rounded-full flex items-center justify-center text-white shadow-[0_4px_20px_rgba(255,0,0,0.4)]" style={{ left:'58%',top:'56%',background:'#ff0000',animation:'dm-float 7s ease-in-out -1s infinite, dm-blob-pulse 5s ease-in-out infinite' }}><FontAwesomeIcon icon={faYoutube} className="h-5 w-5" /></div>
          {/* WhatsApp — far right lower */}
          <div className="absolute w-[54px] h-[54px] rounded-full flex items-center justify-center text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)]" style={{ left:'95%',top:'66%',background:'#25d366',animation:'dm-float 9s ease-in-out -3s infinite, dm-blob-pulse 5s ease-in-out infinite' }}><FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5" /></div>
          {/* Snapchat — between card 2-3 */}
          <div className="absolute w-[54px] h-[54px] rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(255,252,0,0.3)]" style={{ left:'64%',top:'77%',background:'#fffc00',color:'#111',animation:'dm-float 8.5s ease-in-out -2.5s infinite, dm-blob-pulse 5s ease-in-out infinite' }}><FontAwesomeIcon icon={faSnapchatGhost} className="h-5 w-5" /></div>
          {/* Pinterest — bottom right of cards */}
          <div className="absolute w-[50px] h-[50px] rounded-full flex items-center justify-center text-white shadow-[0_4px_16px_rgba(230,0,35,0.35)]" style={{ left:'84%',top:'84%',background:'#e60023',animation:'dm-float 6.5s ease-in-out -4s infinite, dm-blob-pulse 5s ease-in-out infinite' }}><FontAwesomeIcon icon={faPinterestP} className="h-[1.1rem] w-[1.1rem]" /></div>
          {/* metric pills */}
          <div className="absolute bg-white text-[#111] text-[0.65rem] font-extrabold tracking-[1px] px-[14px] py-[6px] rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.12)] whitespace-nowrap inline-flex items-center gap-[6px] pointer-events-none" style={{ left:'57%',top:'42%',animation:'dm-float 11s ease-in-out -1s infinite' }}><FontAwesomeIcon icon={faArrowUp} className="h-2.5 w-2.5 text-[#D91A21]" /> +34% Reach</div>
          <div className="absolute bg-white text-[#111] text-[0.65rem] font-extrabold tracking-[1px] px-[14px] py-[6px] rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.12)] whitespace-nowrap inline-flex items-center gap-[6px] pointer-events-none" style={{ left:'74%',top:'57%',animation:'dm-float 9s ease-in-out -3s infinite' }}><FontAwesomeIcon icon={faHeart} className="h-2.5 w-2.5 text-[#D91A21]" /> 12K Likes</div>
          <div className="absolute bg-white text-[#111] text-[0.65rem] font-extrabold tracking-[1px] px-[14px] py-[6px] rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.12)] whitespace-nowrap inline-flex items-center gap-[6px] pointer-events-none" style={{ left:'62%',top:'86%',animation:'dm-float 12s ease-in-out -2s infinite' }}><FontAwesomeIcon icon={faEye} className="h-2.5 w-2.5 text-[#D91A21]" /> 2.1M Views</div>
        </div>

        <div className="relative z-[1] w-full xl:grid xl:grid-cols-[1fr_380px] xl:gap-x-20 xl:gap-y-14 xl:items-center">
          <div>
            <h1 className="[font-family:'Plus_Jakarta_Sans',sans-serif] text-[clamp(2.4rem,6vw,6rem)] font-black leading-none tracking-[-1px] uppercase text-[#111111] mb-8 md:tracking-[-2px] xl:text-[clamp(3.5rem,5.5vw,6rem)] xl:tracking-[-3px] xl:leading-[0.92]">
              Your Brand.<br />Every <em className="not-italic text-[#D91A21]">Platform.</em><br />Real Growth.
            </h1>
            <p className="text-[clamp(0.9rem,2vw,1.1rem)] text-black/52 max-w-[560px] leading-[1.8] mb-11">
              We run your social presence end-to-end — content, strategy, community, and paid ads — so your brand grows while you focus on building your business.
            </p>
            <div className="flex flex-wrap gap-[14px] mb-16">
              <a href="mailto:appleboy285@gmail.com" className={btnSecondary}>Book a Call</a>
            </div>
            <div className="flex gap-7 justify-between mt-12 pt-8 border-t border-black/[0.08] w-full relative z-[1] flex-wrap">
              {[
                { v: '3+',         l: 'Platforms Managed'  },
                { v: 'Hyperlocal', l: 'Audience Targeting' },
                { v: '100%',       l: 'Custom Content'     },
                { v: 'Monthly',    l: 'Reporting'          },
              ].map(({ v, l }) => (
                <div key={l} className="flex flex-col gap-1">
                  <strong className="text-[clamp(1.3rem,3vw,1.8rem)] font-black [font-family:'Plus_Jakarta_Sans',sans-serif] text-[#111111] leading-none">{v}</strong>
                  <span className="text-[0.65rem] tracking-[3px] uppercase text-black/42">{l}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden xl:flex xl:flex-col xl:gap-3">
            {statCards.map(({ variant, icon, name, iconBg, borderColor, cardBg, barColor, barHighlight, nums, delta, platformIcons }) => (
              <div key={variant} className="rounded-[18px] p-[16px_20px_14px] w-full transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]" style={{ background: cardBg, border: `1px solid ${borderColor}`, backdropFilter: 'blur(12px)' }}>
                <div className="flex items-center gap-[10px] mb-3">
                  <div className="w-[28px] h-[28px] rounded-[7px] flex items-center justify-center text-white shrink-0" style={{ background: iconBg }}>
                    <FontAwesomeIcon icon={icon} className="h-[0.7rem] w-[0.7rem]" />
                  </div>
                  <span className="text-[0.65rem] font-extrabold uppercase tracking-[1.5px] text-[#111111] flex-1">{name}</span>
                  <div className="flex items-center gap-[5px] text-[0.52rem] font-bold tracking-[2px] uppercase text-[#22c55e]">
                    <span className="w-[5px] h-[5px] bg-[#22c55e] rounded-full inline-block shrink-0" style={{ animation: 'dm-pulse-dot 1.5s ease-in-out infinite' }} aria-hidden="true" /> Live
                  </div>
                </div>
                {platformIcons && (
                  <div className="flex gap-[6px] mb-3">
                    {platformIcons.map(({ icon: pIcon, bg }, pi) => (
                      <div key={pi} className="w-[26px] h-[26px] rounded-full flex items-center justify-center text-white text-[0.65rem]" style={{ background: bg }}>
                        <FontAwesomeIcon icon={pIcon} className="h-[0.65rem] w-[0.65rem]" />
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex items-end gap-[3px] h-7 mb-3">
                  {[35, 50, 42, 65, 58, 75, 70, 100].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm transition-[background] duration-300" style={{ height: `${h}%`, background: i === 7 ? barHighlight : barColor }} />
                  ))}
                </div>
                <div className="flex gap-5 mb-3">
                  {nums.map(({ v, l }) => (
                    <div key={l} className="flex flex-col gap-[2px]">
                      <div className="text-[1.3rem] font-black text-[#111111] [font-family:'Plus_Jakarta_Sans',sans-serif] leading-none">{v}</div>
                      <div className="text-[0.55rem] tracking-[2px] uppercase text-black/38 whitespace-nowrap">{l}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-[#22c55e] text-[0.72rem] font-semibold flex items-center gap-[5px]">
                    <FontAwesomeIcon icon={faArrowUp} className="h-2 w-2" /> {delta}
                  </div>
                  <div className="text-[0.62rem] text-black/35">vs last month</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-black/[0.08]" />

      {/* ── TICKER ── */}
      <div className="overflow-hidden bg-[#111] py-[14px]" role="marquee" aria-label="Platforms and services">
        <div className="inline-flex whitespace-nowrap" style={{ animation: 'dm-ticker-scroll 38s linear infinite' }}>
          {[
            { icon: faInstagram,     name: 'Instagram', color: '#e1306c' },
            { icon: faFacebookF,     name: 'Facebook',  color: '#1877f2' },
            { icon: faWhatsapp,      name: 'WhatsApp',  color: '#25d366' },
            { icon: faYoutube,       name: 'YouTube',   color: '#ff0000' },
            { icon: faPinterestP,    name: 'Pinterest', color: '#e60023' },
            { icon: faLinkedinIn,    name: 'LinkedIn',  color: '#0a66c2' },
            { icon: faTiktok,        name: 'TikTok',    color: '#69c9d0' },
            { icon: faSnapchatGhost, name: 'Snapchat',  color: '#f5d000' },
          ].flatMap(({ icon, name, color }, i) => [
            <span key={`p-${i}`} className="inline-flex items-center gap-[6px] px-4 text-[0.65rem] font-bold tracking-[2px] uppercase" style={{ color }}>
              <FontAwesomeIcon icon={icon} className="h-4 w-4" /> {name}
            </span>,
            <span key={`ps-${i}`} className="text-[#D91A21] text-[0.6rem] px-2">✦</span>,
          ])}
          {[
            { icon: faStar,     label: 'Social Media'     },
            { icon: faBolt,     label: 'Meta Ads'         },
            { icon: faPenNib,   label: 'Content Creation' },
            { icon: faChartLine,label: 'Brand Growth'     },
            { icon: faBullseye, label: 'Analytics'        },
            { icon: faComments, label: 'Community'        },
          ].flatMap(({ icon, label }, i) => [
            <span key={`s-${i}`} className="inline-flex items-center gap-[6px] px-4 text-[0.65rem] font-bold tracking-[2px] uppercase text-[rgba(255,255,255,0.5)]">
              <FontAwesomeIcon icon={icon} className="h-4 w-4 text-[#D91A21]" /> {label}
            </span>,
            <span key={`ss-${i}`} className="text-[#D91A21] text-[0.6rem] px-2">✦</span>,
          ])}
          {/* duplicate for seamless loop */}
          {[
            { icon: faInstagram,     name: 'Instagram', color: '#e1306c' },
            { icon: faFacebookF,     name: 'Facebook',  color: '#1877f2' },
            { icon: faWhatsapp,      name: 'WhatsApp',  color: '#25d366' },
            { icon: faYoutube,       name: 'YouTube',   color: '#ff0000' },
            { icon: faPinterestP,    name: 'Pinterest', color: '#e60023' },
            { icon: faLinkedinIn,    name: 'LinkedIn',  color: '#0a66c2' },
            { icon: faTiktok,        name: 'TikTok',    color: '#69c9d0' },
            { icon: faSnapchatGhost, name: 'Snapchat',  color: '#f5d000' },
          ].flatMap(({ icon, name, color }, i) => [
            <span key={`p2-${i}`} className="inline-flex items-center gap-[6px] px-4 text-[0.65rem] font-bold tracking-[2px] uppercase" style={{ color }}>
              <FontAwesomeIcon icon={icon} className="h-4 w-4" /> {name}
            </span>,
            <span key={`ps2-${i}`} className="text-[#D91A21] text-[0.6rem] px-2">✦</span>,
          ])}
          {[
            { icon: faStar,     label: 'Social Media'     },
            { icon: faBolt,     label: 'Meta Ads'         },
            { icon: faPenNib,   label: 'Content Creation' },
            { icon: faChartLine,label: 'Brand Growth'     },
            { icon: faBullseye, label: 'Analytics'        },
            { icon: faComments, label: 'Community'        },
          ].flatMap(({ icon, label }, i) => [
            <span key={`s2-${i}`} className="inline-flex items-center gap-[6px] px-4 text-[0.65rem] font-bold tracking-[2px] uppercase text-[rgba(255,255,255,0.5)]">
              <FontAwesomeIcon icon={icon} className="h-4 w-4 text-[#D91A21]" /> {label}
            </span>,
            <span key={`ss2-${i}`} className="text-[#D91A21] text-[0.6rem] px-2">✦</span>,
          ])}
        </div>
      </div>

      <div className="w-full h-px bg-black/[0.08]" />

      {/* ── WHAT WE DO ── */}
      <section id="dm-what" className={`${sectionCls} bg-[#f9f9f9]`}>
        <div className="max-w-[720px] mb-16 sr-reveal">
          <h2 className={h2Cls}>Full-Spectrum<br />Social Presence.</h2>
          <p className="text-[clamp(0.9rem,2vw,1rem)] text-black/48 max-w-[520px] leading-[1.8] mt-4">From content calendars to ad campaigns, we manage every moving part of your digital marketing operation — consistently and on-brand.</p>
        </div>
        <div className="grid grid-cols-2 gap-px bg-black/[0.07] border border-black/[0.07] md:grid-cols-3 lg:grid-cols-4">
          {whatWeDo.map(({ icon, title, desc, outcome }, i) => (
            <div key={title} className={`bg-[#f9f9f9] p-[40px_28px] transition-[background] duration-[400ms] hover:bg-[#f5f5f5] relative overflow-hidden before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#D91A21] before:transition-[width] before:duration-[400ms] hover:before:w-full sr-reveal${i % 3 !== 0 ? ` sr-reveal-delay-${i % 3}` : ''}`}>
              <FontAwesomeIcon icon={icon} className="h-[1.4rem] w-[1.4rem] text-[#D91A21] mb-5 block opacity-85" />
              <h3 className="text-[0.95rem] font-extrabold uppercase tracking-[1px] text-[#111111] mb-[10px]">{title}</h3>
              <p className="text-[0.8rem] text-black/48 leading-[1.7] mb-4">{desc}</p>
              <div className="text-[0.7rem] tracking-[1px] uppercase text-[#D91A21] font-bold">{outcome}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-black/[0.08]" />

      {/* ── PLATFORMS ── */}
      <section id="dm-platforms" className={`${sectionCls} bg-[#f9f9f9]`}>
        <div className="max-w-[720px] mb-16 sr-reveal">
          <h2 className={h2Cls}>Where We<br />Show Up.</h2>
          <p className="text-[clamp(0.9rem,2vw,1rem)] text-black/48 max-w-[520px] leading-[1.8] mt-4">We manage your brand presence natively across each platform — each one has its own language, rhythm, and audience behaviour.</p>
        </div>
        <div className="grid grid-cols-1 gap-px bg-black/[0.07] border border-black/[0.07] sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map(({ icon, iconBg, iconColor, name, desc, tag, custom }, i) => (
            <div key={name} className={`flex items-start gap-5 p-[36px_28px] transition-[background] duration-[350ms] sr-reveal${i % 3 !== 0 ? ` sr-reveal-delay-${i % 3}` : ''}${custom ? ' bg-white border-l-[3px] border-[rgba(217,26,33,0.25)] hover:bg-[#fafafa]' : ' bg-[#f9f9f9] hover:bg-[#f0f0f0]'}`}>
              <div className="w-11 h-11 min-w-[44px] rounded-[10px] flex items-center justify-center text-[1.15rem] shrink-0 transition-[background,transform] duration-300" style={{ background: iconBg, color: iconColor ?? '#fff' }}>
                <FontAwesomeIcon icon={icon} className="h-[1.15rem] w-[1.15rem]" />
              </div>
              <div>
                <h4 className="text-[0.95rem] font-extrabold uppercase tracking-[0.5px] text-[#111111] mb-2">{name}</h4>
                <p className="text-[0.78rem] text-black/48 leading-[1.7] mb-3">{desc}</p>
                <span className="text-[0.6rem] tracking-[2px] uppercase font-bold text-[#D91A21] bg-[rgba(217,26,33,0.08)] border border-[rgba(217,26,33,0.2)] px-[10px] py-[3px] rounded-[2px] inline-block">{tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-black/[0.08]" />

      {/* ── PRICING ── */}
      <section id="dm-pricing" className={`${sectionCls} bg-white`}>
        <div className="max-w-[720px] mb-16 sr-reveal">
          <h2 className={h2Cls}>Pick Your<br />Power Level.</h2>
          <p className="text-[clamp(0.9rem,2vw,1rem)] text-black/48 max-w-[520px] leading-[1.8] mt-4">Three tiers built for different stages of brand growth — from your first social push to full multi-brand, multi-market domination.</p>
        </div>

        {/* Billing toggle */}
        <div className="flex items-center gap-1 mb-12 mx-auto w-fit bg-black/[0.06] rounded-[4px] p-1 sr-reveal">
          <button onClick={() => setBilling('monthly')} className={`flex items-center gap-2 px-[22px] py-[10px] border-none rounded-[2px] text-[0.75rem] font-bold tracking-[1px] uppercase cursor-pointer transition-[background,color,box-shadow] duration-250${billing === 'monthly' ? ' bg-white text-[#111111] shadow-[0_1px_6px_rgba(0,0,0,0.1)]' : ' bg-transparent text-black/45'}`}>Monthly</button>
          <button onClick={() => setBilling('quarterly')} className={`flex items-center gap-2 px-[22px] py-[10px] border-none rounded-[2px] text-[0.75rem] font-bold tracking-[1px] uppercase cursor-pointer transition-[background,color,box-shadow] duration-250${billing === 'quarterly' ? ' bg-white text-[#111111] shadow-[0_1px_6px_rgba(0,0,0,0.1)]' : ' bg-transparent text-black/45'}`}>
            3 Months <span className="text-[0.58rem] tracking-[1px] font-bold text-white bg-[#D91A21] px-2 py-[2px] rounded-[2px]">Save ~14%</span>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-px bg-black/[0.07] lg:grid-cols-3">
          {/* BASIC */}
          <div className="relative bg-[#f9f9f9]">
            <div className="h-full p-[52px_44px] flex flex-col box-border sr-reveal">
              <h3 className="text-[clamp(1.5rem,3vw,1.9rem)] font-black uppercase tracking-[-0.5px] text-[#111111] mb-2">Basic</h3>
              <div className="flex items-baseline gap-[3px] mb-1.5">
                <span className="text-[1.3rem] font-black text-[#111111] [font-family:'Plus_Jakarta_Sans',sans-serif] leading-none self-start mt-2">$</span>
                <span className="text-[clamp(2.4rem,4vw,3.2rem)] font-black text-[#111111] [font-family:'Plus_Jakarta_Sans',sans-serif] leading-none transition-opacity duration-150">{billing === 'monthly' ? 350 : 300}</span>
                <div className="flex flex-col justify-end pb-1 ml-0.5">
                  <span className="text-[0.68rem] text-black/40 tracking-[1px] uppercase">/month</span>
                </div>
              </div>
              <p className="text-[0.72rem] text-black/35 tracking-[1px] mb-8 leading-[1.6]">For brands launching their social presence and establishing a consistent identity across key platforms.</p>
              <div className="w-full h-px bg-black/[0.08] mb-7" />
              <div className="flex flex-col gap-4 mb-1">
                {BASIC_SPEC.map(({ icon, strong, span }) => (
                  <div key={strong} className="flex items-start gap-[14px]">
                    <FontAwesomeIcon icon={icon} className="h-[0.85rem] w-[0.85rem] text-[#D91A21] mt-[3px] opacity-80 shrink-0 min-w-[16px]" />
                    <div className="flex flex-col gap-[2px]">
                      <strong className="text-[0.82rem] font-extrabold text-[#111111] tracking-[0.2px]">{strong}</strong>
                      <span className="text-[0.72rem] text-black/40 tracking-[0.5px]">{span}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full h-px bg-black/[0.08] my-7" />
              <ul className="list-none p-0 flex flex-col gap-[14px] flex-1 mb-6">
                {BASIC_FEATS.map(f => (
                  <li key={f} className="flex items-start gap-3 text-[0.82rem] text-black/60 leading-[1.5]">
                    <FontAwesomeIcon icon={faCheck} className="h-3 w-3 text-[#D91A21] mt-[3px] shrink-0 opacity-80" /> {f}
                  </li>
                ))}
                <li className="flex items-start gap-3 text-[0.82rem] text-black/65 leading-[1.5] p-3 rounded-[4px] bg-[rgba(217,26,33,0.05)] border border-[rgba(217,26,33,0.15)]">
                  <FontAwesomeIcon icon={faBolt} className="h-[0.75rem] w-[0.75rem] text-[#D91A21] mt-[3px] shrink-0" />
                  <span><strong className="text-[#D91A21]">Ad Boost Add-on</strong> — Extra charges apply for Meta ad campaign boosts</span>
                </li>
              </ul>
              <p className="text-[0.75rem] text-black/30 italic leading-[1.7] mb-8 pt-6 border-t border-black/[0.07]">&ldquo;Your brand, live and active — consistent posts, real engagement, and the option to amplify when you&apos;re ready.&rdquo;</p>
              <a href="mailto:appleboy285@gmail.com?subject=Basic Digital Marketing Package" className={`${btnSecondary} w-full justify-center`}>Get Started</a>
            </div>
          </div>

          {/* PREMIUM (featured) */}
          <div className="relative bg-white">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.6rem] tracking-[3px] uppercase text-white font-bold bg-[#D91A21] px-[18px] py-[6px] rounded-[0_0_6px_6px] z-[2] pointer-events-none">Most Popular</div>
            <div className="h-full p-[52px_44px] flex flex-col box-border sr-reveal sr-reveal-delay-1">
              <h3 className="text-[clamp(1.5rem,3vw,1.9rem)] font-black uppercase tracking-[-0.5px] text-[#111111] mb-2">Premium</h3>
              <div className="flex items-baseline gap-[3px] mb-1.5">
                <span className="text-[1.3rem] font-black text-[#111111] [font-family:'Plus_Jakarta_Sans',sans-serif] leading-none self-start mt-2">$</span>
                <span className="text-[clamp(2.4rem,4vw,3.2rem)] font-black text-[#111111] [font-family:'Plus_Jakarta_Sans',sans-serif] leading-none transition-opacity duration-150">{billing === 'monthly' ? 600 : 520}</span>
                <div className="flex flex-col justify-end pb-1 ml-0.5">
                  <span className="text-[0.68rem] text-black/40 tracking-[1px] uppercase">/month</span>
                </div>
              </div>
              <p className="text-[0.72rem] text-black/35 tracking-[1px] mb-8 leading-[1.6]">For brands ready to expand their reach — more platforms, richer content formats, and stronger visibility in your home market.</p>
              <div className="w-full h-px bg-black/[0.08] mb-7" />
              <div className="flex flex-col gap-4 mb-1">
                {PREMIUM_SPEC.map(({ icon, strong, span }) => (
                  <div key={strong} className="flex items-start gap-[14px]">
                    <FontAwesomeIcon icon={icon} className="h-[0.85rem] w-[0.85rem] text-[#D91A21] mt-[3px] opacity-80 shrink-0 min-w-[16px]" />
                    <div className="flex flex-col gap-[2px]">
                      <strong className="text-[0.82rem] font-extrabold text-[#111111] tracking-[0.2px]">{strong}</strong>
                      <span className="text-[0.72rem] text-black/40 tracking-[0.5px]">{span}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full h-px bg-black/[0.08] my-7" />
              <ul className="list-none p-0 flex flex-col gap-[14px] flex-1 mb-6">
                {PREMIUM_FEATS.map(f => (
                  <li key={f} className="flex items-start gap-3 text-[0.82rem] text-black/60 leading-[1.5]">
                    <FontAwesomeIcon icon={faCheck} className="h-3 w-3 text-[#D91A21] mt-[3px] shrink-0 opacity-80" /> {f}
                  </li>
                ))}
                <li className="flex items-start gap-3 text-[0.82rem] text-black/65 leading-[1.5] p-3 rounded-[4px] bg-[rgba(217,26,33,0.05)] border border-[rgba(217,26,33,0.15)]">
                  <FontAwesomeIcon icon={faBolt} className="h-[0.75rem] w-[0.75rem] text-[#D91A21] mt-[3px] shrink-0" />
                  <span><strong className="text-[#D91A21]">Ad Boost Add-on</strong> — Extra charges apply for Meta ad campaign boosts</span>
                </li>
              </ul>
              <p className="text-[0.75rem] text-black/30 italic leading-[1.7] mb-8 pt-6 border-t border-black/[0.07]">&ldquo;More platforms, more formats, more reach — the complete growth engine for your brand.&rdquo;</p>
              <a href="mailto:appleboy285@gmail.com?subject=Premium Digital Marketing Package" className={`${btnPrimary} w-full justify-center`}>Get Started <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" /></a>
            </div>
          </div>

          {/* CUSTOM */}
          <div className="relative bg-[#f9f9f9]">
            <div className="h-full p-[52px_44px] flex flex-col box-border sr-reveal sr-reveal-delay-2">
              <h3 className="text-[clamp(1.5rem,3vw,1.9rem)] font-black uppercase tracking-[-0.5px] text-[#111111] mb-2">Custom</h3>
              <div className="text-[clamp(1.6rem,3vw,2.2rem)] font-black text-[#111111] [font-family:'Plus_Jakarta_Sans',sans-serif] mb-1">Talk to us</div>
              <span className="text-[0.68rem] text-black/38 tracking-[1px] uppercase mb-5 block">Scope-based pricing</span>
              <p className="text-[0.72rem] text-black/35 tracking-[1px] mb-8 leading-[1.6]">For agencies, multi-brand businesses, and companies ready to dominate across markets, geographies, and every major platform.</p>
              <div className="w-full h-px bg-black/[0.08] mb-7" />
              <div className="flex flex-col gap-4 mb-1">
                {CUSTOM_SPEC.map(({ icon, strong, span }) => (
                  <div key={strong} className="flex items-start gap-[14px]">
                    <FontAwesomeIcon icon={icon} className="h-[0.85rem] w-[0.85rem] text-[#D91A21] mt-[3px] opacity-80 shrink-0 min-w-[16px]" />
                    <div className="flex flex-col gap-[2px]">
                      <strong className="text-[0.82rem] font-extrabold text-[#111111] tracking-[0.2px]">{strong}</strong>
                      <span className="text-[0.72rem] text-black/40 tracking-[0.5px]">{span}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full h-px bg-black/[0.08] my-7" />
              <ul className="list-none p-0 flex flex-col gap-[14px] flex-1 mb-6">
                {CUSTOM_FEATS.map(f => (
                  <li key={f} className="flex items-start gap-3 text-[0.82rem] text-black/60 leading-[1.5]">
                    <FontAwesomeIcon icon={faCheck} className="h-3 w-3 text-[#D91A21] mt-[3px] shrink-0 opacity-80" /> {f}
                  </li>
                ))}
              </ul>
              <p className="text-[0.75rem] text-black/30 italic leading-[1.7] mb-8 pt-6 border-t border-black/[0.07]">&ldquo;Everything, everywhere — built for brands that refuse to be contained by geography or platform limits.&rdquo;</p>
              <a href="mailto:appleboy285@gmail.com?subject=Custom Digital Marketing Package" className={`${btnSecondary} w-full justify-center`}>Discuss Your Project</a>
            </div>
          </div>
        </div>

        {/* Ad Enhancement note */}
        <div className="flex items-start gap-5 mt-12 p-[28px_32px] border border-[rgba(217,26,33,0.2)] border-l-[4px] border-l-[#D91A21] bg-[rgba(217,26,33,0.03)] rounded-[4px] sr-reveal">
          <FontAwesomeIcon icon={faBolt} className="h-[1.3rem] w-[1.3rem] text-[#D91A21] opacity-85 shrink-0 mt-[2px]" />
          <div>
            <strong className="text-[0.85rem] font-extrabold uppercase tracking-[1px] text-[#111111] block mb-2">Ad Enhancement</strong>
            <p className="text-[0.8rem] text-black/50 leading-[1.8] m-0">Available on Basic and Premium plans. Ad boosting and paid campaign management are available as an add-on at additional cost. Pricing depends on your budget and campaign scope. Included as a managed service in the Custom plan.</p>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-black/[0.08]" />

      {/* ── WHY ANIMHAUS ── */}
      <section id="dm-why" className={`${sectionCls} bg-[#f9f9f9]`}>
        <div className="max-w-[720px] mb-16 sr-reveal">
          <h2 className={h2Cls}>Marketing With<br />Creative Backbone.</h2>
          <p className="text-[clamp(0.9rem,2vw,1rem)] text-black/48 max-w-[520px] leading-[1.8] mt-4">We&apos;re not a traditional marketing agency. We&apos;re a creative studio that does marketing — and the difference shows.</p>
        </div>
        <div className="grid grid-cols-2 gap-px bg-black/[0.07] border border-black/[0.07] md:grid-cols-4">
          {[
            { icon: faPaintBrush, title: 'Creative-First Content',  desc: 'Every post is designed, not just written. Our creative roots mean your content looks premium — not templated.',    delay: ''  },
            { icon: faBullseye,   title: 'Audience Precision',      desc: 'We target the right audience in the right geography — no wasted spend, no irrelevant reach.',                      delay: '1' },
            { icon: faSyncAlt,    title: 'Consistent Output',       desc: 'Regular publishing schedules with zero drop-offs — your feed stays active and your audience stays engaged.',        delay: '2' },
            { icon: faShieldAlt,  title: 'Brand Safe',              desc: 'All content goes through a brand-aligned review process. Your voice, your values — always on message.',            delay: '3' },
          ].map(({ icon, title, desc, delay }) => (
            <div key={title} className={`bg-[#f9f9f9] p-[40px_28px] transition-[background] duration-[400ms] hover:bg-[#f5f5f5] sr-reveal${delay ? ` sr-reveal-delay-${delay}` : ''}`}>
              <FontAwesomeIcon icon={icon} className="h-[1.4rem] w-[1.4rem] text-[#D91A21] mb-5 block opacity-85" />
              <h4 className="text-[0.95rem] font-extrabold uppercase tracking-[1px] text-[#111111] mb-[10px]">{title}</h4>
              <p className="text-[0.8rem] text-black/48 leading-[1.7]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-black/[0.08]" />

      {/* ── CTA ── */}
      <section id="sr-cta" className="bg-[#111111] text-center px-[5%] py-[160px] relative overflow-hidden md:px-[10%] md:py-[180px]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vmax] h-[80vmax] bg-[radial-gradient(circle,rgba(217,26,33,0.08)_0%,transparent_60%)] pointer-events-none" aria-hidden="true" />
        <div className="sr-reveal relative z-[1]">
          <span className="text-[0.65rem] tracking-[5px] uppercase text-[#D91A21] font-bold flex justify-center mb-4">Ready to Grow?</span>
          <h2 className="[font-family:'Plus_Jakarta_Sans',sans-serif] text-[clamp(2.5rem,8vw,6.5rem)] font-black uppercase tracking-[-3px] leading-[0.88] text-white mb-7">Your Brand Deserves<br />to Be <em className="not-italic text-[#D91A21]">Everywhere.</em></h2>
          <p className="text-[clamp(0.9rem,2vw,1.05rem)] text-white/40 max-w-[520px] mx-auto mb-12 leading-[1.8]">Tell us about your brand and we&apos;ll come back with a social strategy proposal within 24 hours.</p>
          <div className="flex flex-wrap gap-[14px] justify-center">
            <a href="mailto:appleboy285@gmail.com" className={btnPrimary}>Book a Call <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" /></a>
            <TransitionLink href="/#contact" className={btnSecondaryDark}>Full Enquiry Form</TransitionLink>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
