import { api } from "@/lib/axios"
import type { BookingEnquiryPayload } from "@/lib/types"

export async function createBookingEnquiry(payload: BookingEnquiryPayload) {
  const response = await api.post("/bookings/enquiry", payload)
  return response.data
}
