import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AboutCta() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24">
      <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-primary p-6 text-primary-foreground sm:p-10">
        <p className="font-heading text-xl font-bold sm:text-2xl">
          Come and see the hills for yourself.
        </p>
        <Button
          asChild
          size="lg"
          className="h-12 rounded-full bg-white px-7 text-base font-semibold text-primary hover:bg-white/90"
        >
          <Link href="/accommodation">Request a booking</Link>
        </Button>
      </div>
    </section>
  )
}
