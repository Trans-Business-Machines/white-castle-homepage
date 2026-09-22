"use client"

import * as React from "react"
import { useWindowVirtualizer } from "@tanstack/react-virtual"
import Link from "next/link"
import { format } from "date-fns"
import { CircleAlert } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { UnitCard, type StayContext } from "@/components/unit-card"
import { AvailabilityForm } from "@/components/availability-form"
import { useUnits } from "@/hooks/useUnits"
import { useAvailableUnits } from "@/hooks/useAvailableUnits"
import { getApiErrorMessage } from "@/lib/api/errors"
import { formatRoomType, isBookable } from "@/lib/units"
import { siteConfig } from "@/lib/site-config"
import { parseSearchDate, toFormDefaults } from "@/lib/availability"
import type { AvailabilitySearch, Unit } from "@/lib/types"

// One virtualised row holds a full grid row, so the column count has to match
// the Tailwind breakpoints the grid below uses.
const breakpoints = [
  { query: "(min-width: 1024px)", columns: 3 },
  { query: "(min-width: 640px)", columns: 2 },
] as const

const GRID_GAP = 24 // matches `gap-6`
const ROW_ESTIMATE = 560 // a card with two lines of description

function subscribeToColumns(onChange: () => void) {
  const queries = breakpoints.map(({ query }) => window.matchMedia(query))
  queries.forEach((query) => query.addEventListener("change", onChange))
  return () =>
    queries.forEach((query) => query.removeEventListener("change", onChange))
}

function readColumns() {
  return (
    breakpoints.find(({ query }) => window.matchMedia(query).matches)
      ?.columns ?? 1
  )
}

function useColumns() {
  // useSyncExternalStore keeps this SSR-safe and avoids a setState-in-effect,
  // which the project's hooks lint rules reject.
  return React.useSyncExternalStore(subscribeToColumns, readColumns, () => 1)
}

export function UnitListings({ search }: { search?: AvailabilitySearch }) {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20">
      {search ? <AvailabilityResults search={search} /> : <AllRooms />}
    </section>
  )
}

/** The default view: every active room, with its status. */
function AllRooms() {
  const { data, isPending, isError, error, refetch, isFetching } = useUnits()

  return (
    <>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl font-extrabold sm:text-3xl">
            Our rooms
          </h2>
          <p className="mt-2 max-w-xl text-base leading-relaxed text-muted-foreground">
            Live availability, straight from the front desk. Pick a room and
            send us a request — we&rsquo;ll confirm by phone or WhatsApp.
          </p>
        </div>
        {data?.length ? (
          <p className="text-sm text-muted-foreground">
            {data.filter(isBookable).length} of {data.length} available now
          </p>
        ) : null}
      </div>

      {isPending ? <UnitSkeletonGrid /> : null}

      {isError ? (
        <ErrorState
          message={getApiErrorMessage(
            error,
            "We couldn't load our rooms just now."
          )}
          onRetry={() => refetch()}
          isRetrying={isFetching}
        />
      ) : null}

      {data ? (
        data.length === 0 ? (
          <EmptyState />
        ) : (
          <VirtualUnitGrid items={data.map((unit) => ({ unit }))} />
        )
      ) : null}
    </>
  )
}

/** Results for a specific stay, priced for those dates. */
function AvailabilityResults({ search }: { search: AvailabilitySearch }) {
  const { data, isPending, isError, error, refetch, isFetching } =
    useAvailableUnits(search)

  const nights = data?.[0]?.nights

  return (
    <>
      <div className="mb-6">
        <h2 className="font-heading text-2xl font-extrabold sm:text-3xl">
          Rooms for your dates
        </h2>
        <StaySummary
          search={search}
          nights={nights}
          count={data?.length}
          isError={isError}
        />
      </div>

      {/* Adjust the search without going back to the home page. */}
      <AvailabilityForm
        className="mb-8"
        defaultValues={toFormDefaults(search)}
      />

      {isPending ? <UnitSkeletonGrid /> : null}

      {isError ? (
        <ErrorState
          message={getApiErrorMessage(
            error,
            "We couldn't check availability just now."
          )}
          onRetry={() => refetch()}
          isRetrying={isFetching}
        />
      ) : null}

      {data ? (
        data.length === 0 ? (
          <NoAvailability search={search} />
        ) : (
          <VirtualUnitGrid
            items={data.map((unit) => ({ unit, stay: { unit, search } }))}
          />
        )
      ) : null}
    </>
  )
}

/** "23–27 Sep · 4 nights · 1 adult · Deluxe" — the context the totals need. */
function StaySummary({
  search,
  nights,
  count,
  isError,
}: {
  search: AvailabilitySearch
  nights?: number
  count?: number
  isError: boolean
}) {
  const parts = [formatStayRange(search.checkIn, search.checkOut)]

  if (nights) parts.push(nights === 1 ? "1 night" : `${nights} nights`)
  parts.push(search.adults === "1" ? "1 adult" : `${search.adults} adults`)
  if (search.roomType) parts.push(formatRoomType(search.roomType))

  return (
    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-base text-muted-foreground">
      {/* On failure the error panel below carries the message, so the count
          is dropped rather than left reading "Checking…" forever. */}
      {isError ? null : (
        <>
          <span>
            {count === undefined
              ? "Checking availability…"
              : count === 1
                ? "1 room free"
                : `${count} rooms free`}
          </span>
          <span aria-hidden>·</span>
        </>
      )}
      <span>{parts.join(" · ")}</span>
      <Link
        href="/accommodation"
        className="font-medium text-primary underline-offset-4 hover:underline"
      >
        Show all rooms
      </Link>
    </div>
  )
}

