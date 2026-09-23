import Image from "next/image"
import Hotel from "@/public/assets/images/hero.png"
import { Reveal } from "@/components/reveal"

export function AboutIntro() {
  return (
    <section className="mx-auto grid max-w-7xl items-start gap-10 px-5 pt-4 pb-16 sm:px-8 sm:pt-6 sm:pb-20 lg:grid-cols-2 lg:gap-16">
      <Reveal>
        <div>
          <p className="text-[0.75rem] font-semibold tracking-[0.16em] text-primary uppercase">
            About
          </p>
          <h1 className="mt-3 max-w-md font-heading text-4xl leading-[1.1] font-extrabold sm:text-5xl">
            A town-centre motel that stays quiet
          </h1>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            The Eldoret White Castle Motel sits in the middle of town, 320 km
            northwest of Nairobi, with a panoramic view of Sergoit Hill and the
            Nandi Hills. Close enough to walk to the market and the stage; far
            enough back from the road to sleep.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            We keep 118 fully furnished self-contained single rooms every one
            with a hot bath, a shower and a telephone and an excellent room
            service that runs late. Guests come for work, for conferences, for a
            night off the Nairobi road, and for the quiet.
          </p>
        </div>
      </Reveal>

      <div className="relative aspect-4/3 overflow-hidden rounded-2xl lg:mt-20">
        <Image
          src={Hotel}
          alt="Inside the motel, looking up through the stairwell"
          fill
          priority
          sizes="(min-width: 1024px) 560px, 92vw"
          className="object-cover"
        />
      </div>
    </section>
  )
}
