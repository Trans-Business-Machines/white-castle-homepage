import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { GalleryGrid } from "@/components/gallery-grid"
import { GalleryCta } from "@/components/gallery-cta"

export const metadata: Metadata = {
  title: "Gallery · White Castle Motel",
  description:
    "Rooms, the Terrace, the bar and the conference hall at White Castle Motel, Eldoret.",
}

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="The motel, room by room"
        lead="Rooms, the Terrace, the bar and the hall. Filter by what you came to see."
      />
      <GalleryGrid />
      <GalleryCta />
    </>
  )
}
