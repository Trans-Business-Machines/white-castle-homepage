import { Bath, Bed, Users } from "lucide-react"
import SingleRoom from "@/public/assets/images/single_room.jpeg"
import Terrace from "@/public/assets/images/terrace.jpeg"
import ConferenceHall from "@/public/assets/images/board.jpeg"
import { type StayCardProps } from "@/components/stay-card"

export const siteConfig = {
  name: "White Castle",
  fullName: "White Castle Motel",
  tagline: "Motel · Eldoret",
  description:
    "118 self-contained rooms in the middle of Eldoret town, with the Sergoit and Nandi hills on the horizon. Quiet, warm and open around the clock.",
  phone: "+254 700 000 000",
  email: "stay@whitecastlemotel.co.ke",
  address: {
    street: "Uganda Road, Eldoret CBD",
    region: "Uasin Gishu County, Kenya",
  },
  whatsapp: "https://wa.me/254700000000",
} as const

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Accommodation", href: "/accommodation" },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const

export const exploreNav = [
  { label: "Rooms & rates", href: "/accommodation" },
  { label: "Facilities & services", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "About the motel", href: "/about" },
  { label: "Contact & enquiries", href: "/contact" },
] as const

export const onSiteNav = [
  { label: "Conference hall", href: "/facilities#conference" },
  { label: "The Terrace", href: "/facilities#terrace" },
  { label: "Main bar", href: "/facilities#bar" },
  { label: "Cafe", href: "/facilities#cafe" },
  { label: "SAMS Discotheque", href: "/facilities#discotheque" },
] as const

export const stays: StayCardProps[] = [
  {
    title: "Self-contained single",
    subtitle: "Main block, Eldoret CBD",
    image: SingleRoom.src,
    href: "/accommodation",
    tags: ["Hot shower", "Room service"],
    features: [
      { icon: Bed, label: "1" },
      { icon: Bath, label: "1" },
      { icon: Users, label: "1-2" },
    ],
    price: "$35",
    priceSuffix: "/n",
  },
  {
    title: "Conference hall",
    subtitle: "Ground floor · seats 120",
    image: ConferenceHall.src,
    href: "/facilities#conference",
    tags: ["Projector & PA", "Tea service"],
    features: [{ icon: Users, label: "20-120" }],
    price: "On request",
  },
  {
    title: "The Terrace",
    subtitle: "Open-air · hill views",
    image: Terrace.src,
    href: "/facilities#terrace",
    tags: ["Open air", "Hill views"],
    features: [{ icon: Users, label: "10-60" }],
    price: "On request",
  },
]
