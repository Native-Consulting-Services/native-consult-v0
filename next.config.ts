import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Performance optimizations
  experimental: {
    optimizeCss: true,
    optimizeServerReact: true,
  },
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Remove basePath when using custom domain
  // basePath: '/native-consult-v0', // Only needed for GitHub Pages without custom domain
};

export default nextConfig;
