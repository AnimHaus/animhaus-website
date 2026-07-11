import type { Metadata } from 'next';
import ComicsClient from './client';

export const metadata: Metadata = {
  title: 'Comics & Graphic Novels',
  description: 'AnimHaus creates original comics and graphic novels — full-colour superhero books, indie graphic novels, web comics, and illustrated narratives built to last.',
  keywords: ['comic book creation India', 'graphic novel studio', 'indie comics', 'superhero comics', 'illustrated story', 'AnimHaus'],
  alternates: { canonical: 'https://animhaus.com/comics' },
  openGraph: {
    title: 'Comics & Graphic Novels — AnimHaus',
    description: 'Original comics and graphic novels — from independent creator books to full superhero universe launches.',
    url: 'https://animhaus.com/comics',
    images: [{ url: 'https://pub-936a2a79cb9b473fabc46e4ad35a3e2e.r2.dev/animhaus-logo-mascot.png' }],
  },
};

export default function ComicsPage() {
  return <ComicsClient />;
}
