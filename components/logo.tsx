import { cn } from "@/lib/utils"
import Image from "next/image"

export function Logo({
  className,
  size = "default",
}: {
  className?: string
  inverse?: boolean
  size?: "default" | "lg"
}) {
  const height = size === "lg" ? 72 : 56
  const width = Math.round(height * (685 / 1219))
  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src="/brand/lipson-tag.png"
        alt="Lipson Foundation"
        width={width}
        height={height}
        className={cn("w-auto", size === "lg" ? "h-[4.5rem]" : "h-14")}
        unoptimized
        priority
      />
    </span>
  )
}
