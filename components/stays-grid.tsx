import { StayCard } from "@/components/stay-card"
import { stays } from "@/lib/site-config"

export function StaysGrid() {
  return (
    <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {stays.map((stay) => (
        <StayCard key={stay.title} {...stay} />
      ))}
    </div>
  )
}
