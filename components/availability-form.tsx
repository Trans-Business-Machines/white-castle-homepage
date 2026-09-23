"use client"

import { useForm, useWatch, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { format } from "date-fns"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { DateField } from "@/components/date-field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ADULT_OPTIONS,
  ANY_ROOM_TYPE,
  ROOM_TYPE_VALUES,
  availabilitySchema,
  type AvailabilityValues,
} from "@/lib/schemas/availability"
import { formatRoomType } from "@/lib/units"

const fieldLabel =
  "text-[0.7rem] font-medium tracking-[0.12em] text-muted-foreground uppercase"

function startOfToday() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return today
}

export function AvailabilityForm({
  className,
  defaultValues,
}: {
  className?: string
  defaultValues?: Partial<AvailabilityValues>
}) {
  const router = useRouter()

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AvailabilityValues>({
    resolver: zodResolver(availabilitySchema),
    defaultValues: {
      adults: "1",
      roomType: ANY_ROOM_TYPE,
      ...defaultValues,
    },
  })

  const checkIn = useWatch({ control, name: "checkIn" })

  function onSubmit(values: AvailabilityValues) {
    const params = new URLSearchParams({
      checkIn: format(values.checkIn, "yyyy-MM-dd"),
      checkOut: format(values.checkOut, "yyyy-MM-dd"),
      adults: values.adults,
    })

    if (values.roomType !== ANY_ROOM_TYPE) {
      params.set("roomType", values.roomType)
    }

    router.push(`/accommodation?${params.toString()}`)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Check room availability"
      className={cn(
        "rounded-2xl bg-card p-4 shadow-xl ring-1 ring-foreground/5 sm:p-5",
        className
      )}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,1fr))_auto] lg:items-end lg:gap-0">
        <div className="lg:px-5 lg:first:pl-2">
          <span className={fieldLabel}>Check in</span>
          <Controller
            control={control}
            name="checkIn"
            render={({ field }) => (
              <DateField
                label="Check in"
                value={field.value}
                onChange={field.onChange}
                invalid={Boolean(errors.checkIn)}
                disabledBefore={startOfToday()}
                variant="ghost"
                className="mt-1 h-10 w-full px-0 text-base hover:bg-transparent"
              />
            )}
          />
        </div>

        <div className="lg:border-l lg:px-5">
          <span className={fieldLabel}>Check out</span>
          <Controller
            control={control}
            name="checkOut"
            render={({ field }) => (
              <DateField
                label="Check out"
                value={field.value}
                onChange={field.onChange}
                invalid={Boolean(errors.checkOut)}
                disabledBefore={checkIn ?? startOfToday()}
                variant="ghost"
                className="mt-1 h-10 w-full px-0 text-base hover:bg-transparent"
              />
            )}
          />
        </div>

        <div className="lg:border-l lg:px-5">
          <span className={fieldLabel}>Adults</span>
          <Controller
            control={control}
            name="adults"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger
                  size="default"
                  aria-label="Adults"
                  className="mt-1 h-10 w-full border-0 px-0 text-base shadow-none data-[size=default]:h-10 dark:bg-transparent"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {ADULT_OPTIONS.map((value) => (
                    <SelectItem key={value} value={value}>
                      {value === "1" ? "1 adult" : `${value} adults`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="lg:border-l lg:px-5">
          <span className={fieldLabel}>Room type</span>
          <Controller
            control={control}
            name="roomType"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger
                  size="default"
                  aria-label="Room type"
                  className="mt-1 h-10 w-full border-0 px-0 text-base shadow-none data-[size=default]:h-10 dark:bg-transparent"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {ROOM_TYPE_VALUES.map((value) => (
                    <SelectItem key={value} value={value}>
                      {value === ANY_ROOM_TYPE
                        ? "Any room type"
                        : formatRoomType(value)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="h-12 rounded-full px-6 text-base font-semibold sm:col-span-2 lg:col-span-1 lg:ml-5"
        >
          <Search />
          Check availability
        </Button>
      </div>

      {errors.checkIn || errors.checkOut ? (
        <p role="alert" className="mt-3 text-sm text-destructive lg:px-2">
          {errors.checkIn?.message ?? errors.checkOut?.message}
        </p>
      ) : null}
    </form>
  )
}
