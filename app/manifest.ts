import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AnimHaus Studios',
    short_name: 'AnimHaus',
    description:
      'AnimHaus Studios — animation house & visual engineering studio in Kolkata. Anime, manga, comics, games, and digital art.',
    start_url: '/',
    display: 'standalone',
    background_color: '#111111',
    theme_color: '#D91A21',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: 'https://pub-936a2a79cb9b473fabc46e4ad35a3e2e.r2.dev/favicon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
