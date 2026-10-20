import type { StaticImageData } from "next/image"
import DeluxeDoubleRoom from "@/public/assets/images/deluxe-double-room.jpg"
import DeluxeDoubleTeaTray from "@/public/assets/images/deluxe-double-tea-tray.jpg"
import CarpetedDoubleRoom from "@/public/assets/images/carpeted-double-room.jpg"
import CarpetedDoubleSittingArea from "@/public/assets/images/carpeted-double-sitting-area.jpg"
import SingleRoomWindow from "@/public/assets/images/single-room-window.jpg"
import SingleRoomArmchair from "@/public/assets/images/single-room-armchair.jpg"
import DeluxeSingleRoom from "@/public/assets/images/deluxe-single-room.jpg"
import DeluxeSingleBathroom from "@/public/assets/images/deluxe-single-bathroom.jpg"
import BnbRoom from "@/public/assets/images/bnb-room.jpg"
import RoomSittingArea from "@/public/assets/images/room-sitting-area.jpg"
import Restaurant from "@/public/assets/images/restaurant.jpg"
import RestaurantBuffet from "@/public/assets/images/restaurant-buffet.jpg"
import Buffet from "@/public/assets/images/buffet.jpg"
import CafeDiningRoom from "@/public/assets/images/cafe-dining-room.png"
import CafeSeating from "@/public/assets/images/cafe-seating.png"
import CafeTableDetail from "@/public/assets/images/cafe-table-detail.jpg"
import CafeTableService from "@/public/assets/images/cafe-table-service.png"
import ChickenAndChips from "@/public/assets/images/chicken-and-chips.jpg"
import FreshJuice from "@/public/assets/images/fresh-juice.jpg"
import MainBarCounter from "@/public/assets/images/main-bar-counter.jpg"
import BartenderCocktails from "@/public/assets/images/bartender-cocktails.jpg"
import BartenderCocktail from "@/public/assets/images/bartender-cocktail.jpg"
import Cocktails from "@/public/assets/images/cocktails.jpg"
import Lounge from "@/public/assets/images/lounge.jpg"
import LoungeSeating from "@/public/assets/images/lounge-seating.png"
import LoungeDanceFloor from "@/public/assets/images/the-lounge-dance-floor.jpg"
import LoungeBooths from "@/public/assets/images/the-lounge-booths.jpg"
import LoungeBar from "@/public/assets/images/the-lounge-bar.jpg"
import LoungeSeatingNew from "@/public/assets/images/the-lounge-seating.jpg"
import PoolRoom from "@/public/assets/images/pool-room.png"
import PoolTableGame from "@/public/assets/images/pool-table-game.jpg"
import ConferenceSetup from "@/public/assets/images/conference-setup.jpg"
import ConferenceUShape from "@/public/assets/images/conference-u-shape.jpg"
import ConferenceTables from "@/public/assets/images/conference-tables.jpg"
import ConferenceClassroom from "@/public/assets/images/conference-classroom.jpg"
import Smoothies from "@/public/assets/images/smoothies.jpg"
import BartenderServingCocktail from "@/public/assets/images/bartender-serving-cocktail.jpg"
import Milkshake from "@/public/assets/images/milkshake.jpg"
import CitrusCocktail from "@/public/assets/images/citrus-cocktail.jpg"

export const GALLERY_FILTERS = [
  { id: "all", label: "All" },
  { id: "rooms", label: "Rooms" },
  { id: "eat-drink", label: "Eat & drink" },
  { id: "lounge", label: "Lounge & pool" },
  { id: "conference", label: "Conference" },
] as const

export type GalleryFilterId = (typeof GALLERY_FILTERS)[number]["id"]
export type GalleryCategory = Exclude<GalleryFilterId, "all">

