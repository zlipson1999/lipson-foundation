import Link from "next/link"
import { CaretDownIcon } from "@phosphor-icons/react/ssr"
import { programMenu } from "@/lib/site"

export function ProgramsNav() {
  return (
    <details className="relative hidden lg:block">
      <summary
        className="flex h-9 cursor-pointer list-none items-center rounded-none px-2 py-1.5 text-[13px] font-normal text-primary-foreground/80 marker:hidden hover:bg-primary-foreground/10 hover:text-gold focus-visible:bg-primary-foreground/10 focus-visible:ring-1 focus-visible:ring-gold/50 focus-visible:outline-none [[open]_&]:bg-primary-foreground/10 [[open]_&]:text-gold [&::-webkit-details-marker]:hidden"
      >
        Programs
        <CaretDownIcon
          className="relative top-px ml-1 size-3 [[open]_&]:rotate-180"
          aria-hidden="true"
        />
      </summary>
      <div className="absolute left-0 top-full z-50 mt-2 w-[min(22rem,calc(100vw-2rem))] bg-popover p-2 text-popover-foreground shadow ring-1 ring-foreground/10">
        {programMenu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col items-start gap-0.5 p-3 text-foreground hover:bg-muted focus-visible:bg-muted focus-visible:ring-1 focus-visible:ring-ring/50 focus-visible:outline-none"
          >
            <span className="font-heading text-sm">{item.name}</span>
            <span className="text-xs leading-relaxed text-muted-foreground">
              {item.body}
            </span>
          </Link>
        ))}
      </div>
    </details>
  )
}
