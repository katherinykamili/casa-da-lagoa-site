import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export",
        assetPrefix: "/casa-da-lagoa-site/",
        trailingSlash: true,
        images: { unoptimized: true },
        env: { NEXT_PUBLIC_BASE_PATH: "/casa-da-lagoa-site" },
      }
    : { env: { NEXT_PUBLIC_BASE_PATH: "" } }),
};

export default nextConfig;
