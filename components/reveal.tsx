"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

// Fades and lifts its children into place the first time they scroll into
// view. Wrap page sections in it; leave above-the-fold content alone.
export function Reveal({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -10% 0px",
  })

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,translate] duration-700 ease-out motion-reduce:transition-none",
        !inView &&
          "translate-y-6 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100",
        className
      )}
    >
      {children}
    </div>
  )
}
