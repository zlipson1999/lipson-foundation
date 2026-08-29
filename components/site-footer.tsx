import Link from "next/link"
import { Container } from "@/components/container"
import { Logo } from "@/components/logo"
import { NavLink } from "@/components/nav-link"
import { PhoenixTag, RingRopes } from "@/components/marks"
import { locationLines, navItems, site, taxNotice } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="surface-navy relative mt-auto overflow-hidden border-t border-primary-foreground/10 bg-primary text-primary-foreground [--glow-x:12%] [--glow-y:110%]">
      {/* The phoenix at scale, ghosted off the corner. Decorative: it sits
          well under the text layer and never behind the small print. */}
      <PhoenixTag className="pointer-events-none absolute -right-14 -top-20 size-[24rem] text-gold/[0.06]" />
      <Container className="relative z-10 flex flex-col gap-10 py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex max-w-sm flex-col gap-4">
            <Logo inverse />
            <p className="text-sm leading-relaxed text-primary-foreground/75">
              {site.legalName} builds cost-free community programs for
              underserved communities across South Florida, Palm Beach County
              and surrounding counties. Whatever a neighborhood needs and cost
              has kept out of reach. No memberships, no fees, ever.
            </p>
            <p className="text-xs leading-relaxed text-primary-foreground/60">
              {taxNotice}
            </p>
          </div>
          <nav className="flex flex-col gap-3" aria-label="Footer">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
              Explore
            </p>
            <ul className="flex flex-col gap-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <NavLink
                    href={item.href}
                    className="text-primary-foreground/80 hover:text-gold"
                    activeClassName="text-gold"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
              Contact
            </p>
            <ul className="flex flex-col gap-2 text-sm text-primary-foreground/80">
              <li>EIN {site.ein}</li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-gold">
                  {site.email}
                </a>
              </li>
              {/* The service area on its own two lines rather than joined with
                  a dash, so the county line reads as detail under the region. */}
              <li>{locationLines[0]}</li>
              <li>{locationLines[1]}</li>
              <li>
                <Link href="/privacy" className="hover:text-gold">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <RingRopes className="h-3 text-gold/35" />
        <div className="flex flex-col gap-2 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName} All rights reserved.
          </p>
          <p>{site.kicker}</p>
        </div>
      </Container>
    </footer>
  )
}
