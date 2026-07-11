import type { Metadata } from 'next';
import CartoonsClient from './client';

export const metadata: Metadata = {
  title: 'Cartoon Production',
  description: 'AnimHaus creates original cartoons — from brand characters and series pilots to short films and motion graphics. Cinematic. Character-driven. Memorable.',
  keywords: ['cartoon production India', '2D animation studio', 'brand characters', 'cartoon series', 'motion graphics', 'AnimHaus'],
  alternates: { canonical: 'https://animhaus.com/cartoons' },
  openGraph: {
    title: 'Cartoon Production — AnimHaus',
    description: 'Original cartoons built for brands, creators, and audiences. Character-driven. Cinematic.',
    url: 'https://animhaus.com/cartoons',
    images: [{ url: 'https://pub-936a2a79cb9b473fabc46e4ad35a3e2e.r2.dev/animhaus-logo-mascot.png' }],
  },
};

export default function CartoonsPage() {
  return <CartoonsClient />;
}
