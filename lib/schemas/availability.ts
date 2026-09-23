import { z } from "zod"

export const ADULT_OPTIONS = ["1", "2", "3", "4", "5", "6"] as const


export const ROOM_TYPE_OPTIONS = [
  "standard",
  "deluxe",
  "single",
  "family",
  "suite",
  "1_bedroom",
  "2_bedroom",
] as const


export const ANY_ROOM_TYPE = "any"

export const ROOM_TYPE_VALUES = [ANY_ROOM_TYPE, ...ROOM_TYPE_OPTIONS] as const

export const availabilitySchema = z
  .object({
    checkIn: z.date({ error: "Pick a check-in date" }),
    checkOut: z.date({ error: "Pick a check-out date" }),
    adults: z.enum(ADULT_OPTIONS, { error: "Choose how many adults" }),
    roomType: z.enum(ROOM_TYPE_VALUES, { error: "Choose a room type" }),
  })
  .refine((values) => values.checkOut > values.checkIn, {
    error: "Check-out must be after check-in",
    path: ["checkOut"],
  })

export type AvailabilityValues = z.infer<typeof availabilitySchema>
