import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"
import { SectionBand } from "@/components/section-band"
import { PageHeader } from "@/components/page-header"
import { GalleryGrid } from "@/components/gallery-grid"
import { GalleryCta } from "@/components/gallery-cta"

export const metadata: Metadata = {
  title: "Gallery · White Castle Motel",
  description:
    "Rooms, the cafe, the bars and the conference hall at White Castle Motel, Eldoret.",
}

export default function Page() {
  return (
    <>
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
