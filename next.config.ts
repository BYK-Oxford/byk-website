import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com", "images.pexels.com", "media.licdn.com"], // ✅ allow Unsplash images
  },
};

export default nextConfig;
