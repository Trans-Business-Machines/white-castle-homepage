import { cn } from "@/lib/utils"

// A full-width strip behind one page section. Pages alternate plain and
// tinted bands so each change of background marks a new section. Sections
// carry their own bottom padding; the band supplies the top.
//
// Keep Reveal inside the band, not around it, so the background is in place
// before the content fades up into it.
export function SectionBand({
  tinted = false,
  children,
}: {
  tinted?: boolean
  children: React.ReactNode
}) {
  return (
    <div className={cn("pt-16 sm:pt-20", tinted && "bg-band")}>{children}</div>
  )
}
