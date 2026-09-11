import SingleRoom from "@/public/assets/images/single_room.jpeg"
import ConferenceHall from "@/public/assets/images/board.jpeg"
import Bathroom from "@/public/assets/images/bathroom1.jpeg"
import Bathroom2 from "@/public/assets/images/bathroom2.jpeg"
import Restaurant from "@/public/assets/images/restaurant.jpeg"
import RooftopBar from "@/public/assets/images/rootop_bar.jpeg"
import Bar from "@/public/assets/images/bar.jpeg"
import SittingRoom from "@/public/assets/images/sitting_room.jpeg"
import Bedroom from "@/public/assets/images/bedroom2.jpeg"

export const GALLERY_FILTERS = [
  { id: "all", label: "All" },
  { id: "rooms", label: "Rooms" },
  { id: "eat-drink", label: "Eat & drink" },
] as const

export type GalleryFilterId = (typeof GALLERY_FILTERS)[number]["id"]
export type GalleryCategory = Exclude<GalleryFilterId, "all">

export type GalleryItem = {
  id: number
  category: GalleryCategory
  imageURL: string
  alt: string
}

export const galleryItems: GalleryItem[] = [
  { id: 1015, category: "rooms", imageURL: SingleRoom.src, alt: "Single room" },
  { id: 1024, category: "rooms", imageURL: Bedroom.src, alt: "Bedroom" },
  {
    id: 1043,
    category: "rooms",
    imageURL: SittingRoom.src,
    alt: "Sitting room",
  },
  { id: 1076, category: "rooms", imageURL: Bathroom.src, alt: "Bathroom" },
  { id: 1003, category: "rooms", imageURL: Bathroom2.src, alt: "Bathroom" },
  {
    id: 1025,
    category: "eat-drink",
    imageURL: RooftopBar.src,
    alt: "Rooftop bar",
  },
  {
    id: 1062,
    category: "eat-drink",
    imageURL: Restaurant.src,
    alt: "Restaurant",
  },
  { id: 1031, category: "eat-drink", imageURL: Bar.src, alt: "Bar" },
  {
    id: 1006,
    category: "rooms",
    imageURL: ConferenceHall.src,
    alt: "Conference hall",
  },
]
