import Link from "next/link"
import { Container } from "@/components/container"
import { Logo } from "@/components/logo"
import { MobileNav } from "@/components/mobile-nav"
import { MenuNav } from "@/components/menu-nav"
import { Button } from "@/components/ui/button"
import { navItems, programMenu, site, teamMenu } from "@/lib/site"

const linkClass =
  "inline-flex h-11 w-full items-center justify-center rounded-lg px-3 text-[14px] font-semibold text-primary/78 transition-colors hover:bg-primary/5 hover:text-primary whitespace-nowrap"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 text-foreground shadow-[0_4px_22px_rgba(3,22,47,0.06)] backdrop-blur-xl">
      <div>
        <Container className="flex h-[5.5rem] items-center justify-between gap-4 lg:h-[6rem]">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5 xl:gap-3"
            aria-label={`${site.legalName} — home`}
          >
            <Logo size="lg" className="drop-shadow-[0_6px_12px_rgba(3,22,47,0.16)]" />
            <span className="site-wordmark text-[1.35rem] sm:text-[1.65rem]">
              Lipson Foundation
            </span>
          </Link>
          <nav
            className="mx-3 hidden min-w-0 flex-1 grid-cols-7 items-center gap-1.5 lg:grid xl:mx-6 xl:gap-2"
            aria-label="Primary"
          >
            {navItems.map((item) => {
              if (item.href === "/programs") {
                return (
                  <MenuNav
                    key={item.href}
                    label={item.label}
                    href={item.href}
                    items={programMenu}
                  />
                )
              }
              if (item.href === "/team") {
                // No href: the label opens the list rather than going to a
                // page of its own. Board and Staff are the destinations.
                return (
                  <MenuNav key={item.href} label={item.label} items={teamMenu} />
                )
              }
              if (item.href === "/donate") {
                return null
              }
              return (
                <Link key={item.href} href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              )
            })}
          </nav>
          <div className="flex items-center gap-2">
            <Button
              size="lg"
              className="hidden h-12 shrink-0 rounded-xl bg-gold px-7 text-[15px] font-bold text-primary shadow-[0_9px_24px_rgba(121,93,42,0.16)] hover:bg-[#d4b16c] lg:inline-flex"
              nativeButton={false}
              render={<Link href="/donate" />}
            >
              Donate
            </Button>
            <MobileNav />
          </div>
        </Container>
      </div>
    </header>
  )
}
