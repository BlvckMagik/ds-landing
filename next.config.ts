import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  assetPrefix: process.env.NODE_ENV === "production" ? "/ds-landing/" : "",
};

export default nextConfig;
