import Link from "next/link"
import { Container } from "@/components/container"
import { Logo } from "@/components/logo"
import { MobileNav } from "@/components/mobile-nav"
import { ProgramsNav } from "@/components/programs-nav"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-primary text-primary-foreground">
      <div className="hidden border-b border-gold/25 md:block">
        <Container className="flex h-8 items-center justify-between gap-4 text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
          <span>{site.kicker}</span>
          <a href={site.phoneHref} className="hover:text-primary-foreground">
            {site.phone}
          </a>
        </Container>
      </div>
      <div className="border-b border-primary-foreground/10">
        <Container className="flex h-20 items-center justify-between gap-4">
          <Link href="/" className="shrink-0" aria-label="Lipson Foundation home">
            <Logo inverse />
          </Link>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            <Link
              href="/about"
              className="px-2.5 py-1.5 text-sm text-primary-foreground/80 transition-colors hover:text-gold"
            >
              About us
            </Link>
            <ProgramsNav />
            <Link
              href="/help"
              className="px-2.5 py-1.5 text-sm text-primary-foreground/80 transition-colors hover:text-gold"
            >
              How to help
            </Link>
            <Link
              href="/contact"
              className="px-2.5 py-1.5 text-sm text-primary-foreground/80 transition-colors hover:text-gold"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button
              size="lg"
              variant="secondary"
              className="hidden sm:inline-flex"
              nativeButton={false}
              render={<Link href="/contact" />}
            >
              Write to us
            </Button>
            <MobileNav />
          </div>
        </Container>
      </div>
    </header>
  )
}
