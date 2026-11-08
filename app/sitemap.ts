import type { MetadataRoute } from "next"
import { siteUrl } from "@/lib/seo"

const routes: Array<{
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  priority: number
  images?: string[]
}> = [
  {
    path: "/",
    changeFrequency: "weekly",
    priority: 1,
    images: ["/assets/images/hero.png", "/assets/images/og-image-2026.jpg"],
  },
  {
    path: "/accommodation",
    changeFrequency: "weekly",
    priority: 0.9,
    images: ["/assets/images/deluxe-double-room.jpg", "/assets/images/hero.png"],
  },
  {
    path: "/facilities",
    changeFrequency: "monthly",
    priority: 0.8,
    images: ["/assets/images/conference-setup.jpg", "/assets/images/cafeteria.jpg"],
  },
  {
    path: "/gallery",
    changeFrequency: "monthly",
    priority: 0.7,
    images: ["/assets/images/hero.png", "/assets/images/main-bar-counter.jpg"],
  },
  {
    path: "/about",
    changeFrequency: "yearly",
    priority: 0.6,
    images: ["/assets/images/hero.png"],
  },
  {
    path: "/contact",
    changeFrequency: "yearly",
    priority: 0.8,
    images: ["/assets/images/hero.png"],
  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map(({ path, changeFrequency, priority, images }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
    ...(images
      ? { images: images.map((image) => `${siteUrl}${image}`) }
      : {}),
  }))
}
