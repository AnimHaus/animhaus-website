import type { Metadata } from 'next';
import AnimeClient from './client';

export const metadata: Metadata = {
  title: 'Anime Production',
  description: 'AnimHaus produces original anime — emotionally driven, cinematically crafted, and built for a global audience. Original series, OVAs, music videos, and more.',
  keywords: ['anime production India', 'original anime studio', 'anime series', 'OVA production', 'anime music video', 'AnimHaus'],
  alternates: { canonical: 'https://animhaus.com/anime' },
  openGraph: {
    title: 'Anime Production — AnimHaus',
    description: 'Original anime crafted for emotional depth, cinematic quality, and lasting cultural impact.',
    url: 'https://animhaus.com/anime',
    images: [{ url: 'https://pub-936a2a79cb9b473fabc46e4ad35a3e2e.r2.dev/animhaus-logo-mascot.png' }],
  },
};

export default function AnimePage() {
  return <AnimeClient />;
}
