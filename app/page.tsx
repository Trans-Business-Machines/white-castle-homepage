import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { StaySection } from "@/components/stay-section"
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
      <Reveal>
        <StatsSection />
      </Reveal>
      <Reveal>
        <StaySection />
      </Reveal>
      <Reveal>
        <FacilitiesSection />
      </Reveal>
      <Reveal>
        <GallerySection />
      </Reveal>
      <Reveal>
        <EnquiryCta />
      </Reveal>
      <Reveal>
        <LocationSection />
      </Reveal>
      <Reveal>
        <NearbySection />
      </Reveal>
    </>
  )
}
