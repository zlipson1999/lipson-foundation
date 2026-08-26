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
  const height = size === "lg" ? 72 : 56
  const width = Math.round(height * (408 / 689))
  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src={inverse ? "/brand/lipson-primary.png" : "/brand/lipson-reverse.png"}
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
