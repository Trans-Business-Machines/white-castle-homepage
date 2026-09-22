import { getStatusMeta } from "@/lib/units"
import { cn } from "@/lib/utils"

/** Status chip pinned to the top-left of a unit's photo. */
export function UnitBadge({
  status,
  className,
}: {
  status: string
  className?: string
}) {
  const { label, className: tone } = getStatusMeta(status)

  return (
    <span
      className={cn(
        "absolute top-3 left-3 z-10 rounded-full px-3 py-1 text-[0.75rem] font-semibold shadow-sm",
        tone,
        className
      )}
    >
      {label}
    </span>
  )
}
