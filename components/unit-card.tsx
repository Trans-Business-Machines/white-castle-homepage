"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ImageOff, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Pill } from "@/components/pill"
import { cn } from "@/lib/utils"
import { UnitBadge } from "@/components/unit-badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  formatRate,
  formatRoomType,
  getStatusMeta,
  parseAmenities,
  requestRoomHref,
} from "@/lib/units"
import type { AvailabilitySearch, AvailableUnit, Unit } from "@/lib/types"

// Amenity lists run long on suites; the rest are summarised as "+n more" so
// every card in a row stays the same shape.
const VISIBLE_AMENITIES = 4

const ctaClassName = "mt-auto h-11 w-full rounded-full text-base font-semibold"

// The primitive fades disabled buttons to half opacity and drops pointer
// events, which left this one barely visible and hid the not-allowed cursor.
const disabledCtaClassName =
  "bg-slate-900/40 text-white hover:bg-slate-900 disabled:pointer-events-auto disabled:cursor-not-allowed disabled:opacity-100"

/**
 * A room from an availability search: the stay's cost, plus the search itself
 * so the CTA can carry the dates into the booking form.
 */
export type StayContext = { unit: AvailableUnit; search: AvailabilitySearch }

export function UnitCard({ unit, stay }: { unit: Unit; stay?: StayContext }) {
  const amenities = parseAmenities(unit.amenities)
  const shown = amenities.slice(0, VISIBLE_AMENITIES)
  const hidden = amenities.length - shown.length
  // Everything an availability search returns is free for those dates, so the
  // status badge has nothing left to say.
  const bookable = stay ? true : getStatusMeta(unit.status).bookable

  return (
    <Card className="h-full gap-0 overflow-hidden pt-0 shadow-sm">
      <UnitPhotos unit={unit} showStatus={!stay} />

      <CardContent className="flex flex-1 flex-col gap-4 pt-5">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-heading text-xl font-bold">
              {formatRoomType(unit.room_type)}
            </h3>
            <p className="font-heading text-lg font-bold whitespace-nowrap">
              {stay ? (
                formatRate(stay.unit.total_price)
              ) : (
                <>
                  {formatRate(unit.base_rate)}
                  <span className="text-sm font-medium text-muted-foreground">
                    {" "}
                    / night
                  </span>
                </>
              )}
            </p>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <span>Room {unit.room_number}</span>
            {stay ? (
              <span className="whitespace-nowrap">
                {stay.unit.nights === 1
                  ? "1 night total"
                  : `${stay.unit.nights} nights total`}
              </span>
            ) : null}
          </div>
          {stay ? (
            <p className="text-sm text-muted-foreground">
              {formatRate(unit.base_rate)} / night
            </p>
          ) : null}
        </div>

        {unit.description ? (
          <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {unit.description}
          </p>
        ) : null}

        <div className="flex flex-wrap gap-2">
          <Pill
            icon={Users}
            label={
              unit.max_occupancy === 1
                ? "1 guest"
                : `${unit.max_occupancy} guests`
            }
          />
          {shown.map((amenity) => (
            <Pill key={amenity.key} icon={amenity.icon} label={amenity.label} />
          ))}
          {hidden > 0 ? (
            <span className="inline-flex items-center rounded-full border border-foreground/10 px-3 py-1.5 text-[0.8rem] text-muted-foreground">
              +{hidden} more
            </span>
          ) : null}
        </div>

        {bookable ? (
          <Button asChild size="lg" className={ctaClassName}>
            <Link href={requestRoomHref(unit, stay?.search)}>
              Request this room
            </Link>
          </Button>
        ) : (
          <Button
            disabled
            size="lg"
            className={cn(ctaClassName, disabledCtaClassName)}
            title={`This room is ${getStatusMeta(unit.status).label.toLowerCase()}`}
          >
            Request this room
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

function UnitPhotos({ unit, showStatus }: { unit: Unit; showStatus: boolean }) {
  const photos = unit.photos ?? []
  const label = `${formatRoomType(unit.room_type)}, room ${unit.room_number}`

  if (photos.length === 0) {
    return (
      <div className="relative h-56 w-full">
        {showStatus ? <UnitBadge status={unit.status} /> : null}
        <PhotoPlaceholder label={`No photos yet for ${label}`} />
      </div>
    )
  }

  return (
    <Carousel className="group relative" opts={{ loop: photos.length > 1 }}>
      <CarouselContent className="ml-0">
        {photos.map((photo, index) => (
          <CarouselItem key={photo} className="pl-0">
            <UnitPhoto
              src={photo}
              alt={`${label} — photo ${index + 1} of ${photos.length}`}
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      {showStatus ? <UnitBadge status={unit.status} /> : null}

      {photos.length > 1 ? (
        <>
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          <CarouselPrevious className="left-3 border-transparent bg-porcelain text-foreground opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 focus-visible:opacity-100" />
          <CarouselNext className="right-3 border-transparent bg-porcelain text-foreground opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 focus-visible:opacity-100" />
        </>
      ) : null}
    </Carousel>
  )
}

// Some photo URLs in the backend point at files that are no longer there, so
// a failed load falls back to the same placeholder an empty room gets rather
// than showing a broken image.
function UnitPhoto({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = React.useState(false)

  return (
    <div className="relative h-56 w-full">
      {failed ? (
        <PhotoPlaceholder label={alt} />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 92vw"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}

function PhotoPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-muted">
      <ImageOff className="size-8 text-muted-foreground/50" strokeWidth={1.5} />
      <span className="sr-only">{label}</span>
    </div>
  )
}
