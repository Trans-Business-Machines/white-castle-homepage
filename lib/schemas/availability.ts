import { z } from "zod"

export const ADULT_OPTIONS = ["1", "2", "3", "4", "5", "6"] as const
export const CHILDREN_OPTIONS = ["0", "1", "2", "3", "4"] as const

export const availabilitySchema = z
  .object({
    checkIn: z.date({ error: "Pick a check-in date" }),
    checkOut: z.date({ error: "Pick a check-out date" }),
    adults: z.enum(ADULT_OPTIONS, { error: "Choose how many adults" }),
    children: z.enum(CHILDREN_OPTIONS, { error: "Choose how many children" }),
  })
  .refine((values) => values.checkOut > values.checkIn, {
    error: "Check-out must be after check-in",
    path: ["checkOut"],
  })

export type AvailabilityValues = z.infer<typeof availabilitySchema>
