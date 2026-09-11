import Image from "next/image"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import Cafe from "@/public/assets/images/restaurant.jpeg"
import Terrace from "@/public/assets/images/terrace.jpeg"
import Bar from "@/public/assets/images/rootop_bar.jpeg"

const venues = [
  {
    id: "cafe",
    title: "Cafe",
    image: Cafe,
    description:
      "Breakfast from six, chai all day, and plates that arrive quickly when you have a bus to catch. Open to guests and to town.",
  },
  {
    id: "terrace",
    title: "The Terrace",
    image: Terrace,
    description:
      "Open-air tables under the sky, good for a long lunch or a quiet beer while the light goes down over the hills.",
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
    image: Bar,
    description:
      "Weekends only, in its own wing away from the bedrooms — so the music stays where the dancing is.",
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
              <Image
                src={venue.image}
                alt={venue.title}
                fill
                sizes="(min-width: 640px) 45vw, 92vw"
                className="object-cover"
              />
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
