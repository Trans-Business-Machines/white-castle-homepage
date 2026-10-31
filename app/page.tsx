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
import { JsonLd } from "@/components/json-ld"
import { hotelJsonLd } from "@/lib/structured-data"
import { defaultTitle, pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: defaultTitle,
  description:
    "118 self-contained rooms in the middle of Eldoret town, with hot showers, room service and a conference hall. Open around the clock.",
  path: "/",
  absoluteTitle: true,
  keywords: [
    "hotels in Eldoret town",
    "Eldoret motel rooms",
    "conference hall Eldoret",
    "book a room in Eldoret",
  ],
})

export default function Page() {
  return (
    <>
      <JsonLd data={hotelJsonLd()} />
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
