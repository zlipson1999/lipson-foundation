import { cn } from "@/lib/utils"

export function Container({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  )
}

export function PageIntro({
  kicker,
  title,
  children,
  variant = "hero",
}: {
  kicker: string
  title: string
  /** Optional: a page whose opening copy sits below the intro omits it. */
  children?: React.ReactNode
  variant?: "hero" | "plain"
}) {
  return (
    <header
      className={cn(
        "flex flex-col gap-4",
        variant === "hero"
          ? "page-intro mt-6 mb-10 max-w-none px-6 py-10 text-primary-foreground sm:mt-8 sm:mb-14 sm:px-10 sm:py-14 lg:px-14"
          : "max-w-3xl pt-10 sm:pt-14",
        // Without the copy there is nothing to separate from what follows, so
        // the content below closes up rather than sitting under a gap.
        variant === "plain" && (children ? "pb-10 sm:pb-14" : "pb-6 sm:pb-8"),
      )}
    >
      <p className={cn(
        "text-[11px] font-semibold uppercase tracking-[0.24em]",
        variant === "hero" ? "text-gold" : "text-muted-foreground",
      )}>
        {kicker}
      </p>
      <h1 className="relative max-w-4xl font-heading text-4xl leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      {children ? (
        <div className={cn(
          "relative max-w-2xl text-base leading-relaxed sm:text-lg",
          variant === "hero" ? "text-primary-foreground/78" : "text-muted-foreground",
        )}>
          {children}
        </div>
      ) : null}
    </header>
  )
}
