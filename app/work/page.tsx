import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArtworkViewer from '@/components/ArtworkViewer';

export const metadata: Metadata = {
  title: 'Work | Portfolio',
  description: 'Explore cinematic artworks and visual engineering projects by AnimHaus Studios.',
  alternates: { canonical: 'https://animhaus.com/work' },
  openGraph: {
    title: 'Artwork | AnimHaus Studios',
    description: 'Explore cinematic artworks and visual engineering projects by AnimHaus Studios.',
    url: 'https://animhaus.com/work',
    images: [{ url: 'https://pub-936a2a79cb9b473fabc46e4ad35a3e2e.r2.dev/animhaus-mascot.svg' }],
  },
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <ArtworkViewer projectId="shurer-dhara" />
      <Footer />
    </>
  );
}
