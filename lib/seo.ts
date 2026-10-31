import type { Metadata } from "next"
import { siteConfig } from "@/lib/site-config"

/**
 * Canonical origin for the site. Preview deployments (Vercel, staging, etc.)
 * should set NEXT_PUBLIC_SITE_URL so canonicals and the sitemap never point at
 * a temporary hostname.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://eldoretwhitecastle.com"
).replace(/\/+$/, "")

export const defaultTitle =
  "White Castle Motel, Eldoret — Rooms, Rates & Conference Hall"

export const titleTemplate = "%s | White Castle Motel, Eldoret"

export const defaultDescription = siteConfig.description

export const ogImage = {
  url: "/assets/images/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "White Castle Motel, Eldoret",
}

/** Keywords shared by every page; page-specific ones are appended. */
export const baseKeywords = [
  "White Castle Motel",
  "motel Eldoret",
  "hotel Eldoret",
  "accommodation Eldoret",
  "rooms in Eldoret",
  "Eldoret CBD hotel",
  "Uganda Road Eldoret",
  "conference hall Eldoret",
  "Uasin Gishu accommodation",
]

type PageMetadataOptions = {
  title: string
  description: string
  path: `/${string}`
  /** Use the title verbatim instead of applying the site-wide template. */
  absoluteTitle?: boolean
  keywords?: string[]
}

/**
 * Every page gets canonical, Open Graph and Twitter metadata from one place,
 * so a new page cannot ship without them.
 */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  keywords = [],
}: PageMetadataOptions): Metadata {
  const fullTitle = absoluteTitle
    ? title
    : titleTemplate.replace("%s", title)

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: [...new Set([...baseKeywords, ...keywords])],
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: path,
      siteName: siteConfig.fullName,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  }
}
