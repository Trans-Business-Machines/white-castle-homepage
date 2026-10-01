import { z } from "zod"

export const ADULT_OPTIONS = ["1", "2", "3", "4", "5", "6"] as const

// Values are the backend's `meal_plan` strings, sent as-is.
export const MEAL_PLAN_OPTIONS = [
  "room_only",
  "bed_and_breakfast",
  "half_board",
  "full_board",
] as const

export type MealPlan = (typeof MEAL_PLAN_OPTIONS)[number]

export const DEFAULT_MEAL_PLAN: MealPlan = "room_only"

export const MEAL_PLAN_LABELS: Record<MealPlan, string> = {
  room_only:         "Bed Only",
  bed_and_breakfast: "Bed & Breakfast",
  half_board:        "Half Board",
  full_board:        "Full Board",
}

// Values match the backend's room_type slugs
export const ROOM_TYPE_OPTIONS = [
  "standard_single",
  "standard_double",
  "deluxe_single",
  "deluxe_double",
  "executive",
] as const

export const ANY_ROOM_TYPE = "any"

export const ROOM_TYPE_VALUES = [ANY_ROOM_TYPE, ...ROOM_TYPE_OPTIONS] as const

// Currency: KES = resident, USD = non-resident
export const CURRENCY_OPTIONS = ["KES", "USD"] as const
export type BookingCurrency = (typeof CURRENCY_OPTIONS)[number]
export const DEFAULT_CURRENCY: BookingCurrency = "KES"

export const CURRENCY_LABELS: Record<BookingCurrency, string> = {
  KES: "Resident (KES)",
  USD: "Non-resident (USD)",
}

export const availabilitySchema = z
  .object({
    checkIn:   z.date({ error: "Pick a check-in date" }),
    checkOut:  z.date({ error: "Pick a check-out date" }),
    adults:    z.enum(ADULT_OPTIONS, { error: "Choose how many adults" }),
    roomType:  z.enum(ROOM_TYPE_VALUES, { error: "Choose a room type" }),
    mealPlan:  z.enum(MEAL_PLAN_OPTIONS, { error: "Choose a meal plan" }),
    currency:  z.enum(CURRENCY_OPTIONS, { error: "Choose residency" }),
  })
  .refine((values) => values.checkOut > values.checkIn, {
    error: "Check-out must be after check-in",
    path: ["checkOut"],
  })

export type AvailabilityValues = z.infer<typeof availabilitySchema>
