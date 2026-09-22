import { useQuery } from "@tanstack/react-query"
import { fetchUnits } from "@/lib/api/units"

export const UnitKeys = {
  units: ["units"],
} as const

export function useUnits() {
  return useQuery({
    queryFn: fetchUnits,
    queryKey: UnitKeys.units,
  })
}
