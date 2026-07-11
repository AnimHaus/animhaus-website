import TransitionLink from '@/components/TransitionLink';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white text-[#111] pt-[50px] px-[5%] border-t border-[#eee] md:pt-[60px] md:px-[8%] lg:pt-20 lg:px-[10%]">
      <div className="grid grid-cols-1 gap-[30px] mb-10 sm:grid-cols-2 sm:gap-[35px] lg:grid-cols-[1.5fr_2fr_1.5fr_1fr] lg:gap-10 lg:mb-[60px]">
        <div>
          <Image
            src="https://cdn.animhaus.com/animhaus-logo-mascot.png"
            alt="AnimHaus"
            width={150}
            height={150}
          />
          <p className="text-[0.85rem] text-[#666] mt-3 leading-[1.6]">Human-crafted. No AI shortcuts.</p>
        </div>
        <div>
          <h3 className="text-[0.9rem] uppercase mb-[15px] tracking-[1px] font-[800] md:mb-5">Contact</h3>
          <p className="text-[0.85rem] text-[#666] mb-2 leading-[1.6]">appleboy285@gmail.com</p>
        </div>
        <div>
          <h3 className="text-[0.9rem] uppercase mb-[15px] tracking-[1px] font-[800] md:mb-5">Services</h3>
          <TransitionLink href="/web-systems" className="text-[0.85rem] text-[#666] no-underline block mb-2 hover:text-[#D91A21] transition-colors">Digital Infrastructure</TransitionLink>
          <TransitionLink href="/web-systems#sr-pricing" className="text-[0.85rem] text-[#666] no-underline block mb-2 hover:text-[#D91A21] transition-colors">Packages &amp; Pricing</TransitionLink>
          <TransitionLink href="/web-systems#sr-retainer" className="text-[0.85rem] text-[#666] no-underline block mb-2 hover:text-[#D91A21] transition-colors">Managed Support</TransitionLink>
        </div>
        <div>
          <h3 className="text-[0.9rem] uppercase mb-[15px] tracking-[1px] font-[800] md:mb-5">Follow us on</h3>
          <a href="https://www.behance.net/appleboycussdem" target="_blank" rel="noopener noreferrer" className="text-[0.85rem] text-[#666] no-underline block mb-2 hover:text-[#D91A21] transition-colors">Behance</a>
          <a href="https://www.youtube.com/@appleboycussdem" target="_blank" rel="noopener noreferrer" className="text-[0.85rem] text-[#666] no-underline block mb-2 hover:text-[#D91A21] transition-colors">YouTube</a>
        </div>
      </div>
      <div className="text-[#444] py-5 mx-[-5%] px-[5%] text-center text-[0.65rem] tracking-[1px] md:mx-[-8%] md:px-[8%] md:text-[0.7rem] lg:mx-[-10%] lg:px-[10%]">
        © 2026 THE ANIMHAUS COLLECTION. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}