import Image from "next/image"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export type StayCardProps = {
  title: string
  subtitle: string
  image: string
  href: string
  tags?: readonly string[]
  features: readonly { icon: LucideIcon; label: string }[]
  price: string
  priceSuffix?: string
}

export function StayCard({
  title,
  subtitle,
  image,
  href,
  tags,
  features,
  price,
  priceSuffix,
}: StayCardProps) {
  return (
    <Card className="gap-0 border-0 bg-transparent p-0 py-0 ring-0">
      <Link href={href} className="group block">
        <div className="relative aspect-4/3 overflow-hidden rounded-xl">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <CardHeader className="mt-4 gap-0 px-0">
        {tags?.length ? (
          <div className="mb-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-muted px-3 py-1.5 text-[0.8rem] text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
        <CardTitle className="font-heading text-xl font-bold">
          <Link href={href} className="hover:text-primary">
            {title}
          </Link>
        </CardTitle>
        <p className="text-base text-muted-foreground">{subtitle}</p>
      </CardHeader>

      <CardContent className="mt-4 flex items-center justify-between gap-4 px-0">
        <div className="flex items-center gap-2 rounded-full border px-3 py-2">
          {features.map(({ icon: Icon, label }, index) => (
            <span key={index} className="flex items-center gap-1.5 text-sm">
              <Icon className="size-4" />
              {label}
            </span>
          ))}
        </div>
        <p className="font-heading text-xl font-bold whitespace-nowrap">
          {price}
          {priceSuffix ? (
            <span className="text-sm font-medium text-muted-foreground">
              {priceSuffix}
            </span>
          ) : null}
        </p>
      </CardContent>
    </Card>
  )
}
