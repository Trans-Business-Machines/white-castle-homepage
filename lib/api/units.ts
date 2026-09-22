import { api } from "@/lib/axios"
import type { Unit } from "@/lib/types"

export async function fetchUnits() {
  const response = await api.get<Unit[]>("/bookings/rooms?active_only=true")
  return response.data
}
