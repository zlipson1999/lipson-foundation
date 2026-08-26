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
import { navItems, programMenu } from "@/lib/site"
import { Logo } from "@/components/logo"

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button variant="secondary" size="icon" className="md:hidden" />
        }
      >
        <ListIcon />
        <span className="sr-only">Open menu</span>
      </SheetTrigger>
      <SheetContent side="right" className="w-[min(100%,20rem)]">
        <SheetHeader>
          <SheetTitle className="sr-only">Site menu</SheetTitle>
          <SheetDescription className="sr-only">
            Lipson Foundation pages
          </SheetDescription>
          <Logo />
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4 py-2">
          {navItems.map((item) => (
            <SheetClose
              key={item.href}
              render={
                <Link
                  href={item.href}
                  className="px-1 py-2.5 text-sm text-foreground hover:text-primary"
                />
              }
              nativeButton={false}
            >
              {item.label}
            </SheetClose>
          ))}
          <p className="mt-3 px-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Programs
          </p>
          {programMenu
            .filter((item) => item.href !== "/programs")
            .map((item) => (
              <SheetClose
                key={item.href}
                render={
                  <Link
                    href={item.href}
                    className="px-1 py-2 text-sm text-muted-foreground hover:text-primary"
                  />
                }
                nativeButton={false}
              >
                {item.name}
              </SheetClose>
            ))}
        </nav>
        <div className="mt-auto p-4">
          <Button
            className="w-full"
            size="lg"
            nativeButton={false}
            render={<Link href="/contact" />}
          >
            Write to us
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
