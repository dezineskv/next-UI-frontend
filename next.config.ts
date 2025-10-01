import type { NextConfig } from "next";
module.exports = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};
const nextConfig: NextConfig = {
  /* config options here */

  images: {
    domains: ["static-00.iconduck.com", "cdn.flyonui.com", "i.ibb.co", "unsplash.com", "img.daisyui.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // "**" to match any subdomain/hostname
      },
    ],
  },
};

export default nextConfig;
