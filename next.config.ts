import type { NextConfig } from "next";

const repoName = "ValueLog-intro";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages usually deploys to username.github.io/repo-name/
  basePath: process.env.NODE_ENV === "production" ? `/${repoName}` : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
