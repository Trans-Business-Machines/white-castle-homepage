import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"
import { SectionBand } from "@/components/section-band"
import { PageHeader } from "@/components/page-header"
import { GalleryGrid } from "@/components/gallery-grid"
import { GalleryCta } from "@/components/gallery-cta"
import { pageMetadata } from "@/lib/seo"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbJsonLd } from "@/lib/structured-data"

export const metadata: Metadata = pageMetadata({
  title: "Photo gallery",
  description:
    "Rooms, the cafe, the bars, the health club and the conference hall at White Castle Motel, Eldoret.",
  path: "/gallery",
  keywords: [
    "White Castle Motel photos",
    "Eldoret hotel gallery",
    "Eldoret motel rooms pictures",
    "Eldoret hotel pictures",
    "conference hall photos Eldoret",
  ],
})

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />
      <PageHeader
        eyebrow="Gallery"
        title="The motel, room by room"
        lead="Rooms, the cafe, the bars and the hall. Filter by what you came to see."
      />
      <Reveal>
        <GalleryGrid />
      </Reveal>

      <SectionBand>
        <Reveal>
          <GalleryCta />
        </Reveal>
      </SectionBand>
    </>
  )
}
