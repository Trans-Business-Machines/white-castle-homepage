import Link from "next/link"
import { Bath, Bed, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StayCard, type StayCardProps } from "@/components/stay-card"

const stays: StayCardProps[] = [
  {
    title: "Self-contained single",
    subtitle: "Main block, Eldoret CBD",
    image: "https://picsum.photos/id/1015/900/700",
    href: "/accommodation",
    tags: ["Hot shower", "Room service"],
    features: [
      { icon: Bed, label: "1" },
      { icon: Bath, label: "1" },
      { icon: Users, label: "1-2" },
    ],
    price: "$35",
    priceSuffix: "/n",
  },
  {
    title: "Conference hall",
    subtitle: "Ground floor · seats 120",
    image: "https://picsum.photos/id/1039/900/700",
    href: "/facilities#conference",
    tags: ["Projector & PA", "Tea service"],
    features: [{ icon: Users, label: "20-120" }],
    price: "On request",
  },
  {
    title: "The Terrace",
    subtitle: "Open-air · hill views",
    image: "https://picsum.photos/id/1025/900/700",
    href: "/facilities#terrace",
    tags: ["Open air", "Hill views"],
    features: [{ icon: Users, label: "10-60" }],
    price: "On request",
  },
]

export function StaySection() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20">
      <p className="text-[0.75rem] font-semibold tracking-[0.16em] text-primary uppercase">
        Stay with us
      </p>
      <h2 className="mt-3 max-w-2xl font-heading text-3xl font-extrabold sm:text-4xl">
        Rooms and spaces you can book today
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        One honest rate, one honest room — plus the conference hall and the
        Terrace when you need somewhere for everyone else.
      </p>

      <Button
        asChild
        size="lg"
        className="mt-7 h-12 rounded-full bg-neutral-900 px-7 text-base font-semibold text-white hover:bg-neutral-800"
      >
        <Link href="/accommodation">All rooms &amp; rates</Link>
      </Button>

      <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {stays.map((stay) => (
          <StayCard key={stay.title} {...stay} />
        ))}
      </div>
    </section>
  )
}
