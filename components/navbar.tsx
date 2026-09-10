"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, MessageCircle, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { mainNav, siteConfig } from "@/lib/site-config"

function CastleMark() {
  return (
    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="size-5 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 21V8l2.5 1.5L9 8v-.5L12 3l3 4.5V8l2.5 1.5L20 8v13" />
        <path d="M10 21v-4a2 2 0 1 1 4 0v4" />
      </svg>
    </span>
  )
}

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <CastleMark />
          <span className="flex flex-col leading-none">
            <span className="font-heading text-lg font-extrabold tracking-[0.08em] uppercase">
              {siteConfig.name}
            </span>
            <span className="mt-1 text-[0.65rem] tracking-[0.22em] uppercase opacity-80">
              {siteConfig.tagline}
            </span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-7 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[0.95rem] transition-opacity hover:opacity-100",
                pathname === item.href ? "font-medium" : "opacity-90"
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
              <MessageCircle />
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
                  className={cn(
                    "border-b border-white/10 py-3 text-base last:border-0",
                    pathname === item.href ? "font-medium" : "opacity-90"
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
                  <MessageCircle />
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
