import { useMutation } from "@tanstack/react-query"
import { createBookingEnquiry } from "@/lib/api/bookings"

export function useBookingEnquiry() {
  return useMutation({
    mutationFn: createBookingEnquiry,
  })
}
