import {
  AirVent,
  Bath,
  BedDouble,
  BedSingle,
  ConciergeBell,
  Lock,
  Refrigerator,
  Shirt,
  ShowerHead,
  Sofa,
  Sparkles,
  Sun,
  Tv,
  Wifi,
  Wine,
  type LucideIcon,
} from "lucide-react"
import type { AvailabilitySearch, Unit } from "@/lib/types"

// The backend stores amenities as free text, so the same feature arrives
// spelled several ways ("WiFi", "Wifi", "wifi"; "hot_water", "Hot Shower").
// Everything is squashed to lowercase alphanumerics before lookup.
function amenityKey(raw: string) {
  return raw.toLowerCase().replace(/[^a-z0-9]/g, "")
}

const amenityMeta: Record<string, { label: string; icon: LucideIcon }> = {
  wifi: { label: "Wi-Fi", icon: Wifi },
  tv: { label: "TV", icon: Tv },
  smarttv: { label: "Smart TV", icon: Tv },
  ac: { label: "Air conditioning", icon: AirVent },
  airconditioning: { label: "Air conditioning", icon: AirVent },
  hotwater: { label: "Hot shower", icon: ShowerHead },
  hotshower: { label: "Hot shower", icon: ShowerHead },
  bathtub: { label: "Bathtub", icon: Bath },
  wardrobe: { label: "Wardrobe", icon: Shirt },
  safe: { label: "In-room safe", icon: Lock },
  balcony: { label: "Balcony", icon: Sun },
  loungearea: { label: "Lounge area", icon: Sofa },
  roomservice: { label: "Room service", icon: ConciergeBell },
  minibar: { label: "Mini bar", icon: Wine },
  minifridge: { label: "Mini fridge", icon: Refrigerator },
  kingbed: { label: "King bed", icon: BedDouble },
  doublebed: { label: "Double bed", icon: BedDouble },
  twodoublebeds: { label: "Two double beds", icon: BedDouble },
  twinbeds: { label: "Twin beds", icon: BedSingle },
  extrabed: { label: "Extra bed", icon: BedSingle },
}

export type Amenity = { key: string; label: string; icon: LucideIcon }

/**
 * `amenities` arrives as a JSON string rather than an array. Anything that
 * doesn't parse is treated as "no amenities" — a malformed field shouldn't
 * take the whole card down.
 */
export function parseAmenities(raw: Unit["amenities"]): Amenity[] {
  let values: unknown = raw

  if (typeof raw === "string") {
    try {
      values = JSON.parse(raw)
    } catch {
      return []
    }
  }

  if (!Array.isArray(values)) return []

  const seen = new Set<string>()

  return values.flatMap((value) => {
    if (typeof value !== "string" || !value.trim()) return []

    const key = amenityKey(value)
    if (!key || seen.has(key)) return []
    seen.add(key)

    const meta = amenityMeta[key]
    return [
      {
        key,
        label: meta?.label ?? titleCase(value),
        icon: meta?.icon ?? Sparkles,
      },
    ]
  })
}

function titleCase(value: string) {
  const words = value.replace(/[_-]+/g, " ").trim()
  return words.charAt(0).toUpperCase() + words.slice(1).toLowerCase()
}

/** "2_bedroom" -> "2 bedroom", "deluxe" -> "Deluxe". */
export function formatRoomType(roomType: string) {
  return titleCase(roomType) || "Room"
}

// `currencyDisplay: "code"` so this reads "KES 2,500", matching how rates are
// written everywhere else on the site, rather than the "Ksh" en-KE default.
const rateFormatter = new Intl.NumberFormat("en-KE", {
  style: "currency",
  currency: "KES",
  currencyDisplay: "code",
  maximumFractionDigits: 0,
})

export function formatRate(amount: number) {
  return rateFormatter.format(amount).replace(/\u00a0/g, " ")
}

// A fixed white chip so the status stays legible over a photo, a dark photo
// or the grey placeholder alike.
const unavailableTone = "bg-white text-neutral-700 ring-1 ring-black/10"

export const statusMeta: Record<
  string,
  { label: string; className: string; bookable: boolean }
> = {
  available: {
    label: "Available",
    className: "bg-primary text-primary-foreground",
    bookable: true,
  },
  occupied: {
    label: "Occupied",
    className: unavailableTone,
    bookable: false,
  },
  reserved: {
    label: "Reserved",
    className: unavailableTone,
    bookable: false,
  },
  maintenance: {
    label: "Under maintenance",
    className: "bg-orange-600 text-white",
    bookable: false,
  },
  out_of_service: {
    label: "Out of service",
    className: unavailableTone,
    bookable: false,
  },
}

export function getStatusMeta(status: string) {
  return (
    statusMeta[status?.toLowerCase()] ?? {
      label: titleCase(status || "Unavailable"),
      className: unavailableTone,
      bookable: false,
    }
  )
}

export function isBookable(unit: Unit) {
  return getStatusMeta(unit.status).bookable
}

/**
 * Where "Request this room" sends the guest. Read back on the contact page.
 * A stay is carried through when the room came from an availability search,
 * so the booking form opens with the dates already chosen.
 */
export function requestRoomHref(unit: Unit, stay?: AvailabilitySearch) {
  const params = new URLSearchParams({ roomId: unit.room_id })

  if (stay) {
    params.set("checkIn", stay.checkIn)
    params.set("checkOut", stay.checkOut)
    params.set("adults", stay.adults)
  }

  return `/contact?${params.toString()}`
}
