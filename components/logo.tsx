import { cn } from "@/lib/utils"
import Image from "next/image"

export function Logo({
  className,
  inverse = false,
  size = "default",
}: {
  className?: string
  inverse?: boolean
  size?: "default" | "lg"
}) {
  const height = size === "lg" ? 64 : 48
  const width = size === "lg" ? 52 : 39
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <Image
        src="/brand/phoenix-dog-tag.svg"
        alt=""
        width={width}
        height={height}
        className={cn("shrink-0", size === "lg" ? "h-16 w-auto" : "h-12 w-auto")}
        unoptimized
        priority
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading tracking-tight",
            size === "lg" ? "text-2xl" : "text-lg",
            inverse && "text-primary-foreground"
          )}
        >
          Lipson
        </span>
        <span
          className={cn(
            "uppercase tracking-[0.22em]",
            size === "lg" ? "text-[11px] mt-1" : "text-[10px] mt-0.5",
            inverse ? "text-gold" : "text-muted-foreground"
          )}
        >
          Foundation
        </span>
      </span>
    </span>
  )
}
