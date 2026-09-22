import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"
import { PageHeader } from "@/components/page-header"
import { RatesSection } from "@/components/rates-section"
import { OtherSpacesSection } from "@/components/other-spaces"
import { UnitListings } from "@/components/unit-listings"
import { parseAvailabilitySearch } from "@/lib/availability"

export const metadata: Metadata = {
  title: "Accommodation · White Castle Motel",
  description:
    "Single, standard, deluxe, family rooms and suites in central Eldoret, each self-contained with a hot shower. Check live availability and request a room.",
}

interface Props {
  searchParams: Promise<{
    checkIn?: string
    checkOut?: string
    adults?: string
    roomType?: string
  }>
}

export default async function Page({ searchParams }: Props) {
  const search = parseAvailabilitySearch(await searchParams)

  return (
    <>
      <PageHeader
        eyebrow="Accommodation"
        title="Rooms at an honest rate"
        lead="Every room at White Castle is self-contained, with a hot shower and a telephone. Browse what's free right now and send us a request  we'll confirm by phone or WhatsApp."
      />

      <UnitListings search={search} />

      <Reveal>
        <RatesSection />
      </Reveal>
      <Reveal>
        <OtherSpacesSection />
      </Reveal>
    </>
  )
}