export type GalleryItem = {
  id: number
  category: GalleryCategory
  image: StaticImageData
  alt: string
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: "rooms",
    image: DeluxeDoubleRoom,
    alt: "Deluxe double room",
  },
  { id: 2, category: "eat-drink", image: Restaurant, alt: "Restaurant" },
  {
    id: 3,
    category: "eat-drink",
    image: BartenderCocktails,
    alt: "Bartender with a row of cocktails",
  },
  {
    id: 4,
    category: "rooms",
    image: CarpetedDoubleRoom,
    alt: "Carpeted room with two beds",
  },
  { id: 5, category: "lounge", image: Lounge, alt: "Lounge" },
  {
    id: 34,
    category: "lounge",
    image: LoungeDanceFloor,
    alt: "The Lounge dance floor",
  },
  { id: 6, category: "eat-drink", image: CafeDiningRoom, alt: "Cafe" },
  {
    id: 7,
    category: "rooms",
    image: SingleRoomWindow,
    alt: "Single room by the window",
  },
  { id: 8, category: "lounge", image: PoolRoom, alt: "Pool tables" },
  {
    id: 9,
    category: "eat-drink",
    image: ChickenAndChips,
    alt: "Chicken and chips",
  },
  {
    id: 10,
    category: "rooms",
    image: DeluxeSingleBathroom,
    alt: "Bathroom in a deluxe single",
  },
  {
    id: 35,
    category: "lounge",
    image: LoungeBooths,
    alt: "Booths in The Lounge",
  },
  {
    id: 11,
    category: "eat-drink",
    image: MainBarCounter,
    alt: "Main bar counter",
  },
  {
    id: 12,
    category: "conference",
    image: ConferenceSetup,
    alt: "Conference hall set for a meeting",
  },
  {
    id: 13,
    category: "rooms",
    image: DeluxeSingleRoom,
    alt: "Deluxe single room",
  },
  { id: 14, category: "eat-drink", image: Cocktails, alt: "Cocktails" },
  {
    id: 15,
    category: "lounge",
    image: PoolTableGame,
    alt: "Guest playing pool",
  },
  {
    id: 16,
    category: "eat-drink",
    image: RestaurantBuffet,
    alt: "Restaurant with the buffet laid out",
  },
  {
    id: 17,
    category: "rooms",
    image: CarpetedDoubleSittingArea,
    alt: "Sofa, desk and TV in a carpeted room",
  },
  {
    id: 18,
    category: "eat-drink",
    image: CafeTableService,
    alt: "Waitress serving a guest",
  },
  { id: 19, category: "lounge", image: LoungeSeating, alt: "Lounge seating" },
  { id: 36, category: "lounge", image: LoungeBar, alt: "The Lounge bar" },
  { id: 20, category: "eat-drink", image: Buffet, alt: "Buffet" },
  {
    id: 21,
    category: "rooms",
    image: SingleRoomArmchair,
    alt: "Single room with an armchair",
  },
  {
    id: 22,
    category: "eat-drink",
    image: BartenderCocktail,
    alt: "Bartender holding a cocktail",
  },
  { id: 23, category: "eat-drink", image: CafeSeating, alt: "Cafe seating" },
  {
    id: 24,
    category: "rooms",
    image: BnbRoom,
    alt: "Room with a kitchenette and dining table",
  },
  { id: 25, category: "eat-drink", image: FreshJuice, alt: "Fresh juice" },
  {
    id: 37,
    category: "lounge",
    image: LoungeSeatingNew,
    alt: "Booth seating in The Lounge",
  },
  {
    id: 26,
    category: "eat-drink",
    image: CafeTableDetail,
    alt: "Cafe table",
  },
  {
    id: 27,
    category: "conference",
    image: ConferenceUShape,
    alt: "Meeting room set in a U-shape",
  },
  {
    id: 38,
    category: "rooms",
    image: DeluxeDoubleTeaTray,
    alt: "Tea tray and water in a deluxe double",
  },
  {
    id: 28,
    category: "eat-drink",
    image: Smoothies,
    alt: "Three smoothies on the bar",
  },
  {
    id: 29,
    category: "eat-drink",
    image: BartenderServingCocktail,
    alt: "Bartender serving a cocktail on a tray",
  },
  {
    id: 30,
    category: "conference",
    image: ConferenceTables,
    alt: "Meeting room tables laid with water",
  },
  { id: 31, category: "eat-drink", image: Milkshake, alt: "Milkshake" },
  {
    id: 32,
    category: "eat-drink",
    image: CitrusCocktail,
    alt: "Cocktail with a slice of lime",
  },
  {
    id: 39,
    category: "rooms",
    image: RoomSittingArea,
    alt: "Sitting area by a bedroom window",
  },
  {
    id: 33,
    category: "conference",
    image: ConferenceClassroom,
    alt: "Conference hall set classroom-style",
  },
]
