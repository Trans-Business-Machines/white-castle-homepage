"use client"

import * as React from "react"
import { useForm, useWatch, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsappIcon } from "@/components/whatsapp-icon"
import { DateField } from "@/components/date-field"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { siteConfig } from "@/lib/site-config"
import { ADULT_OPTIONS, CHILDREN_OPTIONS } from "@/lib/schemas/availability"
import {
  SUBJECT_OPTIONS,
  bookingSchema,
  type BookingValues,
} from "@/lib/schemas/booking"

const labelClass = "block text-sm font-medium"

const fieldClass =
  "mt-2 h-12 w-full rounded-lg border border-input bg-background px-4 text-base transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20"

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return (
    <p role="alert" className="mt-2 text-sm text-destructive">
      {message}
    </p>
  )
}

function startOfToday() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return today
}

export function BookingForm() {
  const [submitted, setSubmitted] = React.useState(false)

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      subject: "Room booking request",
      adults: "1",
      children: "0",
      message: "",
    },
  })

  const checkIn = useWatch({ control, name: "checkIn" })

  async function onSubmit(values: BookingValues) {
    // TODO: POST to the booking endpoint once it exists.
    console.info("Booking request", values)
    setSubmitted(true)
  }

  return (
    <div className="rounded-2xl bg-muted p-6 sm:p-10">
      <h2 className="font-heading text-xl font-extrabold sm:text-2xl">
        Booking &amp; enquiry form
      </h2>

      {submitted ? (
        <div className="mt-6 flex gap-3 rounded-xl bg-background p-5 ring-1 ring-foreground/10">
          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
          <div>
            <p className="font-medium">Request sent.</p>
            <p className="mt-1 text-muted-foreground">
              Reception will confirm your room by phone or email, usually within
              the hour.
            </p>
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => setSubmitted(false)}
              className="mt-4 h-11 rounded-full px-6 font-semibold"
            >
              Send another request
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-6">
          <div className="space-y-5">
            <div>
              <label htmlFor="fullName" className={labelClass}>
                Full name
              </label>
              <input
                id="fullName"
                type="text"
                autoComplete="name"
                placeholder="Jane Kiprop"
                aria-invalid={Boolean(errors.fullName)}
                className={fieldClass}
                {...register("fullName")}
              />
              <FieldError message={errors.fullName?.message} />
            </div>

            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone number
              </label>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+254 7XX XXX XXX"
                aria-invalid={Boolean(errors.phone)}
                className={fieldClass}
                {...register("phone")}
              />
              <FieldError message={errors.phone?.message} />
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                aria-invalid={Boolean(errors.email)}
                className={fieldClass}
                {...register("email")}
              />
              <FieldError message={errors.email?.message} />
            </div>

            <div>
              <span className={labelClass}>Subject</span>
              <Controller
                control={control}
                name="subject"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger
                      aria-label="Subject"
                      aria-invalid={Boolean(errors.subject)}
                      className="mt-2 h-12 w-full bg-background px-4 text-base data-[size=default]:h-12"
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {SUBJECT_OPTIONS.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              <FieldError message={errors.subject?.message} />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <span className={labelClass}>Check in</span>
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
                      className="mt-2 h-12 w-full bg-background px-4 text-base"
                    />
                  )}
                />
                <FieldError message={errors.checkIn?.message} />
              </div>

              <div>
                <span className={labelClass}>Check out</span>
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
                      className="mt-2 h-12 w-full bg-background px-4 text-base"
                    />
                  )}
                />
                <FieldError message={errors.checkOut?.message} />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <span className={labelClass}>Adults</span>
                <Controller
                  control={control}
                  name="adults"
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger
                        aria-label="Adults"
                        className="mt-2 h-12 w-full bg-background px-4 text-base data-[size=default]:h-12"
                      >
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {ADULT_OPTIONS.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              <div>
                <span className={labelClass}>Children</span>
                <Controller
                  control={control}
                  name="children"
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger
                        aria-label="Children"
                        className="mt-2 h-12 w-full bg-background px-4 text-base data-[size=default]:h-12"
                      >
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {CHILDREN_OPTIONS.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>
                Message
              </label>
              <Textarea
                id="message"
                rows={4}
                placeholder="Number of rooms, arrival time, anything we should know."
                aria-invalid={Boolean(errors.message)}
                className="mt-2 bg-background text-base"
                {...register("message")}
              />
              <FieldError message={errors.message?.message} />
            </div>
          </div>

          <div className="mt-7 flex  items-start gap-3">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="h-12 rounded-full px-7 text-base font-semibold flex-2"
            >
              Send request
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 flex-1 rounded-full bg-background px-7 text-base font-semibold"
            >
              <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer">
                <WhatsappIcon />
                Or WhatsApp instead
              </a>
            </Button>
          </div>

          <p className="mt-5 text-sm text-muted-foreground">
            Sending a request does not charge you. We hold the room until you
            confirm.
          </p>
        </form>
      )}
    </div>
  )
}
