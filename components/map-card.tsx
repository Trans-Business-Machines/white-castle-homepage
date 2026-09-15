"use client"

import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

export function MapCard({ className }: { className?: string }) {
  return (
    <Card
      id="map"
      className={cn(
        "min-h-96 scroll-mt-24 overflow-hidden rounded-2xl bg-muted p-0 py-0 ring-0",
        className
      )}
    >
      <iframe
        title="Map of White Castle Motel, Uganda Road, Eldoret"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6550118231125!2d35.270575074089294!3d0.5184023636859376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178101a69c83cd2f%3A0xdd4c5121dbe841c!2sEldoret%20white%20castle%20motel%20ltd!5e0!3m2!1sen!2ske!4v1789067304587!5m2!1sen!2ske"
        width="100%"
        height="450"
        className="block"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Card>
  )
}
