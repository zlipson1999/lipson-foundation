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
import { navItems } from "@/lib/site"
import { Logo } from "@/components/logo"

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button variant="outline" size="icon" className="md:hidden" />
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
        </nav>
        <div className="mt-auto p-4">
          <Button
            className="w-full"
            size="lg"
            nativeButton={false}
            render={<Link href="/give" />}
          >
            Give
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
