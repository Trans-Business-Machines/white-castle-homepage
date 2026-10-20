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
  CURRENCY_LABELS,
  CURRENCY_OPTIONS,
  DEFAULT_CURRENCY,
  DEFAULT_MEAL_PLAN,
  MEAL_PLAN_LABELS,
  MEAL_PLAN_OPTIONS,
  ROOM_TYPE_VALUES,
  availabilitySchema,
  type AvailabilityValues,
} from "@/lib/schemas/availability"
import { formatRoomType } from "@/lib/units"

const fieldLabel =
  "text-[0.7rem] font-medium tracking-[0.12em] text-muted-foreground uppercase"

// The shadcn defaults sit the options flush against the menu's edge; this
// form's larger triggers need roomier menus to match.
const selectContent = "p-1.5"
const selectItem = "py-2 pr-9 pl-3 text-[0.95rem]"

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
      mealPlan: DEFAULT_MEAL_PLAN,
      currency: DEFAULT_CURRENCY,
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

    if (values.mealPlan !== DEFAULT_MEAL_PLAN) {
      params.set("mealPlan", values.mealPlan)
    }

    if (values.currency !== DEFAULT_CURRENCY) {
      params.set("currency", values.currency)
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
      {/* One row only from xl: below that the six fields can't all show
          their longest value ("Non-resident (USD)", "Standard Double"), so
          they wrap into a grid. The row's tracks are weighted to those
          longest values rather than split evenly, so nothing truncates. */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,0.75fr)_minmax(0,1.2fr)_minmax(0,1.15fr)_minmax(0,1.35fr)_auto] xl:items-end xl:gap-0">
        <div className="xl:px-4 xl:first:pl-2">
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

        <div className="xl:border-l xl:px-4">
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

        <div className="xl:border-l xl:px-4">
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
                <SelectContent className={selectContent}>
                  {ADULT_OPTIONS.map((value) => (
                    <SelectItem
                      key={value}
                      value={value}
                      className={selectItem}
                    >
                      {value === "1" ? "1 adult" : `${value} adults`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="xl:border-l xl:px-4">
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
                <SelectContent className={selectContent}>
                  {ROOM_TYPE_VALUES.map((value) => (
                    <SelectItem
                      key={value}
                      value={value}
                      className={selectItem}
                    >
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

        <div className="xl:border-l xl:px-4">
          <span className={fieldLabel}>Meal plan</span>
          <Controller
            control={control}
            name="mealPlan"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger
                  size="default"
                  aria-label="Meal plan"
                  className="mt-1 h-10 w-full border-0 px-0 text-base shadow-none data-[size=default]:h-10 dark:bg-transparent"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className={selectContent}>
                  {MEAL_PLAN_OPTIONS.map((value) => (
                    <SelectItem
                      key={value}
                      value={value}
                      className={selectItem}
                    >
                      {MEAL_PLAN_LABELS[value]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="xl:border-l xl:px-4">
          <span className={fieldLabel}>Residency</span>
          <Controller
            control={control}
            name="currency"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger
                  size="default"
                  aria-label="Residency"
                  className="mt-1 h-10 w-full border-0 px-0 text-base shadow-none data-[size=default]:h-10 dark:bg-transparent"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className={selectContent}>
                  {CURRENCY_OPTIONS.map((value) => (
                    <SelectItem
                      key={value}
                      value={value}
                      className={selectItem}
                    >
                      {CURRENCY_LABELS[value]}
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
          className="h-12 rounded-full px-6 text-base font-semibold sm:col-span-2 lg:col-span-3 xl:col-span-1 xl:ml-4"
        >
          <Search />
          {/* The row has no room for the full label beside six fields. */}
          <span className="xl:hidden">Check availability</span>
          <span className="hidden xl:inline">Search</span>
        </Button>
      </div>

      {errors.checkIn || errors.checkOut ? (
        <p role="alert" className="mt-3 text-sm text-destructive xl:px-2">
          {errors.checkIn?.message ?? errors.checkOut?.message}
        </p>
      ) : null}
    </form>
  )
}
