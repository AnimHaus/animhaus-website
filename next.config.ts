import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "pub-936a2a79cb9b473fabc46e4ad35a3e2e.r2.dev" },
      { protocol: "https", hostname: "cdn.shurerdhara.com" },
      { protocol: "https", hostname: "cdn.animhaus.com" },
      { protocol: "https", hostname: "shurerdhara.com" },
      { protocol: "https", hostname: "cdn.awakynn.com" },
      { protocol: "https", hostname: "cdn.kdiae.in" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/cdn-proxy/:path*",
        destination: "https://cdn.animhaus.com/:path*",
      },
    ];
  },
};

export default nextConfig;
