import Image, { type StaticImageData } from "next/image"
import { Disc3 } from "lucide-react"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import Cafe from "@/public/assets/images/cafe-dining-room.png"
import PoolBar from "@/public/assets/images/pool-room.png"
import Bar from "@/public/assets/images/main-bar-counter.jpg"

const venues: {
  id: string
  title: string
  image?: StaticImageData
  description: string
}[] = [
  {
    id: "cafe",
    title: "Cafe",
    image: Cafe,
    description:
      "Breakfast from six, chai all day, and plates that arrive quickly when you have a bus to catch. Open to guests and to town.",
  },
  {
    id: "pool-bar",
    title: "Pool bar",
    image: PoolBar,
    description:
      "Two tables, a bar along the wall and stools to watch from. Put your name on the board and wait your turn.",
  },
  {
    id: "bar",
    title: "Main bar",
    image: Bar,
    description:
      "The long counter where Eldoret meets after work. Cold beer, the match on, and nyama choma from the kitchen.",
  },
  {
    id: "discotheque",
    title: "SAMS Discotheque",
    description:
      "Opening soon for weekend nights, in its own wing away from the bedrooms so the music stays where the dancing is.",
  },
]

export function VenuesSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20">
      <h2 className="font-heading text-2xl font-extrabold sm:text-3xl">
        Food, drink and the evening
      </h2>

      <div className="mt-8 grid gap-10 sm:grid-cols-2">
        {venues.map((venue) => (
          <Card
            key={venue.id}
            id={venue.id}
            className="scroll-mt-24 gap-0 border-0 bg-transparent p-0 py-1.5 ring-0"
          >
            <div className="relative aspect-16/10 overflow-hidden rounded-xl">
              {venue.image ? (
                <Image
                  src={venue.image}
                  alt={venue.title}
                  fill
                  sizes="(min-width: 640px) 45vw, 92vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-3 bg-muted text-center">
                  <Disc3
                    className="size-10 text-primary"
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />
                  <p className="font-heading text-lg font-bold">Coming soon</p>
                </div>
              )}
            </div>
            <CardTitle className="mt-4 font-heading text-xl font-bold">
              {venue.title}
            </CardTitle>
            <CardContent className="mt-2 px-3 text-base leading-relaxed text-muted-foreground">
              {venue.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
