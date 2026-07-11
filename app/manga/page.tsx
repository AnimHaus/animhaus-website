import type { Metadata } from 'next';
import MangaClient from './client';

export const metadata: Metadata = {
  title: 'Manga & Sequential Art — AnimHaus',
  description:
    'AnimHaus creates original manga and sequential art — from standalone chapters and webtoons to full volumes and character concept art. Panel-perfect storytelling.',
  keywords:
    'manga creation India, original manga studio, webtoon art, sequential art, manga artist, manga illustration, AnimHaus',
  authors: [{ name: 'AnimHaus' }],
  openGraph: {
    title: 'Manga & Sequential Art — AnimHaus',
    description:
      'Original manga and sequential art — from webtoons and one-shots to full volume series.',
    images: ['https://pub-936a2a79cb9b473fabc46e4ad35a3e2e.r2.dev/animhaus-logo-mascot.png'],
    url: 'https://animhaus.com/manga',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://animhaus.com/manga' },
};

export default function MangaPage() {
  return <MangaClient />;
}
