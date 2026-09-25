"use client"

import * as React from "react"
import { useForm, useWatch, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import toast from "react-hot-toast"
import { AlertCircle, CheckCircle2, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"
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
import { ADULT_OPTIONS } from "@/lib/schemas/availability"
import { bookingSchema, type BookingValues } from "@/lib/schemas/booking"
import { useUnits } from "@/hooks/useUnits"
import { useBookingEnquiry } from "@/hooks/useBookingEnquiry"
import { getApiErrorMessage } from "@/lib/api/errors"
import { formatRoomType, getStatusMeta, isBookable } from "@/lib/units"
import { isAdultOption, parseSearchDate } from "@/lib/availability"

const labelClass = "block text-sm font-semibold text-foreground"

// Focus, caret and selection take the brand colour so the panel's blue has a
// job beyond atmosphere: it marks where the visitor is.
const focusClass =
  "focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-primary/25 focus-visible:outline-none"

// White fields on the tinted bed, edged with --brand-line rather than the
// default grey: it is the brand hue and it clears 3:1 against both the field
// fill and the bed, so the control boundary is real and not a suggestion.
const surfaceClass =
  "border-brand-line bg-background transition-colors hover:border-primary aria-invalid:border-error-ink aria-invalid:ring-3 aria-invalid:ring-error-ink/20"

const fieldClass = cn(
  "mt-2 h-12 w-full rounded-lg border px-4 text-base caret-primary selection:bg-primary/20 placeholder:text-brand-hint",
  surfaceClass,
  focusClass
)

// The outline Button and the Select trigger both default to grey fills and
// grey placeholders; keep them on the tinted scale in every state, and keep
// the disabled room select legible instead of fading it out.
const triggerClass = cn(
  "mt-2 h-12 w-full px-4 text-base font-normal data-[size=default]:h-12",
  "hover:bg-background aria-expanded:border-primary aria-expanded:bg-background",
  "disabled:bg-brand-wash disabled:text-brand-hint disabled:opacity-100 data-placeholder:text-brand-hint",
  surfaceClass,
  focusClass
)

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return (
    <p
      role="alert"
      className="mt-2 flex items-start gap-1.5 text-sm font-medium text-error-ink"
    >
      <AlertCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
      {message}
    </p>
  )
}

function startOfToday() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return today
}

/**
 * All four come from the "Request this room" links on the accommodation page.
 * The dates are only present when the room came from an availability search.
 */
