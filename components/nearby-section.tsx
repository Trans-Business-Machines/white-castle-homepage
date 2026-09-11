import {
  Footprints,
  Landmark,
  MapPin,
  Mountain,
  Trees,
  Trophy,
  Waves,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const places = [
  {
    icon: Mountain,
    title: "Sergoit Hill",
    description:
      "The rock you can see from the Terrace. A morning's climb and a wide view of the whole plateau.",
    googleMapsURL: "https://maps.app.goo.gl/X6S7xaFFjdNyo5hPA",
  },
  {
    icon: Trees,
    title: "Nandi Hills",
    description:
      "Tea country south of town  green all year, and cool enough to want a jacket.",
    googleMapsURL: "https://maps.app.goo.gl/mm5hgh3eU8FeVMiT8",
  },
  {
    icon: Waves,
    title: "Kesses Dam",
    description:
      "Water, birds and picnic ground on the Kesses road. An easy afternoon.",
    googleMapsURL: "https://maps.app.goo.gl/9fLZ17JMjco9U8p57",
  },
  {
    icon: Landmark,
    title: "Game House & Matunda",
    description:
      "Two of the local landmarks visitors ask about most, both a short drive out.",
    googleMapsURL: "https://maps.app.goo.gl/FR9DKjhAHBg6JveEA",
  },
  {
    icon: Footprints,
    title: "Iten",
    description:
      "The running town on the edge of the Kerio Valley, where half the marathon field trains. Under an hour from reception.",
    googleMapsURL: "https://maps.app.goo.gl/iYUg1GS1DwNsQvJ16",
  },
  {
    icon: Trees,
    title: "Kaptagat Forest",
    description:
      "Cool forest trails southeast of town, and the camp country behind a good deal of Kenyan distance running.",
    googleMapsURL: "https://maps.app.goo.gl/z8Skf5iwh6aVwkuD7",
  },
  {
    icon: Trophy,
    title: "Kipchoge Keino Stadium",
    description:
      "The track in the middle of town, named for the man who started it all. Meets and trials through the season.",
    googleMapsURL: "https://maps.app.goo.gl/QGygZMkSiJkyCuQLA",
  },
]

export function NearbySection() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20">
      <h2 className="font-heading text-2xl font-extrabold sm:text-3xl">
        What&rsquo;s nearby
      </h2>
      <p className="mt-3 text-base text-muted-foreground sm:text-lg">
        Hills, water and the running country that made Eldoret&rsquo;s name.
        Reception will arrange a driver for any of these &mdash; ask the night
        before.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {places.map(({ icon: Icon, title, description, googleMapsURL }) => (
          <Card key={title} className="gap-3 [--card-spacing:--spacing(6)]">
            <CardHeader>
              <Icon
                className="size-7 text-primary"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <CardTitle className="mt-4 font-heading text-lg font-bold">
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-base leading-relaxed text-muted-foreground">
              <p>{description}</p>
              <a
                href={googleMapsURL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 font-medium text-primary underline underline-offset-4 hover:no-underline"
              >
                <MapPin className="size-4" aria-hidden="true" />
                View on Google Maps
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
