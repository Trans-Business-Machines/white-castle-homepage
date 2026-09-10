export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string
  title: string
  lead?: string
}) {
  return (
    <header className="mx-auto max-w-7xl px-5 pt-12 pb-10 sm:px-8 sm:pt-16">
      <p className="text-[0.75rem] font-semibold tracking-[0.16em] text-primary uppercase">
        {eyebrow}
      </p>
      <h1 className="mt-3 max-w-3xl font-heading text-4xl font-extrabold sm:text-5xl">
        {title}
      </h1>
      {lead ? (
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {lead}
        </p>
      ) : null}
    </header>
  )
}
