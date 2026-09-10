"use client"

import * as React from "react"
import Image from "next/image"

export type RoomShot = { src: string; alt: string }

export function RoomGallery({ shots }: { shots: readonly RoomShot[] }) {
  const [order, setOrder] = React.useState(() => shots.map((_, index) => index))

  // Clicking a thumbnail swaps it into the main frame, so the strip stays at three.
  function promote(position: number) {
    setOrder((current) => {
      const next = [...current]
      ;[next[0], next[position]] = [next[position], next[0]]
      return next
    })
  }

  const main = shots[order[0]]

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
        <Image
          src={main.src}
          alt={main.alt}
          fill
          priority
          sizes="(min-width: 1024px) 560px, 92vw"
          className="object-cover"
        />
      </div>

      <div className="mt-3 grid grid-cols-3 gap-3">
        {order.slice(1).map((shotIndex, position) => {
          const shot = shots[shotIndex]
          return (
            <button
              key={shot.src}
              type="button"
              onClick={() => promote(position + 1)}
              aria-label={`Show ${shot.alt}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              <Image
                src={shot.src}
                alt=""
                fill
                sizes="(min-width: 1024px) 180px, 30vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}
