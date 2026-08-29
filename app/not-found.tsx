import type { Metadata } from "next"
import Link from "next/link"
import { Container } from "@/components/container"
import { NotFoundRescue } from "@/components/not-found-rescue"

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "That page is not here. It may have moved, or the link may be off.",
  robots: { index: false },
}

const destinations = [
  { href: "/about", label: "About us" },
  { href: "/programs", label: "Programs" },
  { href: "/donate", label: "Donate" },
  { href: "/forms", label: "Contact us" },
] as const

export default function NotFound() {
  return (
    <Container className="flex flex-1 flex-col items-start justify-center gap-4 py-24">
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
        404
      </p>
      <NotFoundRescue />
      <nav
        aria-label="Popular pages"
        className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-6 text-sm"
      >
        {destinations.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </Container>
  )
}
