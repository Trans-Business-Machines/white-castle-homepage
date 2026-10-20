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

export const metadata: Metadata = {
  title: "White Castle Motel · Eldoret",
  description:
    "118 self-contained rooms in the middle of Eldoret town, with hot showers, room service and a conference hall. Open around the clock.",
}

export default function Page() {
  return (
    <>
      <HeroSection />
      <SectionBand tinted>
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
          <GallerySection />
        </Reveal>
      </SectionBand>
      <SectionBand>
        <Reveal>
          <EnquiryCta />
        </Reveal>
      </SectionBand>
      <SectionBand tinted>
        <Reveal>
          <LocationSection />
        </Reveal>
      </SectionBand>
      <SectionBand>
        <Reveal>
          <NearbySection />
        </Reveal>
      </SectionBand>
    </>
  )
}
