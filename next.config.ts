import type { NextConfig } from "next"

/**
 * Upstream API the Next server proxies to. The browser only ever talks to
 * `/api/*` on this app's own origin — the backend URL is never exposed.
 */
const API_PROXY_TARGET = process.env.API_PROXY_TARGET

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Cloudflare R2 — room photos and media
      {
        protocol: "https",
        hostname: "pub-3a291edffba94754a3b71913cc6ebb13.r2.dev",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    if (!API_PROXY_TARGET) return []
    return [
      {
        source: "/api/:path*",
        destination: `${API_PROXY_TARGET.replace(/\/$/, "")}/:path*`,
      },
    ]
  },
}

export default nextConfig
