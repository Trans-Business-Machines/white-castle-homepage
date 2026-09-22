import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Page not found · White Castle Motel",
  description: "The page you were looking for isn't here.",
}

export default function NotFound() {
  return (
    <>
      <PageHeader
        eyebrow="Page not found"
        title="We couldn't find that page"
        lead="The link may be old, or the page may have moved. Everything else is still where you left it."
      />

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24">
        <Button
          asChild
          size="lg"
          className="h-12 rounded-full px-7 text-base font-semibold"
        >
          <Link href="/">Back to home</Link>
        </Button>
      </section>
    </>
  )
}
