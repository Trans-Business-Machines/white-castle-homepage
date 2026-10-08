import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  FacilityCarousel,
  type FacilityPhoto,
} from "@/components/facility-carousel"
import ConferenceSetup from "@/public/assets/images/conference-setup.jpg"
import ConferenceUShape from "@/public/assets/images/conference-u-shape.jpg"
import ConferenceTables from "@/public/assets/images/conference-tables.jpg"
import ConferenceClassroom from "@/public/assets/images/conference-classroom.jpg"

const photos: FacilityPhoto[] = [
  { src: ConferenceSetup, alt: "The conference hall set for a full day" },
  { src: ConferenceUShape, alt: "The hall in a U-shape layout" },
  { src: ConferenceTables, alt: "The hall set with tables" },
  { src: ConferenceClassroom, alt: "The hall in classroom layout" },
]

const tags = ["Seats 120", "Projector & PA", "Tea & lunch service"]

export function ConferenceSection() {
  return (
    <section
      id="conference"
      className="mx-auto grid max-w-7xl scroll-mt-24 items-center gap-10 px-5 pb-16 sm:px-8 sm:pb-20 lg:grid-cols-2 lg:gap-16"
    >
      <FacilityCarousel
        photos={photos}
        sizes="(min-width: 1024px) 560px, 92vw"
        className="rounded-2xl"
        slideClassName="aspect-4/3"
        eager
      />

      <div>
        <p className="text-[0.75rem] font-semibold tracking-[0.16em] text-primary uppercase">
          Conference
        </p>
        <h2 className="mt-3 font-heading text-2xl font-extrabold sm:text-3xl">
          A hall built for a full day of work
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          Seats up to 120 in theatre style, fewer around tables. Projector, PA
          and a flip chart come with the room; tea at ten, lunch in the cafe,
          and rooms upstairs for delegates who came a long way.
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-background px-4 py-2 text-[0.85rem]"
            >
              {tag}
            </li>
          ))}
        </ul>

        <Button
          asChild
          size="lg"
          className="mt-8 h-12 rounded-full px-7 text-base font-semibold"
        >
          <Link href="/contact">Enquire about a date</Link>
        </Button>
      </div>
    </section>
  )
}
