import Link from "next/link"
import { MapPin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MapCard } from "@/components/map-card"
import { siteConfig } from "@/lib/site-config"

export function LocationSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24">
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-[0.75rem] font-semibold tracking-[0.16em] text-primary uppercase">
            Find us
          </p>
          <h2 className="mt-3 max-w-md font-heading text-3xl font-extrabold sm:text-4xl">
            Central Eldoret, off Uganda Road
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Five minutes from the matatu stage and the main market, 320 km
            northwest of Nairobi. Secure parking on site, and reception is
            staffed through the night.
          </p>

          <dl className="mt-8 space-y-5">
            <div className="flex gap-3">
              <MapPin className="mt-1 size-5 shrink-0 text-primary" />
              <div>
                <dt className="font-medium">{siteConfig.address.street}</dt>
                <dd className="text-muted-foreground">
                  {siteConfig.address.region}
                </dd>
              </div>
            </div>
            <div className="flex gap-3">
              <MessageCircle className="mt-1 size-5 shrink-0 text-primary" />
              <div>
                <dt className="font-medium">
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                    {siteConfig.phone}
                  </a>
                </dt>
                <dd className="text-muted-foreground">
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </dd>
              </div>
            </div>
          </dl>

          <Button
            asChild
            size="lg"
            className="mt-8 h-12 rounded-full px-7 text-base font-semibold"
          >
            <Link href="/contact">Contact &amp; directions</Link>
          </Button>
        </div>

        <MapCard className="sm:min-h-112" />
      </div>
    </section>
  )
}
