"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarDays } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DateField({
  value,
  onChange,
  label,
  invalid,
  disabledBefore,
  variant = "outline",
  className,
}: {
  value?: Date
  onChange: (date?: Date) => void
  label: string
  invalid?: boolean
  disabledBefore: Date
  variant?: React.ComponentProps<typeof Button>["variant"]
  className?: string
}) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={variant}
          aria-label={label}
          aria-invalid={invalid}
          className={cn("justify-between font-normal", className)}
        >
          <span className={cn(!value && "text-muted-foreground")}>
            {value ? format(value, "d MMM yyyy") : "Add date"}
          </span>
          <CalendarDays className="text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={value}
          // Close on pick so a second picker never opens over the first.
          onSelect={(date) => {
            onChange(date)
            setOpen(false)
          }}
          disabled={{ before: disabledBefore }}
          autoFocus
        />
      </PopoverContent>
    </Popover>
  )
}
