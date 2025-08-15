import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.100.43", // IP device lain
    "localhost",      // default local
  ],
};

export default nextConfig;