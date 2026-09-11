import Link from "next/link"
import { Bath, Bed, Brush, ChefHat, KeyRound, Wifi } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsappIcon } from "@/components/whatsapp-icon"
import { siteConfig } from "@/lib/site-config"

const tags = ["Sleeps 1-2", "Private bathroom", "Daily housekeeping"]

const amenities = [
  { icon: Bath, label: "Hot bath & shower" },
  { icon: Bed, label: "Single or twin bed" },
  { icon: ChefHat, label: "Room service" },
  { icon: Brush, label: "Daily housekeeping" },
  { icon: Wifi, label: "Wi-Fi throughout" },
  { icon: KeyRound, label: "24-hour reception" },
]

export function RoomDetails() {
  return (
    <div>
      <h2 className="font-heading text-2xl font-extrabold sm:text-3xl">
        Self-contained single
      </h2>

      <p className="mt-3 flex flex-wrap items-baseline gap-x-2">
        <span className="font-heading text-3xl font-extrabold">$35</span>
        <span className="text-base text-muted-foreground">
          / night · KES 4,500
        </span>
      </p>

      <p className="mt-5 text-base leading-relaxed text-muted-foreground">
        A warm, simply furnished room with its own bathroom hot bath and shower
        a telephone by the bed and a window that catches the morning.
        Housekeeping runs daily and the kitchen will bring food up to the room
        until late.
      </p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-muted px-4 py-2 text-[0.85rem]"
          >
            {tag}
          </li>
        ))}
      </ul>

      <hr className="mt-8" />

      <h3 className="mt-6 font-heading text-lg font-bold">In every room</h3>
      <ul className="mt-4 flex flex-wrap items-center gap-4">
        {amenities.map(({ icon: Icon, label }) => (
          <li
            key={label}
            className="flex items-center gap-3 rounded-full border border-secondary-foreground/80 px-4 py-1 text-base"
          >
            <Icon className="size-5 shrink-0" strokeWidth={1.5} />
            {label}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-start gap-3">
        <Button
          asChild
          size="lg"
          className="h-12 rounded-full px-7 text-base font-semibold"
        >
          <Link href="/contact">Request this room</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-12 rounded-full px-7 text-base font-semibold"
        >
          <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer">
            <WhatsappIcon />
            Ask on WhatsApp
          </a>
        </Button>
      </div>
    </div>
  )
}
