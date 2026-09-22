import { api } from "@/lib/axios"
import type { AvailabilitySearch, AvailableUnit } from "@/lib/types"

export async function fetchAvailableUnits(search: AvailabilitySearch) {
  const response = await api.get<AvailableUnit[]>("/bookings/rooms/available", {
    params: {
      check_in: search.checkIn,
      check_out: search.checkOut,
      adults: Number(search.adults) || 1,
      // Omitted rather than sent empty — the backend treats an unknown
      // room_type as "match nothing", not "match everything".
      ...(search.roomType ? { room_type: search.roomType } : {}),
    },
  })
  return response.data
}
