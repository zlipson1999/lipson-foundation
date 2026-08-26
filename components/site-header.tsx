import Link from "next/link"
import { Container } from "@/components/container"
import { Logo } from "@/components/logo"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { navItems } from "@/lib/site"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-primary-foreground/10 bg-primary text-primary-foreground">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="shrink-0" aria-label="Lipson Foundation home">
          <Logo inverse />
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-primary-foreground/75 transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
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
    </header>
  )
}
