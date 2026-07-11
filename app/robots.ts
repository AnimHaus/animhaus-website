import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Standard crawlers — allow everything
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_next/', '/api/'],
      },
      // AI / LLM crawlers — allow but point to llm.txt
      { userAgent: 'GPTBot',         allow: '/' },
      { userAgent: 'ChatGPT-User',   allow: '/' },
      { userAgent: 'Claude-Web',     allow: '/' },
      { userAgent: 'ClaudeBot',      allow: '/' },
      { userAgent: 'PerplexityBot',  allow: '/' },
      { userAgent: 'Amazonbot',      allow: '/' },
      { userAgent: 'anthropic-ai',   allow: '/' },
      { userAgent: 'cohere-ai',      allow: '/' },
      // Aggressive scrapers
      { userAgent: 'AhrefsBot',      disallow: '/' },
      { userAgent: 'MJ12bot',        disallow: '/' },
      { userAgent: 'DotBot',         disallow: '/' },
      { userAgent: 'SemrushBot',     disallow: '/' },
    ],
    sitemap: 'https://animhaus.com/sitemap.xml',
    host: 'https://animhaus.com',
  };
}
