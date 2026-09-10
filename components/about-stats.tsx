const stats = [
  { value: "118", label: "Self-contained single rooms" },
  { value: "320 km", label: "Northwest of Nairobi" },
  { value: "2,100 m", label: "Above sea level, in the City of Champions" },
  { value: "24 hrs", label: "Reception and room service" },
]

export function AboutStats() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20">
      <dl className="grid gap-8 rounded-2xl bg-muted p-6 sm:grid-cols-2 sm:p-10 lg:grid-cols-4 lg:p-14">
        {stats.map((stat) => (
          <div key={stat.value}>
            <dt className="font-heading text-2xl font-extrabold text-primary sm:text-3xl">
              {stat.value}
            </dt>
            <dd className="mt-2 max-w-[16rem] leading-relaxed text-muted-foreground">
              {stat.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
