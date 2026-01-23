import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 3600,
  },
  experimental: {
    forceSwcTransforms: false,
  },
};

export default nextConfig;
