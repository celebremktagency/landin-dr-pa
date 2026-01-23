import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  experimental: {
    forceSwcTransforms: false,
  },
};

export default nextConfig;