function NoAvailability({ search }: { search: AvailabilitySearch }) {
  return (
    <div className="rounded-2xl bg-muted p-6 sm:p-10">
      <p className="font-heading text-lg font-bold">
        No rooms free for those dates
      </p>
      <p className="mt-2 max-w-xl text-base leading-relaxed text-muted-foreground">
        {search.roomType
          ? `Nothing in ${formatRoomType(search.roomType)} is free for ${formatStayRange(search.checkIn, search.checkOut)}. Try another room type or shift the dates.`
          : `Everything is taken for ${formatStayRange(search.checkIn, search.checkOut)}. Try shifting the dates, or ask us directly — we sometimes have late cancellations.`}
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Button
          asChild
          size="lg"
          variant="outline"
          className="h-11 rounded-full px-6 text-base font-semibold"
        >
          <Link href="/accommodation">Show all rooms</Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="h-11 rounded-full px-6 text-base font-semibold"
        >
          <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer">
            Ask on WhatsApp
          </a>
        </Button>
      </div>
    </div>
  )
}

function formatStayRange(checkIn: string, checkOut: string) {
  const from = parseSearchDate(checkIn)
  const to = parseSearchDate(checkOut)
  if (!from || !to) return `${checkIn} – ${checkOut}`

  // Drop the repeated month on a stay that doesn't cross one.
  const fromLabel =
    from.getMonth() === to.getMonth() && from.getFullYear() === to.getFullYear()
      ? format(from, "d")
      : format(from, "d MMM")

  return `${fromLabel} – ${format(to, "d MMM yyyy")}`
}

/** One card's worth of data: a room, plus the stay it was priced for. */
type CardItem = { unit: Unit; stay?: StayContext }

function VirtualUnitGrid({ items }: { items: CardItem[] }) {
  const columns = useColumns()

  // The virtualizer caches measured heights by row index, and those indexes
  // mean something different once the column count changes — remount so it
  // starts from a clean slate.
  return <VirtualRows key={columns} items={items} columns={columns} />
}

function VirtualRows({
  items,
  columns,
}: {
  items: CardItem[]
  columns: number
}) {
  const [listTop, setListTop] = React.useState(0)

  // The list scrolls with the window, so the virtualizer needs the list's
  // offset from the top of the document. Measured in a ref callback (and
  // re-measured on resize) rather than an effect, per the hooks lint rules.
  const measureList = React.useCallback((node: HTMLDivElement | null) => {
    if (!node) return

    const update = () =>
      setListTop(node.getBoundingClientRect().top + window.scrollY)

    update()
    const observer = new ResizeObserver(update)
    observer.observe(document.body)
    return () => observer.disconnect()
  }, [])

  const rowCount = Math.ceil(items.length / columns)

  const virtualizer = useWindowVirtualizer({
    count: rowCount,
    estimateSize: () => ROW_ESTIMATE,
    overscan: 2,
    gap: GRID_GAP,
    scrollMargin: listTop,
  })

  return (
    <div
      ref={measureList}
      className="relative w-full"
      style={{ height: virtualizer.getTotalSize() }}
    >
      {virtualizer.getVirtualItems().map((row) => {
        const start = row.index * columns
        const rowItems = items.slice(start, start + columns)

        return (
          <div
            key={row.key}
            data-index={row.index}
            ref={virtualizer.measureElement}
            className="absolute top-0 left-0 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3"
            style={{
              transform: `translateY(${row.start - virtualizer.options.scrollMargin}px)`,
            }}
          >
            {rowItems.map((item) => (
              <UnitCard
                key={item.unit.room_id}
                unit={item.unit}
                stay={item.stay}
              />
            ))}
          </div>
        )
      })}
    </div>
  )
}

function UnitSkeletonGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }, (_, index) => (
        <Card key={index} className="gap-0 overflow-hidden pt-0 shadow-sm">
          <div className="h-56 w-full animate-pulse bg-muted" />
          <div className="flex flex-col gap-3 px-4 pt-5">
            <div className="h-5 w-2/3 animate-pulse rounded bg-muted" />
            <div className="h-4 w-1/3 animate-pulse rounded bg-muted" />
            <div className="h-4 w-full animate-pulse rounded bg-muted" />
            <div className="h-11 w-full animate-pulse rounded-full bg-muted" />
          </div>
        </Card>
      ))}
      <span className="sr-only" role="status">
        Loading rooms
      </span>
    </div>
  )
}

function ErrorState({
  message,
  onRetry,
  isRetrying,
}: {
  message: string
  onRetry: () => void
  isRetrying: boolean
}) {
  return (
    <div
      role="alert"
      className="flex flex-col items-start gap-4 rounded-2xl bg-muted p-6 sm:p-10"
    >
      <p className="flex items-center gap-3 text-base">
        <CircleAlert className="size-5 shrink-0" strokeWidth={1.5} />
        {message}
      </p>
      <Button
        onClick={onRetry}
        disabled={isRetrying}
        size="lg"
        variant="outline"
        className="h-11 rounded-full px-6 text-base font-semibold"
      >
        {isRetrying ? "Trying again…" : "Try again"}
      </Button>
    </div>
  )
}

function EmptyState() {
  return (
    <div className="rounded-2xl bg-muted p-6 text-base text-muted-foreground sm:p-10">
      No rooms are listed at the moment. Call the front desk on{" "}
      <span className="whitespace-nowrap">{siteConfig.phone}</span> and
      we&rsquo;ll find you one.
    </div>
  )
}
