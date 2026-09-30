import type { MealPlan } from "@/lib/schemas/availability"

export interface Unit {
  room_id: string
  room_number: string
  room_type: string
  description: string
  max_occupancy: number
  base_rate: number
  status: string
  amenities: string
  photos: string[]
  active: boolean
  created_at: string
  bb_available: boolean
  /** Breakfast, per adult per night. Null when the room doesn't offer it. */
  bb_rate: number | null
}

export interface BookingEnquiryPayload {
  room_id: string
  check_in_date: string
  check_out_date: string
  adults: number
  children: number
  guest_name: string
  guest_phone: string
  guest_email?: string
  special_requests?: string
  meal_plan: MealPlan
}

/**
 * A room returned by `GET /bookings/rooms/available`, which is a `Unit` plus
 * the cost of the stay that was searched for.
 */
export interface AvailableUnit extends Unit {
  nights: number
  total_price: number
}

/** A stay search, as it travels through the URL. Dates are `yyyy-MM-dd`. */
export interface AvailabilitySearch {
  checkIn: string
  checkOut: string
  adults: string
  roomType?: string
  /** Not sent to the backend — it prices breakfast on top of the stay. */
  mealPlan: MealPlan
}
