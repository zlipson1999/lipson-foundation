import Link from "next/link"
import { Container } from "@/components/container"
import { Logo } from "@/components/logo"
import { Separator } from "@/components/ui/separator"
import { locationLines, navItems, site, taxNotice } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-primary-foreground/10 bg-primary text-primary-foreground">
      <Container className="flex flex-col gap-8 py-10 sm:gap-10 sm:py-14">
        <div className="grid grid-cols-[0.8fr_1.2fr] gap-x-5 gap-y-9 md:grid-cols-[1.4fr_1fr_1fr] md:gap-10">
          <div className="col-span-2 flex max-w-sm flex-col gap-3 md:col-span-1 md:gap-4">
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
          <nav className="min-w-0 flex flex-col gap-3" aria-label="Footer">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
              Explore
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm md:flex md:flex-col">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/80 hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="min-w-0 flex flex-col gap-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
              Contact
            </p>
            <ul className="flex flex-col gap-2 text-sm text-primary-foreground/80">
              <li>EIN {site.ein}</li>
              <li>
                <a href={`mailto:${site.email}`} className="break-all hover:text-gold">
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
        <Separator className="bg-primary-foreground/15" />
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
