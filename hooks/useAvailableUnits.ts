import { useQuery } from "@tanstack/react-query"
import { fetchAvailableUnits } from "@/lib/api/availability"
import { getApiErrorStatus } from "@/lib/api/errors"
import type { AvailabilitySearch } from "@/lib/types"

export const AvailabilityKeys = {
  search: (search: AvailabilitySearch) =>
    ["units", "available", search] as const,
}

export function useAvailableUnits(search?: AvailabilitySearch) {
  return useQuery({
    queryKey: AvailabilityKeys.search(search ?? ({} as AvailabilitySearch)),
    queryFn: () => fetchAvailableUnits(search!),
    enabled: Boolean(search?.checkIn && search?.checkOut),
    // A 4xx here means the search itself is wrong (bad dates, bad type) —
    // retrying just delays the error the guest needs to see.
    retry: (failureCount, error) => {
      const status = getApiErrorStatus(error)
      if (status && status >= 400 && status < 500) return false
      return failureCount < 2
    },
  })
}
