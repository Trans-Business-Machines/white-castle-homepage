import { ComingSoonSpaces } from "@/components/coming-soon-spaces"

export function OtherSpacesSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24">
      <h2 className="font-heading text-2xl font-extrabold sm:text-3xl">
        Other spaces coming soon
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
        The SAMS Discotheque and the lounge are being remodelled. They&rsquo;ll
        be open once the work is done.
      </p>

      <ComingSoonSpaces className="mt-10" />
    </section>
  )
}
