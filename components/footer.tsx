import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WhatsappIcon } from "@/components/whatsapp-icon"
import { exploreNav, onSiteNav, siteConfig } from "@/lib/site-config"
import { MapPin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-100">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <p className="font-heading text-lg font-bold">Get in touch</p>
            <ul className="mt-4 space-y-3 text-neutral-300">
              <li className="inline-flex items-center gap-5">
                <Phone size={20} />
                <div>
                  <a href={`tel:${siteConfig.phoneIntl}`}>
                    {siteConfig.phone}
                  </a>
                  <span className="block text-sm text-neutral-400">
                    Alternative:{" "}
                    <a href={`tel:${siteConfig.altPhoneIntl}`}>
                      {siteConfig.altPhone}
                    </a>
                  </span>
                </div>
              </li>
              <li className="inline-flex items-center gap-5">
                <Mail size={20} />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="wrap-anywhere"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-5">
                <MapPin size={20} />
                <p className="leading-relaxed">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.poBox}, {siteConfig.address.city}{" "}
                  {siteConfig.address.postalCode}
                  <br />
                  {siteConfig.address.region}
                </p>
              </li>
            </ul>

            <Button
              asChild
              size="lg"
              className="mt-6 h-12 rounded-full px-7 text-base font-semibold"
            >
              <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer">
                <WhatsappIcon />
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
        </div>
      </div>
    </footer>
  )
}
