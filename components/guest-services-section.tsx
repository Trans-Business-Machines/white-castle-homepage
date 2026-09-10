import {
  Brush,
  Car,
  ChefHat,
  CreditCard,
  KeyRound,
  Lock,
  Users,
  Wifi,
} from "lucide-react"

const services = [
  { icon: KeyRound, label: "24-hour reception" },
  { icon: ChefHat, label: "Room service" },
  { icon: Brush, label: "Daily housekeeping" },
  { icon: Wifi, label: "Wi-Fi throughout" },
  { icon: Lock, label: "Secure parking" },
  { icon: CreditCard, label: "M-Pesa & card" },
  { icon: Car, label: "Airport & town transfers" },
  { icon: Users, label: "Group & corporate rates" },
]

export function GuestServicesSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24">
      <div className="rounded-2xl bg-muted p-6 sm:p-10 lg:p-14">
        <h2 className="font-heading text-2xl font-extrabold sm:text-3xl">
          Guest services
        </h2>

        <ul className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 text-base">
              <Icon className="size-5 shrink-0" strokeWidth={1.5} />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
