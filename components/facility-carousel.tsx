"use client"

import * as React from "react"
import Image, { type StaticImageData } from "next/image"
import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

export type FacilityPhoto = { src: StaticImageData; alt: string }

export function FacilityCarousel({
  photos,
  sizes,
  className,
  slideClassName,
  eager = false,
}: {
  photos: FacilityPhoto[]
  sizes: string
  /** Applied to the frame — rounding goes here. */
  className?: string
  /** Applied to every slide — the aspect ratio goes here. */
  slideClassName?: string
  /** Load the first photo straight away — for a carousel visible on first paint. */
  eager?: boolean
}) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const several = photos.length > 1

  React.useEffect(() => {
    if (!api) return
    const onSelect = () => setCurrent(api.selectedScrollSnap())
    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <Carousel
      setApi={setApi}
      opts={{ loop: several }}
      className={cn("group relative overflow-hidden", className)}
    >
      <CarouselContent className="ml-0">
        {photos.map((photo, index) => (
          <CarouselItem key={photo.src.src} className="pl-0">
            <div className={cn("relative", slideClassName)}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={sizes}
                // Only the cover can be the page's LCP; the rest are
                // off-screen until the guest swipes.
                loading={eager && index === 0 ? "eager" : "lazy"}
                fetchPriority={eager && index === 0 ? "high" : undefined}
                className="object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {several ? (
        <>
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          <CarouselPrevious className="left-3 border-transparent bg-porcelain text-foreground opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 focus-visible:opacity-100" />
          <CarouselNext className="right-3 border-transparent bg-porcelain text-foreground opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 focus-visible:opacity-100" />

          {/* The arrows only appear on hover, so on touch screens the dots
              are what tells a guest there is more than one photo. */}
          <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1">
            {photos.map((photo, index) => (
              <button
                key={photo.src.src}
                type="button"
                onClick={() => api?.scrollTo(index)}
                aria-label={`Show photo ${index + 1} of ${photos.length}`}
                aria-current={index === current}
                className="p-1"
              >
                <span
                  className={cn(
                    "block h-1.5 rounded-full bg-white shadow-sm transition-all duration-200",
                    index === current ? "w-5" : "w-1.5 opacity-60"
                  )}
                />
              </button>
            ))}
          </div>
        </>
      ) : null}
    </Carousel>
  )
}
