import { Inter, Manrope } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Metadata, Viewport } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { QueryProvider } from "@/providers/query-provider"
import { Toaster } from "react-hot-toast"
import { JsonLd } from "@/components/json-ld"
import { siteConfig } from "@/lib/site-config"
import { websiteJsonLd } from "@/lib/structured-data"
import {
  baseKeywords,
  defaultDescription,
  defaultTitle,
  ogImage,
  siteUrl,
  titleTemplate,
} from "@/lib/seo"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: titleTemplate,
  },
  description: defaultDescription,
  applicationName: siteConfig.fullName,
  category: "travel",
  keywords: baseKeywords,
  authors: [{ name: siteConfig.fullName, url: siteUrl }],
  creator: siteConfig.fullName,
  publisher: siteConfig.fullName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.fullName,
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
}

const manropeHeading = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
})

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en-KE"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        "font-sans",
        inter.variable,
        manropeHeading.variable
      )}
    >
      <body>
        <JsonLd data={websiteJsonLd()} />
        <ThemeProvider forcedTheme="light" enableSystem={false}>
          <QueryProvider>
            <TooltipProvider>
              <div className="flex min-h-svh flex-col">
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
              <Toaster
                position="top-center"
                containerStyle={{ top: 88 }}
                toastOptions={{
                  duration: 6000,
                  className:
                    "bg-background! text-foreground! text-sm! rounded-xl! shadow-lg!",
                }}
              />
            </TooltipProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
