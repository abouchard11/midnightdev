import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/case-file",
        destination: "/alex-bouchard",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
