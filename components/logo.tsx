import { cn } from "@/lib/utils"
import { asset } from "@/lib/assets"
import Image from "next/image"

export function Logo({
  className,
  size = "default",
}: {
  className?: string
  inverse?: boolean
  size?: "sm" | "default" | "lg"
}) {
  const height = size === "lg" ? 72 : size === "sm" ? 44 : 56
  const width = Math.round(height * (360 / 640))
  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src={asset("/brand/lipson-tag.png")}
        alt="Lipson Foundation"
        width={width}
        height={height}
        className={cn(
          "w-auto",
          size === "lg" ? "h-[4.5rem]" : size === "sm" ? "h-11" : "h-14"
        )}
        unoptimized
        priority
      />
    </span>
  )
}
