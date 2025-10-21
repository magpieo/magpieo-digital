import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          // Static export
  images: {
    unoptimized: true,       // Shared hosting এ optimization OFF
  },
  trailingSlash: true,       // URL এ trailing slash, যেমন /about/ , /services/
};

export default nextConfig;
