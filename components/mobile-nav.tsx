"use client"

import Link from "next/link"
import { ListIcon } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { navItems, programMenu, teamMenu } from "@/lib/site"
import { Logo } from "@/components/logo"
import { NavLink } from "@/components/nav-link"

/**
 * Sections whose pages are listed under them in the sheet. `navigable` mirrors
 * the header: Programs has a page of its own to land on, The team does not —
 * there the label is a heading and Board and Staff are the only destinations.
 */
const sections: Record<
  string,
  | { navigable: boolean; items: readonly { href: string; name: string }[] }
  | undefined
> = {
  "/team": { navigable: false, items: teamMenu },
  "/programs": { navigable: true, items: programMenu },
}

export function MobileNav() {
  return (
    <Sheet>
      {/* Button renders a native <button>, so nativeButton must stay true here.
          Setting it false made Base UI add role="button" and tabindex="0" to a
          real button. The nativeButton={false} pattern is for link triggers. */}
      <SheetTrigger
        render={
          <Button type="button" variant="secondary" size="lg" className="lg:hidden" />
        }
      >
        <ListIcon data-icon="inline-start" />
        Menu
      </SheetTrigger>
      <SheetContent side="right" className="w-[min(100%,20rem)] overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="sr-only">Site menu</SheetTitle>
          <SheetDescription className="sr-only">
            Lipson Foundation pages
          </SheetDescription>
          <Logo />
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4 py-2" aria-label="Site">
          {navItems.map((item) => (
            <div key={item.href} className="flex flex-col">
              {sections[item.href]?.navigable === false ? (
                // Not a destination, so it must not dress like one: the same
                // kicker treatment the footer's column headings use.
                <p className="px-2 pb-1 pt-4 text-[11px] font-medium uppercase tracking-[0.18em] text-gold-ink">
                  {item.label}
                </p>
              ) : (
                <SheetClose
                  render={
                    <NavLink
                      href={item.href}
                      className="px-2 py-3 text-sm text-foreground hover:text-primary"
                      activeClassName="border-l-2 border-gold pl-3 font-semibold text-primary"
                    />
                  }
                  nativeButton={false}
                >
                  {item.label}
                </SheetClose>
              )}
              {/* Touch has no hover, so a section's pages are listed under its
                  label rather than hidden behind one. */}
              {sections[item.href]?.items.map((child) => (
                <SheetClose
                  key={child.href}
                  render={
                    <NavLink
                      href={child.href}
                      className="border-l border-border py-3 pl-4 ml-2 text-sm text-muted-foreground hover:text-primary"
                      activeClassName="border-l-2 border-gold font-semibold text-primary"
                    />
                  }
                  nativeButton={false}
                >
                  {child.name}
                </SheetClose>
              ))}
            </div>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-2 p-4">
          <Button
            className="h-11 w-full bg-gold text-primary hover:bg-gold/90"
            size="lg"
            nativeButton={false}
            render={<Link href="/donate" />}
          >
            Donate
          </Button>
          <Button
            className="h-11 w-full"
            size="lg"
            variant="outline"
            nativeButton={false}
            render={<Link href="/forms" />}
          >
            Contact us
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
