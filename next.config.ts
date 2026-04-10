import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "ValueLog-intro";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages usually deploys to username.github.io/repo-name/
  // Replace repoName if the repository name changes
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
