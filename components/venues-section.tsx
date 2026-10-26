import { Card, CardContent, CardTitle } from "@/components/ui/card"
import {
  FacilityCarousel,
  type FacilityPhoto,
} from "@/components/facility-carousel"
import CafeTableService from "@/public/assets/images/cafe-table-service.png"
import Cafeteria from "@/public/assets/images/cafeteria.jpg"
import PoolRoom from "@/public/assets/images/pool-room.png"
import PoolTableGame from "@/public/assets/images/pool-table-game.jpg"
import PoolBarPlayers from "@/public/assets/images/pool-bar-players.jpg"
import PoolTableCloseup from "@/public/assets/images/pool-table-closeup.jpg"
import MainBarCounter from "@/public/assets/images/main-bar-counter.jpg"
import MainBarSeating from "@/public/assets/images/main-bar-seating.jpg"
import MainBarLounge from "@/public/assets/images/main-bar-lounge.jpg"
import BartenderServingCocktail from "@/public/assets/images/bartender-serving-cocktail.jpg"
import SteamBath from "@/public/assets/images/health-club-steam-bath.jpg"
import HealthClubLounge from "@/public/assets/images/health-club-lounge.jpg"
import MassageRoom from "@/public/assets/images/health-club-massage-room.jpg"
import Lockers from "@/public/assets/images/health-club-lockers.jpg"
import LoungeDanceFloor from "@/public/assets/images/the-lounge-dance-floor.jpg"
import LoungeBooths from "@/public/assets/images/the-lounge-booths.jpg"
import LoungeBar from "@/public/assets/images/the-lounge-bar.jpg"
import LoungeSeating from "@/public/assets/images/the-lounge-seating.jpg"

const venues: {
  id: string
  title: string
  photos: FacilityPhoto[]
  description: string
}[] = [
  {
    id: "cafe",
    title: "Cafe",
    photos: [
      { src: Cafeteria, alt: "The cafeteria seating" },
      { src: CafeTableService, alt: "Lunch being served at a cafe table" },
    ],
    description:
      "Breakfast from six, chai all day, and plates that arrive quickly when you have a bus to catch. Open to guests and to town.",
  },
  {
    id: "pool-bar",
    title: "Pool bar",
    photos: [
      { src: PoolRoom, alt: "The pool bar with both tables" },
      { src: PoolBarPlayers, alt: "A game in progress at the pool bar" },
      { src: PoolTableGame, alt: "A player lining up a shot" },
      { src: PoolTableCloseup, alt: "Balls on the baize, mid-game" },
    ],
    description:
      "Two tables, a bar along the wall and stools to watch from. Put your name on the board and wait your turn.",
  },
  {
    id: "bar",
    title: "Main bar",
    photos: [
      { src: MainBarCounter, alt: "The main bar counter" },
      { src: MainBarSeating, alt: "Seating in front of the main bar" },
      { src: MainBarLounge, alt: "The main bar lounge" },
      {
        src: BartenderServingCocktail,
        alt: "A bartender serving a cocktail",
      },
    ],
    description:
      "The long counter where Eldoret meets after work. Cold beer, the match on, and nyama choma from the kitchen.",
  },
  {
    id: "health-club",
    title: "Health club & sauna",
    photos: [
      { src: SteamBath, alt: "The timber-lined steam bath" },
      { src: HealthClubLounge, alt: "The health club lounge" },
      { src: MassageRoom, alt: "Massage beds in the treatment room" },
      { src: Lockers, alt: "Lockers in the changing room" },
    ],
    description:
      "A timber-lined steam bath and sauna, a massage room and a quiet lounge to cool down in, with lockers for your things. Sweat out a long drive before dinner.",
  },
  {
    id: "lounge",
    title: "The Lounge",
    photos: [
      { src: LoungeDanceFloor, alt: "The Lounge dance floor under the lights" },
      { src: LoungeBooths, alt: "Red and black booths beneath painted murals" },
      { src: LoungeBar, alt: "The Lounge bar with its row of stools" },
      { src: LoungeSeating, alt: "Booth seating along the length of the room" },
    ],
    description:
      "Booths, murals and its own bar around a dance floor, in a wing away from the bedrooms so the music stays where the dancing is.",
  },
]

export function VenuesSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20">
      <h2 className="font-heading text-2xl font-extrabold sm:text-3xl">
        Food, drink and unwinding
      </h2>

      <div className="mt-8 grid gap-10 sm:grid-cols-2">
        {venues.map((venue) => (
          <Card
            key={venue.id}
            id={venue.id}
            className="scroll-mt-24 gap-0 border-0 bg-transparent p-0 py-1.5 ring-0"
          >
            <FacilityCarousel
              photos={venue.photos}
              sizes="(min-width: 640px) 45vw, 92vw"
              className="rounded-xl"
              slideClassName="aspect-16/10"
            />
            <CardTitle className="mt-4 font-heading text-xl font-bold">
              {venue.title}
            </CardTitle>
            <CardContent className="mt-2 px-3 text-base leading-relaxed text-muted-foreground">
              {venue.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
