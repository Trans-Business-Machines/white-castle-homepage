"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { WhatsappIcon } from "@/components/whatsapp-icon"
import { mainNav, siteConfig } from "@/lib/site-config"

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl items-center gap-5 px-5 py-4 sm:px-8 xl:gap-6">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <span className="flex flex-col leading-none whitespace-nowrap">
            <span className="font-heading text-lg font-extrabold tracking-[0.08em] uppercase">
              {siteConfig.name}
            </span>
            <span className="mt-1 text-[0.65rem] tracking-[0.22em] uppercase opacity-80">
              {siteConfig.tagline}
            </span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-5 lg:flex xl:gap-7">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "relative py-1 text-[0.95rem] transition-opacity",
                "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-current after:transition-transform after:duration-200",
                isActive(item.href)
                  ? "font-semibold after:scale-x-100"
                  : "opacity-80 after:scale-x-0 hover:opacity-100 hover:after:scale-x-100"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-3 lg:ml-0 lg:flex">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-11 rounded-full border-white/40 bg-transparent px-5 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
          >
            <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer">
              <WhatsappIcon />
              WhatsApp
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="h-11 rounded-full bg-white px-6 font-semibold text-primary hover:bg-white/90"
          >
            <Link href="/contact">Book a room</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="ml-auto rounded-lg p-2 hover:bg-white/10 lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/15 lg:hidden">
          <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
            <nav className="flex flex-col">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "relative border-b border-white/10 py-3 pl-4 text-base last:border-0",
                    "before:absolute before:top-1/2 before:left-0 before:h-5 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-current before:transition-opacity",
                    isActive(item.href)
                      ? "font-semibold before:opacity-100"
                      : "opacity-80 before:opacity-0"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-11 rounded-full border-white/40 bg-transparent px-5 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
              >
                <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer">
                  <WhatsappIcon />
                  WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="h-11 rounded-full bg-white px-6 font-semibold text-primary hover:bg-white/90"
              >
                <Link href="/contact">Book a room</Link>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
