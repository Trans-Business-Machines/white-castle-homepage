"use client"

import Image from "next/image"
import Link from "next/link"
import AutoScroll from "embla-carousel-auto-scroll"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const shots = [
  { id: 1011, alt: "Guest photographing the Eldoret skyline" },
  { id: 1043, alt: "Morning mist over the Nandi hills" },
  { id: 1076, alt: "The conference hall ceiling" },
  { id: 1062, alt: "A guest on the walk up to reception" },
  { id: 1031, alt: "Uganda Road at dusk" },
  { id: 1002, alt: "The main block seen from the terrace" },
]

export function GallerySection() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-heading text-3xl font-extrabold sm:text-4xl">
          A look around
        </h2>
        <Link
          href="/gallery"
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          Open the gallery →
        </Link>
      </div>

      <Carousel
        className="mt-8"
        opts={{ loop: true, align: "start", dragFree: true }}
        plugins={[
          AutoScroll({
            speed: 0.7,
            startDelay: 0,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <CarouselContent className="-ml-4">
          {shots.map((shot) => (
            <CarouselItem key={shot.id} className="basis-70 pl-4 sm:basis-85">
              <Link
                href="/gallery"
                className="relative block aspect-4/3 overflow-hidden rounded-xl"
              >
                <Image
                  src={`https://picsum.photos/id/${shot.id}/800/600`}
                  alt={shot.alt}
                  fill
                  sizes="340px"
                  className="object-cover"
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