export function BookingForm({
  roomId,
  checkIn: checkInParam,
  checkOut: checkOutParam,
  adults: adultsParam,
}: {
  roomId?: string
  checkIn?: string
  checkOut?: string
  adults?: string
}) {
  const [submitted, setSubmitted] = React.useState(false)
  const successRef = React.useRef<HTMLDivElement>(null)

  const {
    data: units,
    isPending: unitsPending,
    isError: unitsFailed,
  } = useUnits()
  const enquiry = useBookingEnquiry()

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      // Pre-selecting from the query params needs no effect — they are known
      // before the room list arrives.
      roomId: roomId ?? "",
      fullName: "",
      phone: "",
      email: "",
      checkIn: checkInParam ? parseSearchDate(checkInParam) : undefined,
      checkOut: checkOutParam ? parseSearchDate(checkOutParam) : undefined,
      adults: adultsParam && isAdultOption(adultsParam) ? adultsParam : "1",
      message: "",
    },
  })

  const checkIn = useWatch({ control, name: "checkIn" })
  const selectedRoomId = useWatch({ control, name: "roomId" })

  // A link can go stale between the accommodation page and here, so flag a
  // preselected room that is no longer free rather than letting the backend
  // reject the request.
  const selectedUnit = units?.find((unit) => unit.room_id === selectedRoomId)
  const selectedUnavailable = Boolean(selectedUnit && !isBookable(selectedUnit))

  const roomPlaceholder = unitsPending
    ? "Loading rooms…"
    : unitsFailed
      ? "Rooms unavailable — use WhatsApp"
      : "Choose a room"

  // The submit button unmounts on success, so move focus to the confirmation
  // rather than letting it fall back to <body>.
  React.useEffect(() => {
    if (submitted) successRef.current?.focus()
  }, [submitted])

  async function onSubmit(values: BookingValues) {
    try {
      await enquiry.mutateAsync({
        room_id: values.roomId,
        // The backend takes plain dates, so send the day the guest picked
        // rather than a UTC-shifted timestamp.
        check_in_date: format(values.checkIn, "yyyy-MM-dd"),
        check_out_date: format(values.checkOut, "yyyy-MM-dd"),
        adults: Number(values.adults),
        guest_name: values.fullName,
        guest_phone: values.phone,
        guest_email: values.email,
        message: values.message || undefined,
      })

      toast.success("Request sent. Reception will confirm your room shortly.")
      setSubmitted(true)
    } catch (error) {
      toast.error(
        getApiErrorMessage(
          error,
          "We couldn't send your request. Please try again, or reach us on WhatsApp."
        )
      )
    }
  }

  return (
    <div className="relative isolate overflow-hidden rounded-2xl bg-brand-wash shadow-[0_24px_48px_-32px_var(--brand-deep)] ring-1 ring-primary/15">
      {/* The brand owns a whole region here rather than trimming the edges,
          and it is the same slab the confirmation expands into. */}
      <div className="bg-brand-deep bg-[radial-gradient(120%_200%_at_86%_-60%,rgb(255_255_255/0.22),transparent_62%)] px-6 py-5 sm:px-10 sm:py-6">
        <h2 className="font-heading text-xl font-extrabold text-white sm:text-2xl">
          Booking &amp; enquiry form
        </h2>
      </div>

      {submitted ? (
        <div
          ref={successRef}
          tabIndex={-1}
          role="status"
          className="animate-[confirm-in_620ms_cubic-bezier(0.16,1,0.3,1)_both] scroll-mt-28 border-t border-white/15 bg-brand-deep bg-[radial-gradient(90%_130%_at_8%_115%,rgb(255_255_255/0.16),transparent_62%)] px-6 py-10 text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none focus-visible:ring-inset motion-reduce:animate-none sm:px-10 sm:py-12"
        >
          <div>
            <span className="inline-flex size-12 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/35">
              <CheckCircle2 aria-hidden="true" className="size-7 text-white" />
            </span>
            <p className="mt-5 font-heading text-xl font-extrabold sm:text-2xl">
              Request sent.
            </p>
            <p className="mt-2 max-w-sm text-white/85">
              Reception will confirm your room by phone or email, usually within
              the hour.
            </p>
            <Button
              type="button"
              size="lg"
              onClick={() => {
                reset()
                enquiry.reset()
                setSubmitted(false)
              }}
              className="mt-7 h-11 rounded-full bg-white px-6 font-semibold text-brand-deep hover:bg-white/90 focus-visible:border-white focus-visible:ring-white/60"
            >
              Send another request
            </Button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="p-6 sm:p-10"
        >
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
              <span className={labelClass}>Room</span>
              <Controller
                control={control}
                name="roomId"
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    disabled={unitsPending || unitsFailed}
                  >
                    <SelectTrigger
                      aria-label="Room"
                      aria-invalid={Boolean(errors.roomId)}
                      className={triggerClass}
                    >
                      <SelectValue placeholder={roomPlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {units?.map((unit) => {
                        const { label, bookable } = getStatusMeta(unit.status)
                        return (
                          <SelectItem
                            key={unit.room_id}
                            value={unit.room_id}
                            disabled={!bookable}
                          >
                            {bookable
                              ? `Room ${unit.room_number} - ${formatRoomType(unit.room_type)}`
                              : `Room ${unit.room_number} - ${formatRoomType(unit.room_type)} (${label})`}
                          </SelectItem>
                        )
                      })}
                    </SelectContent>
                  </Select>
                )}
              />
              <FieldError
                message={
                  errors.roomId?.message ??
                  (selectedUnavailable
                    ? `Room ${selectedUnit?.room_number} is no longer free. Pick another room.`
                    : undefined)
                }
              />
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
                      className={triggerClass}
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
                      className={triggerClass}
                    />
                  )}
                />
                <FieldError message={errors.checkOut?.message} />
              </div>
            </div>

            <div>
              <span className={labelClass}>Adults</span>
              <Controller
                control={control}
                name="adults"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger aria-label="Adults" className={triggerClass}>
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
              <label htmlFor="message" className={labelClass}>
                Message
              </label>
              <Textarea
                id="message"
                rows={4}
                placeholder="Arrival time, anything we should know."
                aria-invalid={Boolean(errors.message)}
                className={cn(
                  "mt-2 scroll-mt-28 rounded-lg px-4 py-3 text-base caret-primary selection:bg-primary/20 placeholder:text-brand-hint md:text-base",
                  surfaceClass,
                  focusClass
                )}
                {...register("message")}
              />
              <FieldError message={errors.message?.message} />
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-start">
            <Button
              type="submit"
              size="lg"
              disabled={enquiry.isPending || selectedUnavailable}
              aria-busy={enquiry.isPending}
              className="h-12 rounded-full px-7 text-base font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/40 sm:flex-2"
            >
              {enquiry.isPending ? "Sending…" : "Send request"}
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-full border-brand-line bg-background px-7 text-base font-semibold text-foreground transition-colors hover:border-primary hover:bg-background sm:flex-1"
            >
              <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer">
                <WhatsappIcon />
                Or WhatsApp instead
              </a>
            </Button>
          </div>

          <p className="mt-5 flex items-start gap-2 text-sm text-brand-ink">
            <ShieldCheck
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0 text-primary"
            />
            Sending a request does not charge you. We hold the room until you
            confirm.
          </p>
        </form>
      )}
    </div>
  )
}
