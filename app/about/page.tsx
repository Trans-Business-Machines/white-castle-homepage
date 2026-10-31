import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"
import { SectionBand } from "@/components/section-band"
import { AboutIntro } from "@/components/about-intro"
import { AboutStats } from "@/components/about-stats"
import { AboutHistory } from "@/components/about-history"
import { NearbySection } from "@/components/nearby-section"
import { AboutCta } from "@/components/about-cta"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "About the motel",
  description:
    "A town-centre motel in Eldoret since 1985, 320 km northwest of Nairobi, with 118 self-contained rooms and a view of Sergoit Hill and the Nandi Hills.",
  path: "/about",
  keywords: [
    "White Castle Motel history",
    "Eldoret motel since 1985",
    "motel near Sergoit Hill",
  ],
})

export default function Page() {
  return (
    <>
      <AboutIntro />
      <SectionBand tinted>
        <Reveal>
          <AboutStats />
        </Reveal>
      </SectionBand>
      <SectionBand>
        <Reveal>
          <AboutHistory />
        </Reveal>
      </SectionBand>
      <SectionBand tinted>
        <Reveal>
          <NearbySection />
        </Reveal>
      </SectionBand>
      <SectionBand>
        <Reveal>
          <AboutCta />
        </Reveal>
      </SectionBand>
    </>
  )
}
