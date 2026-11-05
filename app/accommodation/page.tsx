import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"
import { SectionBand } from "@/components/section-band"
import { PageHeader } from "@/components/page-header"
import { RatesSection } from "@/components/rates-section"
import { UnitListings } from "@/components/unit-listings"
import { parseAvailabilitySearch } from "@/lib/availability"
import { pageMetadata } from "@/lib/seo"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbJsonLd } from "@/lib/structured-data"

export const metadata: Metadata = pageMetadata({
  title: "Accommodation & room rates",
  description:
    "Single, standard, deluxe, family rooms and suites in central Eldoret, each self-contained with a hot shower. Check live availability and request a room.",
  path: "/accommodation",
  keywords: [
    "Eldoret room rates",
    "self-contained rooms Eldoret",
    "single rooms Eldoret",
    "deluxe rooms Eldoret",
    "family rooms Eldoret",
    "suites Eldoret",
    "Eldoret accommodation rates",
    "book accommodation Eldoret",
  ],
})

interface Props {
  searchParams: Promise<{
    checkIn?: string
    checkOut?: string
    adults?: string
    roomType?: string
    mealPlan?: string
  }>
}

export default async function Page({ searchParams }: Props) {
  const search = parseAvailabilitySearch(await searchParams)

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Accommodation", path: "/accommodation" },
        ])}
      />
      <PageHeader
        eyebrow="Accommodation"
        title="Rooms at an honest rate"
        lead="Live availability, straight from the front desk. Browse or check for availability and pick a room and send us a request we&rsquo;ll confirm by phone or WhatsApp."
      />

      <UnitListings search={search} />

      <SectionBand>
        <Reveal>
          <RatesSection />
        </Reveal>
      </SectionBand>
    </>
  )
}
