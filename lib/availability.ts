import {
  ADULT_OPTIONS,
  ANY_ROOM_TYPE,
  ROOM_TYPE_OPTIONS,
  type AvailabilityValues,
} from "@/lib/schemas/availability"
import type { AvailabilitySearch } from "@/lib/types"

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/

export function isAdultOption(
  value: string
): value is AvailabilityValues["adults"] {
  return (ADULT_OPTIONS as readonly string[]).includes(value)
}

function isRoomType(
  value: string
): value is (typeof ROOM_TYPE_OPTIONS)[number] {
  return (ROOM_TYPE_OPTIONS as readonly string[]).includes(value)
}

/** Query params are user-editable, so anything unrecognised is dropped. */
export function parseAvailabilitySearch(params: {
  checkIn?: string
  checkOut?: string
  adults?: string
  roomType?: string
}): AvailabilitySearch | undefined {
  const { checkIn, checkOut, adults, roomType } = params

  if (!checkIn || !checkOut) return undefined
  if (!DATE_PATTERN.test(checkIn) || !DATE_PATTERN.test(checkOut)) {
    return undefined
  }

  return {
    checkIn,
    checkOut,
    adults: adults && isAdultOption(adults) ? adults : "1",
    ...(roomType && isRoomType(roomType) ? { roomType } : {}),
  }
}

/** The same search, shaped for the availability form's `defaultValues`. */
export function toFormDefaults(
  search: AvailabilitySearch
): Partial<AvailabilityValues> {
  return {
    checkIn: parseSearchDate(search.checkIn),
    checkOut: parseSearchDate(search.checkOut),
    adults: isAdultOption(search.adults) ? search.adults : "1",
    roomType:
      search.roomType && isRoomType(search.roomType)
        ? search.roomType
        : ANY_ROOM_TYPE,
  }
}

/**
 * `yyyy-MM-dd` as local midnight. `new Date("2026-09-23")` would parse as UTC
 * and land on the previous day west of Greenwich.
 */
export function parseSearchDate(value: string) {
  const [year, month, day] = value.split("-").map(Number)
  if (!year || !month || !day) return undefined
  const parsed = new Date(year, month - 1, day)
  return Number.isNaN(parsed.getTime()) ? undefined : parsed
}
