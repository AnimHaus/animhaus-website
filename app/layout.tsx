import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import IntroLoader from "@/components/IntroLoader";

export const metadata: Metadata = {
  metadataBase: new URL("https://animhaus.com"),
  title: {
    default: "AnimHaus | Animation House & Visual Engineering Studio Kolkata",
    template: "%s — AnimHaus",
  },
  description:
    "AnimHaus Studios — your animation house in Kolkata. A high-octane creative collective specializing in cinematic excellence, visual engineering, and emotional storytelling through anime, manga, comics, games, and digital art.",
  keywords: [
    "AnimHaus",
    "AnimHaus Studios",
    "animation house",
    "anime house",
    "anim house",
    "anime haus",
    "animation haus",
    "animehouse",
    "anim haus",
    "animation studio Kolkata",
    "cinematic animation",
    "visual engineering",
    "storytelling",
    "digital art",
    "manga",
    "anime",
    "comics",
    "games",
    "Kolkata animation studio",
    "creative studio India",
  ],
  authors: [{ name: "AnimHaus Studios" }],
  creator: "AnimHaus Studios",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://animhaus.com",
    siteName: "AnimHaus Studios",
    title: "AnimHaus | Animation House & Visual Engineering Studio",
    description:
      "Crafting worlds through visual engineering and emotional storytelling. Join the house of cinematic excellence.",
    images: [
      {
        url: "https://pub-936a2a79cb9b473fabc46e4ad35a3e2e.r2.dev/animhaus-logo-mascot.png",
        width: 1200,
        height: 630,
        alt: "AnimHaus Studios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AnimHaus | Animation House & Visual Engineering Studio",
    description: "Crafting worlds through visual engineering and emotional storytelling.",
    images: ["https://pub-936a2a79cb9b473fabc46e4ad35a3e2e.r2.dev/animhaus-logo-mascot.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "https://pub-936a2a79cb9b473fabc46e4ad35a3e2e.r2.dev/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://animhaus.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AnimHaus Studios',
    alternateName: ['AnimHaus', 'Anim Haus', 'Anime Haus'],
    url: 'https://animhaus.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: 'https://animhaus.com/?q={search_term_string}' },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Geist:wght@100..900&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <Suspense fallback={null}>
          <IntroLoader />
        </Suspense>
        <PageTransition />
        {children}
      </body>
    </html>
  );
}

