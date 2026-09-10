import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ContactMethods } from "@/components/contact-methods"
import { BookingForm } from "@/components/booking-form"
import { BookingSteps } from "@/components/booking-steps"
import { MapCard } from "@/components/map-card"

export const metadata: Metadata = {
  title: "Contact & enquiries · White Castle Motel",
  description:
    "Send a booking request to White Castle Motel, Uganda Road, Eldoret. Reception is answered 24 hours, and WhatsApp is fastest for same-day rooms.",
}

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Send a booking request"
        lead="Fill in the form and we will confirm your room by phone or email, usually within the hour. In a rush? WhatsApp is faster."
      />
      <ContactMethods />

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
          <BookingForm />
          <div className="flex flex-col gap-8">
            <MapCard note="Uasin Gishu County, Kenya · secure parking on site." />
            <BookingSteps />
          </div>
        </div>
      </section>
    </>
  )
}
