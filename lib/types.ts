import type { BookingCurrency, MealPlan } from "@/lib/schemas/availability"

export interface Unit {
  room_id: string
  room_number: string
  room_type: string
  description: string
  max_occupancy: number
  /** Room Only rate (KES). */
  base_rate: number
  /** Bed & Breakfast rate (KES). */
  bb_rate: number | null
  /** Half Board rate (KES). */
  hb_rate: number | null
  /** Full Board rate (KES). */
  fb_rate: number | null
  /** Room Only rate (USD). */
  base_rate_usd: number | null
  /** Bed & Breakfast rate (USD). */
  bb_rate_usd: number | null
  /** Half Board rate (USD). */
  hb_rate_usd: number | null
  /** Full Board rate (USD). */
  fb_rate_usd: number | null
  status: string
  amenities: string
  photos: string[]
  active: boolean
  created_at: string
}

export interface BookingEnquiryPayload {
  room_id: string
  check_in_date: string
  check_out_date: string
  adults: number
  children_under_5: number
  children_6_to_12: number
  guest_name: string
  guest_phone: string
  guest_email?: string
  special_requests?: string
  meal_plan: MealPlan
  currency: BookingCurrency
}

/**
 * A room returned by `GET /bookings/rooms/available`, which is a `Unit` plus
 * the cost of the stay that was searched for.
 */
export interface AvailableUnit extends Unit {
  nights: number
  total_price: number
  display_currency: BookingCurrency
}

/** A stay search, as it travels through the URL. Dates are `yyyy-MM-dd`. */
export interface AvailabilitySearch {
  checkIn: string
  checkOut: string
  adults: string
  roomType?: string
  mealPlan: MealPlan
  /** KES = resident, USD = non-resident. */
  currency: BookingCurrency
}
