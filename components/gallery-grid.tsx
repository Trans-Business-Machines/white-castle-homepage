"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {
  GALLERY_FILTERS,
  galleryItems,
  type GalleryFilterId,
} from "@/lib/gallery"

export function GalleryGrid() {
  const [filter, setFilter] = React.useState<GalleryFilterId>("all")

  const visible =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter)

  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20">
      <div
        role="group"
        aria-label="Filter photos"
        className="flex flex-wrap gap-3"
      >
        {GALLERY_FILTERS.map((option) => {
          const active = option.id === filter
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => setFilter(option.id)}
              aria-pressed={active}
              className={cn(
                "h-11 rounded-full px-6 text-base font-medium transition-colors focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
                active
                  ? "bg-primary text-primary-foreground"
                  : "border bg-background hover:bg-muted"
              )}
            >
              {option.label}
            </button>
          )
        })}
      </div>

      <ul className="mt-8 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item, index) => (
          <li key={item.id}>
            <div className="relative aspect-4/3 overflow-hidden rounded-xl">
              <Image
                src={item.imageURL}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 92vw"
                // The first row is above the fold; Next 16 flags it as LCP
                // if left lazy.
                loading={index < 3 ? "eager" : "lazy"}
                className="object-cover"
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
