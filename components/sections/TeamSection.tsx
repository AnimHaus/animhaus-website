import Image from 'next/image';

export default function TeamSection() {
  return (
    <section
      id="team"
      className="relative px-[5%] py-20 md:px-[8%] md:py-[50px] lg:px-[10%] lg:py-20"
    >
      {/* outline watermark */}
      <div
        className="absolute font-black text-transparent pointer-events-none -z-[1] top-[10px] left-[5%] whitespace-nowrap hidden md:block"
        style={{ fontSize: '12vw', WebkitTextStroke: '2px rgba(17,17,17,0.1)' }}
      >
        CREATIVES
      </div>

      <h2
        className="mb-5 uppercase font-black md:mb-[30px]"
        style={{ fontSize: 'clamp(1.8rem,5vw,2.5rem)' }}
      >
        The Team
      </h2>

      <div className="grid grid-cols-1 gap-[30px] mt-[30px] sm:grid-cols-2 sm:gap-[25px] lg:grid-cols-[repeat(2,minmax(0,420px))] lg:gap-10 lg:justify-center">
        {/* A bot */}
        <div
          className="team-card group reveal opacity-0 translate-y-10 transition-all duration-1000 ease-in-out [&.active]:opacity-100 [&.active]:translate-y-0 text-left"
          id="ab-card"
        >
          <div className="relative w-full aspect-square bg-[#f9f9f9] rounded-[4px] overflow-hidden mb-[15px]">
            <Image
              className="img-bw absolute top-0 left-0 w-full h-full object-cover z-[1] opacity-100 group-hover:opacity-0 transition-[opacity,transform] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              src="https://pub-936a2a79cb9b473fabc46e4ad35a3e2e.r2.dev/team_assets/ab_bw.png"
              alt="A bot"
              width={400} height={500}
            />
            <Image
              className="img-color absolute top-0 left-0 w-full h-full object-cover z-[2] opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-[opacity,transform] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              src="https://pub-936a2a79cb9b473fabc46e4ad35a3e2e.r2.dev/team_assets/ab.png"
              alt="A bot color"
              width={400} height={500}
            />
            <div
              className="team-img-overlay absolute bottom-0 left-0 right-0 z-[3] pt-5 px-[14px] pb-[14px] opacity-0 translate-y-[6px] group-hover:opacity-100 group-hover:translate-y-0 transition-[opacity,transform] duration-[400ms] ease-in-out pointer-events-none"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)' }}
            >
              <p className="text-[0.72rem] text-white leading-[1.5] italic m-0">
                Jack of all trades, master of none,<br />I do everything, just for fun.
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-[clamp(1rem,2.5vw,1.1rem)] uppercase font-bold tracking-[1px]">A bot</h4>
            <p
              className="team-role text-[0.75rem] font-bold uppercase mt-[5px]"
              style={{ color: 'var(--red)' }}
              data-default="Apple Boy Cuss Dem"
              data-hover="Abiskar Das"
            >
              Apple Boy Cuss Dem
            </p>
          </div>
        </div>

        {/* tech mech */}
        <div
          className="team-card group reveal opacity-0 translate-y-10 transition-all duration-1000 ease-in-out [&.active]:opacity-100 [&.active]:translate-y-0 text-left"
          id="draunz-card"
        >
          <div className="relative w-full aspect-square bg-[#f9f9f9] rounded-[4px] overflow-hidden mb-[15px]">
            <Image
              className="img-bw absolute top-0 left-0 w-full h-full object-cover z-[1] opacity-100 group-hover:opacity-0 transition-[opacity,transform] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              src="https://pub-936a2a79cb9b473fabc46e4ad35a3e2e.r2.dev/team_assets/draunz_bw.png"
              alt="tech mech"
              width={400} height={500}
            />
            <Image
              className="img-color absolute top-0 left-0 w-full h-full object-cover z-[2] opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-[opacity,transform] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              src="https://pub-936a2a79cb9b473fabc46e4ad35a3e2e.r2.dev/team_assets/draunz.png"
              alt="tech mech color"
              width={400} height={500}
            />
            <div
              className="team-img-overlay absolute bottom-0 left-0 right-0 z-[3] pt-5 px-[14px] pb-[14px] opacity-0 translate-y-[6px] group-hover:opacity-100 group-hover:translate-y-0 transition-[opacity,transform] duration-[400ms] ease-in-out pointer-events-none"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)' }}
            >
              <p className="text-[0.72rem] text-white leading-[1.5] italic m-0">
                Build fast, break limits, learn it all,<br />From code to chaos — I handle the call.
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-[clamp(1rem,2.5vw,1.1rem)] uppercase font-bold tracking-[1px]">tech mech</h4>
            <p
              className="team-role text-[0.75rem] font-bold uppercase mt-[5px]"
              style={{ color: 'var(--red)' }}
              data-default="DRAUNZLER"
              data-hover="Arijit Saha"
            >
              DRAUNZLER
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
