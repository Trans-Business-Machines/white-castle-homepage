import type { LucideIcon } from "lucide-react"
import { Disc3, Sofa } from "lucide-react"
import { cn } from "@/lib/utils"

const upcomingSpaces: { title: string; icon: LucideIcon }[] = [
  { title: "SAMS Discotheque", icon: Disc3 },
  { title: "Lounge", icon: Sofa },
]

export function ComingSoonBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "rounded-full bg-primary/10 px-3 py-1 text-[0.75rem] font-semibold tracking-wide whitespace-nowrap text-primary uppercase",
        className
      )}
    >
      Coming soon
    </span>
  )
}

/** Spaces closed for remodelling, shown as "coming soon" tiles. */
export function ComingSoonSpaces({ className }: { className?: string }) {
  return (
    <ul className={cn("grid gap-4 sm:grid-cols-2", className)}>
      {upcomingSpaces.map(({ title, icon: Icon }) => (
        <li
          key={title}
          className="flex items-center justify-between gap-4 rounded-xl border border-foreground/10 p-5"
        >
          <span className="flex items-center gap-3">
            <Icon className="size-5 text-primary" strokeWidth={1.5} />
            <span className="font-heading text-lg font-bold">{title}</span>
          </span>
          <ComingSoonBadge />
        </li>
      ))}
    </ul>
  )
}
