import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  experimental: {
    forceSwcTransforms: false,
  },
};

export default nextConfig;
