import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      resolveAlias: {
        // This helps Turbopack understand the project root
        "@/*": ["./*"]
      }
    }
  },
  // Explicitly set the Turbopack root
  turbopack: {
    root: __dirname
  }
};

export default nextConfig;
