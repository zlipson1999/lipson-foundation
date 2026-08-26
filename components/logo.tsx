import { cn } from "@/lib/utils"

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex size-8 items-center justify-center bg-primary text-primary-foreground font-heading text-sm tracking-tight",
        className
      )}
      aria-hidden
    >
      LF
    </span>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="font-heading text-base tracking-tight">Lipson</span>
        <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          Foundation
        </span>
      </span>
    </span>
  )
}
