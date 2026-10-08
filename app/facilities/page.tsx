import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"
import { SectionBand } from "@/components/section-band"
import { PageHeader } from "@/components/page-header"
import { ConferenceSection } from "@/components/conference-section"
import { VenuesSection } from "@/components/venues-section"
import { GuestServicesSection } from "@/components/guest-services-section"

export const metadata: Metadata = {
  title: "Facilities & services · White Castle Motel",
  description:
    "A conference hall for 120, the main bar, the pool bar, the cafe, a health club with sauna and SAMS Discotheque, everything on one compound in central Eldoret.",
}

export default function Page() {
  return (
    <>
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
