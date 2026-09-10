import Link from "next/link"
import { Button } from "@/components/ui/button"

export function GalleryCta() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24">
      <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-muted p-6 sm:p-10">
        <p className="font-heading text-xl font-bold sm:text-2xl">
          Seen enough? A room is $35 a night.
        </p>
        <Button
          asChild
          size="lg"
          className="h-12 rounded-full px-7 text-base font-semibold"
        >
          <Link href="/contact">Request a booking</Link>
        </Button>
      </div>
    </section>
  )
}
