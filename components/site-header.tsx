import Link from "next/link"
import { Container } from "@/components/container"
import { Logo } from "@/components/logo"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { navItems } from "@/lib/site"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="shrink-0" aria-label="Lipson Foundation home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button
            size="lg"
            className="hidden sm:inline-flex"
            nativeButton={false}
            render={<Link href="/give" />}
          >
            Give
          </Button>
          <MobileNav />
        </div>
      </Container>
    </header>
  )
}
