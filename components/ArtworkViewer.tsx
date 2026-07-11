'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import TransitionLink from '@/components/TransitionLink';

interface ArtworkProject {
  title: string;
  tagline?: string;
  year: string;
  category: string;
  theme: string;
  description: string;
  cover: string;
  credits: Record<string, string>;
}

interface ArtworkData {
  [key: string]: ArtworkProject;
}

export default function ArtworkViewer({ projectId, objectPosition = 'center' }: { projectId: string; objectPosition?: string }) {
  const [project, setProject] = useState<ArtworkProject | null>(null);

  useEffect(() => {
    fetch('/data/artworks.json')
      .then((r) => r.json())
      .then((data: ArtworkData) => {
        const p = data[projectId] || Object.values(data)[0];
        setProject(p);
      });
  }, [projectId]);

  useEffect(() => {
    import('lenis').then(({ default: Lenis }) => {
      const lenis = new Lenis();
      let raf: number;
      function animate(time: number) { lenis.raf(time); raf = requestAnimationFrame(animate); }
      raf = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(raf);
    });
  }, []);

  if (!project) return null;

  return (
    <>
      {/* Hero */}
      <section className="min-h-screen h-screen relative flex items-end justify-start overflow-hidden">
        <Image
          id="coverImage"
          src={project.cover}
          alt={project.title}
          fill
          quality={100}
          style={{ objectFit: 'cover', objectPosition }}
          priority
        />
        <div className="relative z-[2] px-[5%] pb-10 pt-[120px] text-white w-full md:px-[8%] md:pb-[60px] lg:px-[10%] lg:pb-20"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)' }}>
          <h1 id="title" className="text-[clamp(2.5rem,10vw,6rem)] font-[900] uppercase leading-[0.9] tracking-[-2px] mb-[15px] md:tracking-[-3px] lg:tracking-[-5px]">{project.title}</h1>
          <p id="tagline" className="text-[clamp(0.8rem,2vw,1.2rem)] tracking-[3px] uppercase text-[#D91A21] md:tracking-[5px] lg:tracking-[8px]">{project.tagline}</p>
        </div>
      </section>

      {/* Info */}
      <section className="px-[5%] py-[60px] grid grid-cols-1 gap-10 items-start md:grid-cols-[1.5fr_1fr] md:gap-[60px] md:py-20 md:px-[8%] lg:grid-cols-[2fr_1fr] lg:gap-20 lg:py-[100px] lg:px-[10%]">
        <div>
          <h2 className="text-[clamp(2rem,6vw,2.5rem)] uppercase mb-5 font-[900]">About</h2>
          <p id="description" className="text-[clamp(0.95rem,2.5vw,1.1rem)] text-[#444] leading-[1.7]">{project.description}</p>
        </div>
        <div>
          <ul className="list-none p-0">
            <li className="text-[clamp(0.9rem,2vw,1rem)] py-3 border-b border-[#ddd] last:border-b-0 md:py-[15px]">
              <strong className="font-[800] uppercase text-[0.75rem] tracking-[1px] mr-[10px] text-[#111]">Year:</strong>
              <span id="year" className="text-[#666]">{project.year}</span>
            </li>
            <li className="text-[clamp(0.9rem,2vw,1rem)] py-3 border-b border-[#ddd] last:border-b-0 md:py-[15px]">
              <strong className="font-[800] uppercase text-[0.75rem] tracking-[1px] mr-[10px] text-[#111]">Category:</strong>
              <span id="category" className="text-[#666]">{project.category}</span>
            </li>
            <li className="text-[clamp(0.9rem,2vw,1rem)] py-3 border-b border-[#ddd] last:border-b-0 md:py-[15px]">
              <strong className="font-[800] uppercase text-[0.75rem] tracking-[1px] mr-[10px] text-[#111]">Theme:</strong>
              <span id="theme" className="text-[#666]">{project.theme}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Credits */}
      <section id="credits" className="px-[5%] py-[60px] md:px-[8%] md:py-20 lg:px-[10%] lg:py-[100px]
        before:content-['Credits'] before:block before:text-[clamp(1.8rem,5vw,2.5rem)] before:font-[900] before:uppercase before:mb-[30px] before:tracking-[-1px]">
        {Object.entries(project.credits).map(([key, value]) => (
          <div key={key} className="text-[clamp(0.9rem,2vw,1rem)] py-3 border-b border-[#eee] last:border-b-0 md:py-[15px]">
            <strong className="font-[800] uppercase text-[0.75rem] tracking-[1px] mr-[10px] text-[#111]">{key}:</strong>
            <span className="text-[#666]">{value}</span>
          </div>
        ))}
      </section>
    </>
  );
}
