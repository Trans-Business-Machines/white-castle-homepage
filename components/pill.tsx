import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

/** A small bordered icon + label chip, used for room facts and amenities. */
export function Pill({
  icon: Icon,
  label,
  className,
}: {
  icon: LucideIcon
  label: string
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-foreground/10 px-3 py-1.5 text-[0.8rem] text-muted-foreground",
        className
      )}
    >
      <Icon className="size-4 shrink-0" strokeWidth={1.5} />
      {label}
    </span>
  )
}
