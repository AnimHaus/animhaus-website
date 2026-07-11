import type { Metadata } from 'next';
import DigitalMarketingClient from './client';

export const metadata: Metadata = {
  title: 'Digital Marketing Services',
  description: 'AnimHaus delivers data-driven digital marketing for brands across India — social media management, content creation, ad campaigns, and multi-platform growth strategies.',
  keywords: ['digital marketing India', 'social media marketing', 'Meta ads', 'Instagram marketing', 'Facebook marketing', 'YouTube marketing', 'brand growth', 'AnimHaus'],
  alternates: { canonical: 'https://animhaus.com/digital-marketing' },
  openGraph: {
    title: 'Digital Marketing Services — AnimHaus',
    description: 'Grow your brand across every platform. Social media management, content strategy, and ad campaigns built for real results.',
    url: 'https://animhaus.com/digital-marketing',
    images: [{ url: 'https://pub-936a2a79cb9b473fabc46e4ad35a3e2e.r2.dev/animhaus-logo-mascot.png' }],
  },
};

export default function DigitalMarketingPage() {
  return <DigitalMarketingClient />;
}
