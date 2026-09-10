"use client"

import * as React from "react"
import { MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { siteConfig } from "@/lib/site-config"

const MAP_QUERY = "White Castle Motel, Uganda Road, Eldoret, Kenya"

export function MapCard({
  note,
  className,
}: {
  note: string
  className?: string
}) {
  const [mapLoaded, setMapLoaded] = React.useState(false)

  return (
    <Card
      className={cn(
        "min-h-[24rem] justify-center overflow-hidden rounded-2xl bg-muted p-0 py-0 ring-0",
        className
      )}
    >
      {mapLoaded ? (
        <iframe
          title={`Map of ${siteConfig.fullName}`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="size-full min-h-[24rem] border-0"
        />
      ) : (
        <div className="flex flex-col items-center px-8 py-12 text-center">
          <MapPin className="size-8 text-primary" />
          <p className="mt-5 font-heading text-lg font-bold">
            {siteConfig.address.street}
          </p>
          <p className="mt-2 max-w-xs leading-relaxed text-muted-foreground">
            {note}
          </p>
          <Button
            type="button"
            size="lg"
            onClick={() => setMapLoaded(true)}
            className="mt-6 h-11 rounded-full px-6 font-semibold"
          >
            Load the map
          </Button>
        </div>
      )}
    </Card>
  )
}
