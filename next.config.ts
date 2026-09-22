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
      // Room photos from the admin backend. These hosts have to be listed
      // literally — next/image can't read NEXT_PUBLIC_API_BASE at build time.
      {
        protocol: "https",
        hostname: "asantemeats.ca",
        port: "",
        pathname: "/media/**",
      },
      // Where the backend actually stores uploads (Cloudflare R2).
      {
        protocol: "https",
        hostname: "pub-e746e37d303f48acb02b0b81815e4b23.r2.dev",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig
