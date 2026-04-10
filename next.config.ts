import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",   // Firebase Hosting static deployment
  trailingSlash: true,
  images: {
    unoptimized: true, // required for static export
  },
};

export default nextConfig;
