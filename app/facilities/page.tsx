import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"
import { SectionBand } from "@/components/section-band"
import { PageHeader } from "@/components/page-header"
import { ConferenceSection } from "@/components/conference-section"
import { VenuesSection } from "@/components/venues-section"
import { GuestServicesSection } from "@/components/guest-services-section"
import { pageMetadata } from "@/lib/seo"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbJsonLd } from "@/lib/structured-data"

export const metadata: Metadata = pageMetadata({
  title: "Facilities & services",
  description:
    "A conference hall for 120, the main bar, the pool bar, the cafe, a health club with sauna and The Lounge, everything on one compound in central Eldoret.",
  path: "/facilities",
  keywords: [
    "conference hall Eldoret",
    "conference venue Eldoret",
    "wedding venue Eldoret",
    "Eldoret bar and restaurant",
    "Eldoret restaurant",
    "sauna Eldoret",
    "health club Eldoret",
    "pool bar Eldoret",
    "event venue Eldoret",
  ],
})

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Facilities", path: "/facilities" },
        ])}
      />
      <PageHeader
        eyebrow="Facilities & services"
        title="Eat, meet and unwind without leaving"
        lead="Six things share the compound with the rooms. Between them they cover a working breakfast, a county workshop, a Friday night and everything in between."
      />
      <SectionBand tinted>
        <Reveal>
          <ConferenceSection />
        </Reveal>
      </SectionBand>
      <SectionBand>
        <Reveal>
          <VenuesSection />
        </Reveal>
      </SectionBand>
      <SectionBand tinted>
        <Reveal>
          <GuestServicesSection />
        </Reveal>
      </SectionBand>
    </>
  )
}
