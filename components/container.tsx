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
  children: React.ReactNode
}) {
  return (
    <header className="flex max-w-3xl flex-col gap-4 pb-10 pt-12 sm:pb-14 sm:pt-16">
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
        {kicker}
      </p>
      <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl">
        {title}
      </h1>
      <div className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        {children}
      </div>
    </header>
  )
}
