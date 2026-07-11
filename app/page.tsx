import type { Metadata } from 'next';
import HomeClient from './client';

export const metadata: Metadata = {
  title: 'AnimHaus | Animation House & Visual Engineering Studio Kolkata',
  description: 'AnimHaus Studios — your animation house in Kolkata. A high-octane creative collective specializing in cinematic excellence, visual engineering, and emotional storytelling through anime, manga, comics, games, and digital art.',
  keywords: ['AnimHaus','AnimHaus Studios','animation house','anime house','anim house','anime haus','animation haus','animehouse','anim haus','animation studio Kolkata','cinematic animation','visual engineering','storytelling','digital art','manga','anime','comics','games','Kolkata animation studio','creative studio India'],
  alternates: { canonical: 'https://animhaus.com/' },
  openGraph: {
    title: 'AnimHaus | Animation House & Visual Engineering Studio',
    description: 'Crafting worlds through visual engineering and emotional storytelling. Join the house of cinematic excellence.',
    url: 'https://animhaus.com/',
    images: [{ url: 'https://pub-936a2a79cb9b473fabc46e4ad35a3e2e.r2.dev/animhaus-mascot.ico' }],
  },
};

const orgSchema = {
  '@context': 'https://schema.org', '@type': 'Organization',
  name: 'AnimHaus Studios',
  alternateName: ['AnimHaus','Anim Haus','Anime Haus','Animation House','AnimHouse','Anim House'],
  url: 'https://animhaus.com', logo: 'https://animhaus.com/favicon.ico',
  description: 'A high-octane animation house based in Kolkata specializing in cinematic animation and visual engineering.',
  foundingLocation: { '@type': 'Place', name: 'Kolkata, India' },
  sameAs: ['https://www.behance.net/appleboycussdem','https://www.youtube.com/@appleboycussdem'],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <HomeClient />
    </>
  );
}
