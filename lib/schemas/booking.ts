import { z } from "zod"
import { ADULT_OPTIONS } from "@/lib/schemas/availability"

export const bookingSchema = z
  .object({
    // The room the enquiry is for. Values are room UUIDs; the backend rejects
    // anything that isn't one.
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
    adults: z.enum(ADULT_OPTIONS, { error: "Choose how many adults" }),
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
