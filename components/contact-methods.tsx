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
    href: null,
    highlight: false,
  },
]

export function ContactMethods() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20">
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {methods.map((method) => (
          <li key={method.label}>
            <Card
              className={cn(
                "h-full gap-0 rounded-2xl ring-1 ring-foreground/10 [--card-spacing:--spacing(6)]",
                method.highlight &&
                  "bg-primary text-primary-foreground ring-transparent"
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
                <p className="wrap-break-words mt-2 font-heading text-lg font-bold">
                  {method.href ? (
                    <a
                      href={method.href}
                      target={
                        method.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        method.href.startsWith("http")
                          ? "noreferrer"
                          : undefined
                      }
                      className="hover:underline"
                    >
                      {method.value}
                    </a>
                  ) : (
                    method.value
                  )}
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
