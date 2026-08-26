import { cn } from "@/lib/utils"
import { PhoenixTag } from "@/components/marks"

export function Logo({
  className,
  inverse = false,
}: {
  className?: string
  inverse?: boolean
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <PhoenixTag className={cn("size-9", inverse ? "text-gold" : "text-primary")} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-base tracking-tight",
            inverse && "text-primary-foreground"
          )}
        >
          Lipson
        </span>
        <span
          className={cn(
            "text-[10px] uppercase tracking-[0.22em]",
            inverse ? "text-gold" : "text-muted-foreground"
          )}
        >
          Foundation
        </span>
      </span>
    </span>
  )
}
