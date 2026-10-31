import { Bath, Bed, Users } from "lucide-react"
import SingleRoom from "@/public/assets/images/single-room.jpg"
import ConferenceHall from "@/public/assets/images/conference-setup.jpg"
import { type StayCardProps } from "@/components/stay-card"

export const siteConfig = {
  name: "White Castle",
  fullName: "White Castle Motel",
  tagline: "Motel · Eldoret",
  description:
    "118 self-contained rooms in the middle of Eldoret town, with the Sergoit and Nandi hills on the horizon. Quiet, warm and open around the clock.",
  phone: "0741 884 833",
  phoneIntl: "+254741884833",
  altPhone: "0758 821 763",
  altPhoneIntl: "+254758821763",
  email: "reservations@eldoretwhitecastle.com",
  address: {
    street: "Uganda Road, Eldoret CBD",
    poBox: "P.O. Box 566",
    postalCode: "30100",
    city: "Eldoret",
    region: "Uasin Gishu County, Kenya",
  },
  whatsapp: "https://wa.me/254741884833",
  // Used for local-business structured data and the embedded map.
  geo: {
    latitude: 0.518402,
    longitude: 35.270575,
  },
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Eldoret+White+Castle+Motel",
  checkIn: "12:00",
  checkOut: "10:00",
  numberOfRooms: 118,
  locale: "en_KE",
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
  { label: "Pool bar", href: "/facilities#pool-bar" },
  { label: "Main bar", href: "/facilities#bar" },
  { label: "Cafe", href: "/facilities#cafe" },
  { label: "Health club & sauna", href: "/facilities#health-club" },
  { label: "The Lounge", href: "/facilities#lounge" },
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
]
