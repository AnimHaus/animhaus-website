import type { Metadata } from 'next';
import WebSystemsClient from './client';

export const metadata: Metadata = {
  title: 'Digital Infrastructure Services',
  description: 'AnimHaus builds scalable digital infrastructure for modern businesses — websites, dashboards, automation systems, multilingual platforms, and operational tools. Based in India.',
  keywords: ['digital infrastructure', 'business website India', 'admin dashboard', 'automation system', 'multilingual platform', 'web development India', 'startup MVP', 'AnimHaus'],
  alternates: { canonical: 'https://animhaus.com/web-systems' },
  openGraph: {
    title: 'Digital Infrastructure Services — AnimHaus',
    description: 'We build systems, not just websites. Scalable digital infrastructure for modern businesses across India.',
    url: 'https://animhaus.com/web-systems',
    images: [{ url: 'https://pub-936a2a79cb9b473fabc46e4ad35a3e2e.r2.dev/animhaus-logo-mascot.png' }],
  },
};

export default function WebSystemsPage() {
  return <WebSystemsClient />;
}
