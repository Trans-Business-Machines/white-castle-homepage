import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { RoomGallery } from "@/components/room-gallery"
import { RoomDetails } from "@/components/room-details"
import { RatesSection } from "@/components/rates-section"
import { OtherSpacesSection } from "@/components/other-spaces-section"

export const metadata: Metadata = {
  title: "Accommodation · White Castle Motel",
  description:
    "118 self-contained single rooms in central Eldoret, each with a hot bath, shower and telephone. One honest rate, $35 per night.",
}

const shots = [
  { src: "https://picsum.photos/id/1015/1000/750", alt: "The room at sunrise" },
  {
    src: "https://picsum.photos/id/1024/1000/750",
    alt: "The main block after dark",
  },
  { src: "https://picsum.photos/id/1076/1000/750", alt: "The stairwell" },
  {
    src: "https://picsum.photos/id/1043/1000/750",
    alt: "Morning mist over the hills",
  },
]

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Accommodation"
        title="118 rooms, one honest rate"
        lead="Every room at White Castle is a self-contained single with a hot bath, a shower and a telephone. No confusing tiers, no surprise supplements — just a clean, quiet room and room service when you want it."
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 sm:px-8 sm:pb-20 lg:grid-cols-2 lg:gap-16">
        <RoomGallery shots={shots} />
        <RoomDetails />
      </section>

      <RatesSection />
      <OtherSpacesSection />
    </>
  )
}
