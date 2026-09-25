const milestones = [
  {
    year: "1960s",
    title: "A fundi in Kiambu",
    detail:
      "Samuel Muchai Kinyanjui starts out as a fundi, then moves into construction and real estate. As a contractor he takes on major government and private projects, including the rehabilitation of State House Nairobi and several State Lodges.",
  },
  {
    year: "Mid-1970s",
    title: "The move to Eldoret",
    detail:
      "Muchai settles in Eldoret and keeps building. Muchai Estate in Eldoret West, one of his developments, still bears his name.",
  },
  {
    year: "1985",
    title: "White Castle opens",
    detail:
      "The motel opens on Eldoret's main highway. Inside, SAMS Discotheque becomes a legend of its own, famous for electrifying jam sessions and, for a generation of young revellers, the best night out in town.",
  },
  {
    year: "2019",
    title: "Muchai's passing",
    detail:
      "Samuel Muchai Kinyanjui dies. White Castle carries on as one of the largest hotels in the city.",
  },
  {
    year: "2024",
    title: "Honoured by the President",
    detail:
      "President William Ruto posthumously recognises Muchai as a key figure in Eldoret's development.",
  },
]

export function AboutHistory() {
  return (
    <section className="mx-auto grid max-w-7xl items-start gap-10 px-5 pb-16 sm:px-8 sm:pb-20 lg:grid-cols-2 lg:gap-16">
      <div className="lg:sticky lg:top-28">
        <p className="text-[0.75rem] font-semibold tracking-[0.16em] text-primary uppercase">
          Our history
        </p>
        <h2 className="mt-3 max-w-md font-heading text-3xl leading-[1.15] font-extrabold sm:text-4xl">
          On the main highway since 1985
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Eldoret White Castle Motel is one of the largest and best-known hotels
          in the city. For four decades it has been a place to stay and a place
          to go out, for travellers from across Kenya and from further afield.
        </p>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          It was the brainchild of Samuel Muchai Kinyanjui, a businessman from
          Gatundu in Kiambu County and a descendant of Paramount Chief Kinyanjui
          wa Gathirimu. Muchai&rsquo;s legacy lives on in the motel, which still
          serves travellers and businesspeople every day.
        </p>
      </div>

      <ol className="space-y-10 border-l border-foreground/10 pl-7 sm:pl-9">
        {milestones.map((milestone) => (
          <li key={milestone.year} className="relative">
            <span
              aria-hidden="true"
              className="absolute top-1.5 -left-7 size-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background sm:-left-9"
            />
            <p className="font-heading text-sm font-bold tracking-wide text-primary">
              {milestone.year}
            </p>
            <h3 className="mt-1 font-heading text-lg font-bold">
              {milestone.title}
            </h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              {milestone.detail}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}
