import Link from "next/link"
import {
  BedDouble,
  Briefcase,
  CookingPot,
  Disc3,
  GlassWater,
  Martini,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ComingSoonBadge } from "@/components/coming-soon-spaces"

const facilities = [
  {
    icon: Briefcase,
    title: "Conference",
    description:
      "A hall for AGMs, trainings and county workshops, with tea service and a projector.",
  },
  {
    icon: BedDouble,
    title: "Self-contained rooms",
    description:
      "Hot bath, shower and telephone in every one of the 118 rooms, plus room service.",
  },
  {
    icon: GlassWater,
    title: "Pool bar",
    description:
      "Pool tables and a bar along the wall, for a game and a drink after dinner.",
  },
  {
    icon: Martini,
    title: "Main bar",
    description:
      "The room where Eldoret meets after work cold beer, football and a long counter.",
  },
  {
    icon: CookingPot,
    title: "Cafe",
    description:
      "All-day plates, chai and quick lunches for guests and walk-ins alike.",
  },
  {
    icon: Disc3,
    title: "SAMS Discotheque",
    description:
      "Weekend nights, kept to its own wing so the rooms stay quiet.",
    comingSoon: true,
  },
]

export function FacilitiesSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20">
      <div className="rounded-2xl bg-muted p-6 sm:p-10 lg:p-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[0.75rem] font-semibold tracking-[0.16em] text-primary uppercase">
              What we offer
            </p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold sm:text-4xl">
              Everything on one compound
            </h2>
          </div>
          <Link
            href="/facilities"
            className="font-medium text-primary underline underline-offset-4 hover:no-underline"
          >
            Facilities &amp; services →
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map(({ icon: Icon, title, description, comingSoon }) => (
            <Card
              key={title}
              className="gap-3 ring-0 [--card-spacing:--spacing(6)]"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <Icon
                    className="size-7 text-primary"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  {comingSoon ? <ComingSoonBadge /> : null}
                </div>
                <CardTitle className="mt-4 font-heading text-lg font-bold">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-base leading-relaxed text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
