import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"
import { SectionBand } from "@/components/section-band"
import { AboutIntro } from "@/components/about-intro"
import { AboutStats } from "@/components/about-stats"
import { AboutHistory } from "@/components/about-history"
import { NearbySection } from "@/components/nearby-section"
import { AboutCta } from "@/components/about-cta"
import { pageMetadata } from "@/lib/seo"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbJsonLd } from "@/lib/structured-data"

export const metadata: Metadata = pageMetadata({
  title: "About White Castle Motel, Eldoret — Since 1985",
  description:
    "White Castle Motel is a town-centre motel in Eldoret since 1985, 320 km northwest of Nairobi, with 118 self-contained rooms and views of Sergoit Hill and the Nandi Hills.",
  path: "/about",
  absoluteTitle: true,
  keywords: [
    "White Castle Motel",
    "White Castle Motel Eldoret",
    "White Castle Hotel Eldoret",
    "White Castle Motel Kenya",
    "White Castle Motel history",
    "Eldoret motel since 1985",
    "motel near Sergoit Hill",
    "Uganda Road motel Eldoret",
    "Nandi Hills view hotel Eldoret",
    "Eldoret town centre motel",
  ],
})

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
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
