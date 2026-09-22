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
}

export interface BookingEnquiryPayload {
  room_id: string
  check_in_date: string
  check_out_date: string
  adults: number
  guest_name: string
  guest_phone: string
  guest_email?: string
  message?: string
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
}
