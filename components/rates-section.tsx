const rates = [
  { term: "Room only, per night", detail: "$35 · KES 4,500" },
  { term: "Check in", detail: "From 12:00" },
  { term: "Check out", detail: "By 10:00" },
  { term: "Payment", detail: "M-Pesa, card or cash" },
]

export function RatesSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20">
      <div className="grid gap-8 rounded-2xl bg-muted p-6 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
        <div>
          <h2 className="font-heading text-2xl font-extrabold sm:text-3xl">
            Rates &amp; house rules
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            Rates are per room, per night, and include taxes. Group and
            corporate rates are quoted on request.
          </p>
        </div>

        <dl>
          {rates.map((rate) => (
            <div
              key={rate.term}
              className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-foreground/10 py-4 last:border-0"
            >
              <dt className="text-base text-muted-foreground">{rate.term}</dt>
              <dd className="text-base font-semibold">{rate.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
