import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AvailabilityForm } from "@/components/availability-form"
import Hotel from "@/public/assets/images/hotel.jpeg"

export function HeroSection() {
  return (
    <section className="mx-auto px-5 pt-6 sm:px-8">
      <div className="relative isolate overflow-hidden rounded-2xl">
        <Image
          src={Hotel}
          alt="The road up to White Castle Motel, Eldoret"
          fill
          priority
          sizes="(min-width: 1280px) 1216px"
          className="object-cover object-center-left"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/25" />

        <div className="relative flex min-h-136 flex-col justify-end p-6 pb-16 sm:min-h-160 sm:p-10 sm:pb-20 lg:min-h-176 lg:p-14 lg:pb-24">
          <span className="w-fit rounded-full bg-white/15 px-4 py-2 text-[0.7rem] tracking-[0.14em] text-white uppercase backdrop-blur-sm sm:text-xs">
            Central Eldoret · Since the town grew up around us
          </span>

          <h1 className="mt-6 max-w-3xl font-heading text-4xl leading-[1.05] font-extrabold text-white sm:text-5xl lg:text-6xl">
            A quiet room in the middle of everything.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            118 self-contained rooms, hot showers and honest room service
            tailored for travellers who cherish quiet surroundings, with the
            Sergoit and Nandi hills on the skyline.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full px-7 text-base font-semibold"
            >
              <Link href="/contact">Request a booking</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-neutral-100 px-7 text-base font-semibold text-neutral-900 hover:bg-white"
            >
              <Link href="/accommodation">See the rooms</Link>
            </Button>
          </div>
        </div>
      </div>

      <AvailabilityForm className="relative z-10 -mt-8 sm:-mt-10" />
    </section>
  )
}
