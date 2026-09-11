import { StaysGrid } from "@/components/stays-grid"

export function OtherSpacesSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24">
      <h2 className="font-heading text-2xl font-extrabold sm:text-3xl">
        Other spaces you can book
      </h2>

      <StaysGrid />
    </section>
  )
}
