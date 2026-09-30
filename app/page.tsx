import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"
import { SectionBand } from "@/components/section-band"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { FacilitiesSection } from "@/components/facilities-section"
import { GallerySection } from "@/components/gallery-section"
import { EnquiryCta } from "@/components/enquiry-cta"
import { LocationSection } from "@/components/location-section"
import { NearbySection } from "@/components/nearby-section"
import { OtherSpacesSection } from "@/components/other-spaces"

export const metadata: Metadata = {
  title: "White Castle Motel · Eldoret",
  description:
    "118 self-contained rooms in the middle of Eldoret town, with hot showers, room service and a conference hall. Open around the clock.",
}

export default function Page() {
  return (
    <>
      <HeroSection />
      <SectionBand>
        <Reveal>
          <StatsSection />
        </Reveal>
      </SectionBand>
      <SectionBand>
        <Reveal>
          <FacilitiesSection />
        </Reveal>
      </SectionBand>
      <SectionBand tinted>
        <Reveal>
          <OtherSpacesSection />
        </Reveal>
      </SectionBand>
      <SectionBand>
        <Reveal>
          <GallerySection />
        </Reveal>
      </SectionBand>
      <SectionBand tinted>
        <Reveal>
          <EnquiryCta />
        </Reveal>
      </SectionBand>
      <SectionBand>
        <Reveal>
          <LocationSection />
        </Reveal>
      </SectionBand>
      <SectionBand tinted>
        <Reveal>
          <NearbySection />
        </Reveal>
      </SectionBand>
    </>
  )
}
