import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/id/**",
      },
      // picsum.photos 302s to this host; the optimizer needs it allowed too.
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
        port: "",
        pathname: "/id/**",
      },
    ],
  },
}

export default nextConfig
