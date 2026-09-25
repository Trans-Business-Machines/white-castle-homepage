"use client"

import Image from "next/image"
import Link from "next/link"
import AutoScroll from "embla-carousel-auto-scroll"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import DoubleRoom from "@/public/assets/images/double-room.png"
import Restaurant from "@/public/assets/images/restaurant.jpg"
import BartenderCocktails from "@/public/assets/images/bartender-cocktails.jpg"
import TwinRoom from "@/public/assets/images/twin-room.png"
import Lounge from "@/public/assets/images/lounge.jpg"
import CafeDiningRoom from "@/public/assets/images/cafe-dining-room.png"
import PoolRoom from "@/public/assets/images/pool-room.png"
import ChickenAndChips from "@/public/assets/images/chicken-and-chips.jpg"
import MainBarCounter from "@/public/assets/images/main-bar-counter.jpg"
import Cocktails from "@/public/assets/images/cocktails.jpg"

const shots = [
  { id: 1, imageURI: DoubleRoom, alt: "Double room" },
  { id: 2, imageURI: Restaurant, alt: "Restaurant" },
  { id: 3, imageURI: BartenderCocktails, alt: "Bartender with cocktails" },
  { id: 4, imageURI: TwinRoom, alt: "Twin room" },
  { id: 5, imageURI: Lounge, alt: "Lounge" },
  { id: 6, imageURI: CafeDiningRoom, alt: "Cafe" },
  { id: 7, imageURI: PoolRoom, alt: "Pool tables" },
  { id: 8, imageURI: ChickenAndChips, alt: "Chicken and chips" },
  { id: 9, imageURI: MainBarCounter, alt: "Main bar counter" },
  { id: 10, imageURI: Cocktails, alt: "Cocktails" },
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
                  src={shot.imageURI}
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
