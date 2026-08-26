import Link from "next/link"
import { Container } from "@/components/container"
import { Logo } from "@/components/logo"
import { Separator } from "@/components/ui/separator"
import { navItems, site } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-primary-foreground/10 bg-primary text-primary-foreground">
      <Container className="flex flex-col gap-10 py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex max-w-sm flex-col gap-4">
            <Logo inverse />
            <p className="text-sm leading-relaxed text-primary-foreground/75">
              {site.legalName} builds cost-free community programs in fitness,
              wellness, and mentoring. Every program we run is completely free
              — no memberships, no fees, ever.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
              Explore
            </p>
            <ul className="flex flex-col gap-2 text-sm">
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
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
              Contact
            </p>
            <ul className="flex flex-col gap-2 text-sm text-primary-foreground/80">
              <li>{site.location}</li>
              <li>EIN {site.ein}</li>
              <li>
                <a href={site.phoneHref} className="hover:text-gold">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-gold">
                  {site.email}
                </a>
              </li>
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
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>Community programs. Completely free.</p>
        </div>
      </Container>
    </footer>
  )
}
