import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { siteConfig } from "@/lib/site-config"

const methods = [
  {
    label: "Call reception",
    value: siteConfig.phone,
    note: "Answered 24 hours",
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    highlight: false,
  },
  {
    label: "WhatsApp",
    value: "Chat with us",
    note: "Fastest for same-day rooms",
    href: siteConfig.whatsapp,
    highlight: true,
  },
  {
    label: "Email",
    value: siteConfig.email,
    note: "For groups and invoices",
    href: `mailto:${siteConfig.email}`,
    highlight: false,
  },
  {
    label: "Visit",
    value: siteConfig.address.street,
    note: siteConfig.address.region,
    href: "#map",
    highlight: false,
  },
]

export function ContactMethods() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20">
      <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {methods.map((method) => (
          <li key={method.label}>
            <Card
              className={cn(
                // The anchor inside stretches over the whole card, so the card
                // carries the hover and focus states on its behalf.
                "relative h-full gap-0 rounded-2xl ring-1 ring-foreground/10 transition-[box-shadow,background-color] [--card-spacing:--spacing(6)] has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-primary",
                method.highlight
                  ? "bg-primary text-primary-foreground ring-transparent hover:bg-primary/90 has-[a:focus-visible]:ring-offset-2"
                  : "hover:ring-primary/30"
              )}
            >
              <div className="px-(--card-spacing)">
                <p
                  className={cn(
                    "text-[0.7rem] font-semibold tracking-[0.14em] uppercase",
                    method.highlight
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  )}
                >
                  {method.label}
                </p>
                <p className="mt-2 font-heading text-lg font-bold wrap-anywhere">
                  <a
                    href={method.href}
                    target={
                      method.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      method.href.startsWith("http") ? "noreferrer" : undefined
                    }
                    className="after:absolute after:inset-0 focus-visible:outline-none"
                  >
                    {method.value}
                  </a>
                </p>
                <p
                  className={cn(
                    "mt-2 text-sm",
                    method.highlight
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  )}
                >
                  {method.note}
                </p>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  )
}
