const stats = [
  {
    value: "118",
    description:
      "Self-contained single rooms, each with hot bath, shower and telephone.",
  },
  {
    value: "24 hrs",
    description:
      "Reception and room service, for late arrivals off the Nairobi road.",
  },
  {
    value: "320 km",
    description: "Northwest of Nairobi, right in the centre of Eldoret town.",
  },
  {
    value: "6",
    description: "Places to eat, meet and unwind without leaving the grounds.",
  },
]

export function StatsSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
      <dl className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.value}>
            <dt className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">
              {stat.value}
            </dt>
            <dd className="mt-2 max-w-xs leading-relaxed text-muted-foreground">
              {stat.description}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
