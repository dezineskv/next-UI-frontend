import type { NextConfig } from "next";
module.exports = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};
const nextConfig: NextConfig = {
  /* config options here */

  images: {
    domains: ["static-00.iconduck.com", "cdn.flyonui.com"],
  },
};

export default nextConfig;
