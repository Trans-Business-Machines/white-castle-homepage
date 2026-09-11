import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WhatsappIcon } from "@/components/whatsapp-icon"
import { siteConfig } from "@/lib/site-config"

export function EnquiryCta() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20">
      <div className="rounded-2xl bg-primary p-6 text-primary-foreground sm:p-10 lg:p-14">
        <h2 className="max-w-2xl font-heading text-3xl font-extrabold sm:text-4xl">
          Planning a conference, or a long stay?
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
          Tell us the dates and the head count. We answer group and corporate
          enquiries the same day, and hold rooms until you confirm.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full bg-white px-7 text-base font-semibold text-primary hover:bg-white/90"
          >
            <Link href="/contact">Send an enquiry</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full bg-white/20 px-7 text-base font-semibold text-primary-foreground hover:bg-white/30"
          >
            <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer">
              <WhatsappIcon />
              WhatsApp us
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
