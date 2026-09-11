import Link from "next/link"
import { Button } from "@/components/ui/button"
import { StaysGrid } from "@/components/stays-grid"

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
        One honest rate, one honest room plus the conference hall and the
        Terrace when you need somewhere for everyone else.
      </p>

      <Button
        asChild
        size="lg"
        className="mt-7 h-12 rounded-full bg-neutral-900 px-7 text-base font-semibold text-white hover:bg-neutral-800"
      >
        <Link href="/accommodation">All rooms &amp; rates</Link>
      </Button>

      <StaysGrid />
    </section>
  )
}
