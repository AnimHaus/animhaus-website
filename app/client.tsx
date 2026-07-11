'use client';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ShowreelSection from '@/components/sections/ShowreelSection';
import WorksGallerySection from '@/components/sections/WorksGallerySection';
import ServicesSection from '@/components/sections/ServicesSection';
import TeamSection from '@/components/sections/TeamSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

export default function HomeClient() {
  useEffect(() => {
    // ── Team card role hover swap ─────────────────────────────────────────
    ['ab-card', 'draunz-card'].forEach((id) => {
      const card = document.getElementById(id);
      if (!card) return;
      const role = card.querySelector('.team-role') as HTMLElement | null;
      if (!role) return;
      const defaultText = role.dataset.default ?? '';
      const hoverText   = role.dataset.hover   ?? '';
      card.addEventListener('mouseenter', () => { role.textContent = hoverText; });
      card.addEventListener('mouseleave', () => { role.textContent = defaultText; });
    });

    // ── File input display ────────────────────────────────────────────────
    const fileInput      = document.getElementById('portfolio')     as HTMLInputElement | null;
    const fileNameDisplay = document.getElementById('fileNameDisplay') as HTMLElement   | null;
    const uploadBox      = document.querySelector('.upload-box')     as HTMLElement      | null;
    if (fileInput && fileNameDisplay && uploadBox) {
      fileInput.addEventListener('change', () => {
        if (fileInput.files && fileInput.files.length > 0) {
          fileNameDisplay.textContent = fileInput.files[0].name;
          uploadBox.classList.add('has-file');
        } else {
          fileNameDisplay.textContent = '';
          uploadBox.classList.remove('has-file');
        }
      });
    }

    // ── Contact form submit state ─────────────────────────────────────────
    const contactForm      = document.getElementById('contactForm')    as HTMLFormElement   | null;
    const contactStatus    = document.getElementById('contactStatus')  as HTMLElement       | null;
    const contactSubmitBtn = contactForm?.querySelector('button[type="submit"]') as HTMLButtonElement | null;
    const requiredTextFields = contactForm?.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
      'input[required]:not([type="file"]), textarea[required]'
    );

    function updateContactSubmitState() {
      if (!contactSubmitBtn || !fileInput) return;
      const allFilled = requiredTextFields
        ? Array.from(requiredTextFields).every((f) => f.value.trim() !== '')
        : false;
      const hasFile = !!(fileInput.files && fileInput.files.length > 0);
      contactSubmitBtn.disabled = !(allFilled && hasFile);
    }

    requiredTextFields?.forEach((f) => {
      f.addEventListener('input',  updateContactSubmitState);
      f.addEventListener('change', updateContactSubmitState);
    });
    fileInput?.addEventListener('change', updateContactSubmitState);
    updateContactSubmitState();

    if (contactForm) {
      contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (contactStatus) contactStatus.style.display = 'none';
        if (!contactForm.reportValidity()) return;
        const formData = new FormData(contactForm);
        const res = await fetch('https://formsubmit.co/ajax/appleboy285@gmail.com', {
          method: 'POST',
          body: formData,
        });
        if (res.ok) {
          if (contactStatus) contactStatus.style.display = 'block';
          contactForm.reset();
          if (fileNameDisplay) fileNameDisplay.textContent = '';
          uploadBox?.classList.remove('has-file');
          updateContactSubmitState();
        }
      });
    }

    // ── GSAP + Lenis ──────────────────────────────────────────────────────
    let raf: number;

    Promise.all([
      import('lenis'),
      import('gsap'),
      import('gsap/ScrollTrigger'),
    ]).then(([{ default: Lenis }, { gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis();
      (window as Window & { _lenis?: InstanceType<typeof Lenis> })._lenis = lenis;

      function animate(time: number) {
        lenis.raf(time);
        ScrollTrigger.update();
        raf = requestAnimationFrame(animate);
      }
      raf = requestAnimationFrame(animate);

      // Hero parallax
      gsap.to('.hero-bg', {
        scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true },
        scale: 1.5,
        y: 100,
      });

      // Hero title entrance is handled by HeroSection (listens for intro:done event)

      // Reveal on scroll
      document.querySelectorAll('.reveal').forEach((el) => {
        ScrollTrigger.create({
          trigger: el, start: 'top 85%',
          onEnter: () => el.classList.add('active'),
        });
      });

      // Outline text parallax (desktop)
      if (window.innerWidth >= 768) {
        gsap.utils.toArray<HTMLElement>('.outline-bg').forEach((el) => {
          gsap.fromTo(el, { x: 0 }, {
            x: 150, ease: 'none',
            scrollTrigger: { trigger: el, start: 'top 90%', end: 'bottom 10%', scrub: true },
          });
        });
      }

      // Showreel clip-path reveal
      gsap.fromTo('.video-container',
        { clipPath: 'inset(6% 4% 6% 4%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', ease: 'none', scrollTrigger: { trigger: '#showreel', start: 'top 85%', end: 'top 30%', scrub: 1 } }
      );

      // Showreel video controls
      const video          = document.getElementById('showreelVideo') as HTMLVideoElement | null;
      const overlay        = document.getElementById('videoOverlay');
      const soundBtn       = document.getElementById('soundToggle');
      const videoContainer = document.querySelector<HTMLElement>('.video-container');

      if (video && overlay && soundBtn && videoContainer) {
        video.muted = true;
        video.play().catch(() => {});

        overlay.addEventListener('click', () => {
          video.muted = false;
          video.play();
          overlay.classList.add('opacity-0', 'pointer-events-none');
          soundBtn.classList.add('show');
          (document.getElementById('soundIconMute') as HTMLElement | null)?.style.setProperty('display', 'none');
          (document.getElementById('soundIconUp')   as HTMLElement | null)?.style.setProperty('display', '');
        });

        soundBtn.addEventListener('click', () => {
          video.muted = !video.muted;
          (document.getElementById('soundIconMute') as HTMLElement | null)?.style.setProperty('display', video.muted ? '' : 'none');
          (document.getElementById('soundIconUp')   as HTMLElement | null)?.style.setProperty('display', video.muted ? 'none' : '');
        });

        ScrollTrigger.create({
          trigger: videoContainer, start: 'top bottom', end: 'bottom top',
          onLeave: () => {
            video.muted = true;
            (document.getElementById('soundIconMute') as HTMLElement | null)?.style.setProperty('display', '');
            (document.getElementById('soundIconUp')   as HTMLElement | null)?.style.setProperty('display', 'none');
          },
          onLeaveBack: () => {
            video.muted = true;
            (document.getElementById('soundIconMute') as HTMLElement | null)?.style.setProperty('display', '');
            (document.getElementById('soundIconUp')   as HTMLElement | null)?.style.setProperty('display', 'none');
          },
        });
      }

      // Works gallery — scroll-scrubbed masked text reveal
      const worksSection = document.getElementById('works');
      const ghInners = gsap.utils.toArray<HTMLElement>('.gh-line-inner');
      const ghSub    = document.querySelector<HTMLElement>('.gh-sub-inner');
      if (worksSection && ghInners.length) {
        const allEls: HTMLElement[] = [...ghInners, ...(ghSub ? [ghSub] : [])];
        gsap.set(allEls, { yPercent: 105 });
        if (ghSub) gsap.set(ghSub, { opacity: 0 });
        allEls.forEach((el, i) => {
          const offset = i * 0.06;
          gsap.to(el, {
            yPercent: 0, opacity: 1, ease: 'power2.out',
            scrollTrigger: {
              trigger: worksSection,
              start: `top ${75 - offset * 100}%`,
              end:   `top ${30 - offset * 100}%`,
              scrub: 1.2,
            },
          });
        });
      }

      // pg-item scroll parallax
      const pgItems = document.querySelectorAll<HTMLElement>('.pg-item');
      const strength = 0.35;
      function updateParallax() {
        pgItems.forEach((item) => {
          const rect = item.getBoundingClientRect();
          const viewH = window.innerHeight;
          let progress = (viewH - rect.top) / (viewH + rect.height);
          progress = Math.max(0, Math.min(1, progress));
          const shift = (progress - 0.5) * strength * 100;
          const img = item.querySelector<HTMLElement>('.pg-img-wrap img');
          if (img) img.style.transform = `translateY(${shift}%)`;
        });
      }
      window.addEventListener('scroll', updateParallax, { passive: true });
      window.addEventListener('resize', updateParallax, { passive: true });
      updateParallax();

      // Services stacked scaleX shrink animation
      const mm = gsap.matchMedia();
      function initServicesStackWidth(shrinkStep: number, minScaleX: number, startPoint: string) {
        const cards = gsap.utils.toArray<HTMLElement>('#services .service-row');
        gsap.set(cards, { transformOrigin: 'center top', willChange: 'transform' });
        ScrollTrigger.create({
          trigger: '#services',
          start: startPoint,
          end: 'bottom bottom',
          scrub: true,
          onUpdate: (self) => {
            cards.forEach((card, i) => {
              const passed = Math.max(0, self.progress * (cards.length - 1) - i);
              gsap.set(card, { scaleX: Math.max(minScaleX, 1 - passed * shrinkStep) });
            });
          },
        });
      }
      mm.add('(max-width: 767px)', () => { initServicesStackWidth(0.03, 0.86, 'top top+=76'); });
      mm.add('(min-width: 768px)', () => { initServicesStackWidth(0.045, 0.78, 'top top'); });
    });

    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ShowreelSection />
      <WorksGallerySection />
      <ServicesSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </>
  );
}
