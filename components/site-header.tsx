import Link from "next/link"
import { Container } from "@/components/container"
import { Logo } from "@/components/logo"
import { MobileNav } from "@/components/mobile-nav"
import { MenuNav } from "@/components/menu-nav"
import { NavLink } from "@/components/nav-link"
import { Button } from "@/components/ui/button"
import { navItems, programMenu, site, teamMenu } from "@/lib/site"

const linkClass =
  "link-underline px-3 py-2 text-[15px] text-primary-foreground/80 transition-colors hover:text-gold whitespace-nowrap"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-primary text-primary-foreground">
      <div className="hidden border-b border-gold/25 lg:block">
        <Container className="flex h-8 items-center text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
          <span>{site.kicker}</span>
        </Container>
      </div>
      <div className="border-b border-primary-foreground/10">
        <Container className="flex h-[4.75rem] items-center justify-between gap-3">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3"
            aria-label={`${site.legalName} — home`}
          >
            <Logo inverse size="sm" />
            <span className="hidden font-heading text-lg tracking-tight sm:inline">
              {site.legalName}
            </span>
          </Link>
          <nav className="hidden items-center lg:flex" aria-label="Primary">
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
                <NavLink
                  key={item.href}
                  href={item.href}
                  className={linkClass}
                  activeClassName="text-gold"
                >
                  {item.label}
                </NavLink>
              )
            })}
          </nav>
          <div className="flex items-center gap-2">
            <Button
              size="lg"
              className="hidden h-11 bg-gold px-5 text-[15px] text-primary hover:bg-gold/90 lg:inline-flex"
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
