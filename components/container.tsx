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
}: {
  kicker: string
  title: string
  /** Optional: a page whose opening copy sits below the intro omits it. */
  children?: React.ReactNode
}) {
  return (
    <header
      className={cn(
        "flex max-w-3xl flex-col gap-4 pt-12 sm:pt-16",
        // Without the copy there is nothing to separate from what follows, so
        // the content below closes up rather than sitting under a gap.
        children ? "pb-10 sm:pb-14" : "pb-6 sm:pb-8",
      )}
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
        {kicker}
      </p>
      <h1 className="font-display font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">
        {title}
      </h1>
      {children ? (
        <div className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {children}
        </div>
      ) : null}
    </header>
  )
}
