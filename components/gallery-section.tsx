import Image from "next/image"
import Link from "next/link"

const shots = [
  { id: 1011, alt: "Guest photographing the Eldoret skyline" },
  { id: 1043, alt: "Morning mist over the Nandi hills" },
  { id: 1076, alt: "The conference hall ceiling" },
  { id: 1062, alt: "A guest on the walk up to reception" },
  { id: 1031, alt: "Uganda Road at dusk" },
  { id: 1002, alt: "The main block seen from the terrace" },
]

export function GallerySection() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-heading text-3xl font-extrabold sm:text-4xl">
          A look around
        </h2>
        <Link
          href="/gallery"
          className="font-medium text-primary underline underline-offset-4 hover:no-underline"
        >
          Open the gallery →
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shots.map((shot) => (
          <Link
            key={shot.id}
            href="/gallery"
            className="group relative block aspect-[4/3] overflow-hidden rounded-xl"
          >
            <Image
              src={`https://picsum.photos/id/${shot.id}/800/600`}
              alt={shot.alt}
              fill
              sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </Link>
        ))}
      </div>
    </section>
  )
}
