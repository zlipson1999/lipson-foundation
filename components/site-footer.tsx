import Link from "next/link"
import { Container } from "@/components/container"
import { Logo } from "@/components/logo"
import { Separator } from "@/components/ui/separator"
import { navItems, site } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t bg-secondary">
      <Container className="flex flex-col gap-10 py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex max-w-sm flex-col gap-4">
            <Logo />
            <p className="text-sm leading-relaxed text-muted-foreground">
              A 501(c)(3) human services organization in {site.location}. We
              help young people and families build stability, skills, and a
              future they can own.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Explore
            </p>
            <ul className="flex flex-col gap-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Transparency
            </p>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>EIN {site.ein}</li>
              <li>Tax-exempt since {site.taxExempt}</li>
              <li>{site.ntee}</li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-primary">
                  {site.email}
                </a>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>Contributions are tax-deductible to the extent allowed by law.</p>
        </div>
      </Container>
    </footer>
  )
}
