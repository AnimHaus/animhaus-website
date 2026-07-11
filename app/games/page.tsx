import type { Metadata } from 'next';
import GamesClient from './client';

const MODEL_URL =
  'https://pub-936a2a79cb9b473fabc46e4ad35a3e2e.r2.dev/Meshy_AI_White_Xbox_Controller_0709222649_texture.glb';

export const metadata: Metadata = {
  title: 'Game Art & Development',
  description: 'AnimHaus creates game art and develops original games — concept art, character design, environment art, game UI, and full indie game production.',
  keywords: ['game art studio India', 'concept art', 'character design games', 'indie game development', 'environment art', 'game UI', 'AnimHaus'],
  alternates: { canonical: 'https://animhaus.com/games' },
  openGraph: {
    title: 'Game Art & Development — AnimHaus',
    description: 'Game art, concept art, and full indie game development — from first concept to playable build.',
    url: 'https://animhaus.com/games',
    images: [{ url: 'https://pub-936a2a79cb9b473fabc46e4ad35a3e2e.r2.dev/animhaus-logo-mascot.png' }],
  },
};

export default function GamesPage() {
  return (
    <>
      {/* Preload the GLB at HTML parse time — before any JS runs */}
      <link rel="preload" href={MODEL_URL} as="fetch" crossOrigin="anonymous" />
      <GamesClient />
    </>
  );
}
