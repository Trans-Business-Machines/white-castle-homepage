import Image from "next/image"
import { cn } from "@/lib/utils"

export function WhatsappIcon({ className }: { className?: string }) {
  return (
    <Image
      src="/assets/images/whatsapp.png"
      alt=""
      aria-hidden="true"
      width={128}
      height={128}
      className={cn("size-5 shrink-0", className)}
    />
  )
}
