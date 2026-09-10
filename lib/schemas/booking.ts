import { z } from "zod"
import { ADULT_OPTIONS, CHILDREN_OPTIONS } from "@/lib/schemas/availability"

export const SUBJECT_OPTIONS = [
  "Room booking request",
  "Conference or event enquiry",
  "Group & corporate rates",
  "Something else",
] as const

export const bookingSchema = z
  .object({
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
    subject: z.enum(SUBJECT_OPTIONS, { error: "Pick what this is about" }),
    checkIn: z.date({ error: "Pick a check-in date" }),
    checkOut: z.date({ error: "Pick a check-out date" }),
    adults: z.enum(ADULT_OPTIONS, { error: "Choose how many adults" }),
    children: z.enum(CHILDREN_OPTIONS, { error: "Choose how many children" }),
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
