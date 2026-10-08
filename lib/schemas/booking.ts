import { z } from "zod"
import { CURRENCY_OPTIONS, DEFAULT_CURRENCY, MEAL_PLAN_OPTIONS } from "@/lib/schemas/availability"

export const CHILD_OPTIONS = ["0", "1", "2", "3", "4", "5", "6"] as const

const childCount = (label: string) =>
  z.enum(CHILD_OPTIONS, { error: `Choose number of ${label}.` })

export const bookingSchema = z
  .object({
    roomId: z.uuid({ error: "Choose the room you'd like" }),
    fullName: z
      .string()
      .trim()
      .min(2, { error: "Tell us who the booking is for" })
      .max(80, { error: "That name is too long" }),
    phone: z
      .string()
      .trim()
      .min(7, { error: "Add a phone number we can call" })
      .max(20, { error: "That phone number is too long" })
      .regex(/^[+\d][\d\s-]*$/, {
        error: "Use digits, spaces and an optional leading +",
      }),
    email: z.email({ error: "Add an email we can reply to" }),
    checkIn: z.date({ error: "Pick a check-in date" }),
    checkOut: z.date({ error: "Pick a check-out date" }),
    adults: z.enum(["1", "2", "3", "4", "5", "6"] as const, { error: "Choose how many adults" }),
    childrenUnder5: childCount("children under 5"),
    children6To12: childCount("children aged 6–12"),
    mealPlan: z.enum(MEAL_PLAN_OPTIONS, { error: "Choose a meal plan" }),
    currency: z.enum(CURRENCY_OPTIONS, { error: "Choose residency" }),
    message: z
      .string()
      .trim()
      .max(1000, { error: "Keep the message under 1000 characters" })
      .optional(),
  })
  .refine((values) => values.checkOut > values.checkIn, {
    error: "Check-out must be after check-in",
    path: ["checkOut"],
  })

export type BookingValues = z.infer<typeof bookingSchema>
