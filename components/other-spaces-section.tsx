import { Users } from "lucide-react"
import { StayCard, type StayCardProps } from "@/components/stay-card"

const spaces: StayCardProps[] = [
  {
    title: "Conference hall",
    subtitle: "Ground floor · seats 120",
    image: "https://picsum.photos/id/1039/900/700",
    href: "/facilities#conference",
    features: [{ icon: Users, label: "20-120" }],
    price: "On request",
  },
  {
    title: "The Terrace",
    subtitle: "Open air · hill views",
    image: "https://picsum.photos/id/1025/900/700",
    href: "/facilities#terrace",
    features: [{ icon: Users, label: "10-60" }],
    price: "On request",
  },
  {
    title: "Main bar, private hire",
    subtitle: "Evenings · by arrangement",
    image: "https://picsum.photos/id/1031/900/700",
    href: "/facilities#bar",
    features: [{ icon: Users, label: "up to 80" }],
    price: "On request",
  },
]

export function OtherSpacesSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24">
      <h2 className="font-heading text-2xl font-extrabold sm:text-3xl">
        Other spaces you can book
      </h2>

      <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {spaces.map((space) => (
          <StayCard key={space.title} {...space} />
        ))}
      </div>
    </section>
  )
}
