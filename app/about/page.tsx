import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"
import { AboutIntro } from "@/components/about-intro"
import { AboutStats } from "@/components/about-stats"
import { NearbySection } from "@/components/nearby-section"
import { AboutCta } from "@/components/about-cta"

export const metadata: Metadata = {
  title: "About the motel · White Castle Motel",
  description:
    "A town-centre motel in Eldoret, 320 km northwest of Nairobi, with 118 self-contained rooms and a view of Sergoit Hill and the Nandi Hills.",
}

export default function Page() {
  return (
    <>
      <AboutIntro />
      <Reveal>
        <AboutStats />
      </Reveal>
      <Reveal>
        <NearbySection />
      </Reveal>
      <Reveal>
        <AboutCta />
      </Reveal>
    </>
  )
}
