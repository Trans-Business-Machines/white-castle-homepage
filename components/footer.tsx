import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  exploreNav,
  onSiteNav,
  siteConfig,
  socialLinks,
} from "@/lib/site-config"

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-100">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <p className="font-heading text-xl font-extrabold tracking-[0.14em] uppercase">
              {siteConfig.name}
            </p>
            <p className="mt-4 max-w-xs leading-relaxed text-neutral-300">
              {siteConfig.description}
            </p>

            <ul className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="flex size-10 items-center justify-center rounded-full bg-neutral-800 text-sm transition-colors hover:bg-neutral-700"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-10 font-heading text-lg font-bold">Get in touch</p>
            <ul className="mt-4 space-y-3 text-neutral-300">
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              <li className="leading-relaxed">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.region}
              </li>
            </ul>

            <Button
              asChild
              size="lg"
              className="mt-6 h-12 rounded-full px-7 text-base font-semibold"
            >
              <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
          </div>

          <div>
            <p className="font-heading text-lg font-bold">Explore</p>
            <ul className="mt-4 space-y-3">
              {exploreNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-neutral-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-heading text-lg font-bold">On site</p>
            <ul className="mt-4 space-y-3">
              {onSiteNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-neutral-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3 px-5 py-6 text-sm text-neutral-400 sm:px-8">
          <p>
            © {new Date().getFullYear()} {siteConfig.fullName}, Eldoret. All
            rights reserved.
          </p>
          <p>Rates quoted in USD and KES · Prices include taxes</p>
        </div>
      </div>
    </footer>
  )
}
