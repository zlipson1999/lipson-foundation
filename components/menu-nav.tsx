"use client"

import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

type MenuEntry = {
  href: string
  name: string
  body: string
}

/**
 * A top-level nav item that is itself a link and opens a list on hover.
 * Shared by Programs and The team so the two behave identically; pass the
 * label, the page the label links to, and the entries to list beneath it.
 */
export function MenuNav({
  label,
  href,
  items,
}: {
  label: string
  href: string
  items: readonly MenuEntry[]
}) {
  return (
    <NavigationMenu className="hidden lg:flex" aria-label={label}>
      <NavigationMenuList>
        <NavigationMenuItem>
          {/* The label is a link, not a button: clicking it goes to the
              section's own page, hovering opens the list to pick from
              directly. */}
          <NavigationMenuTrigger
            nativeButton={false}
            render={<Link href={href} />}
            className="h-auto bg-transparent px-3 py-2 text-[15px] font-normal text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-gold focus:bg-primary-foreground/10 data-open:bg-primary-foreground/10 data-popup-open:bg-primary-foreground/10"
          >
            {label}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="w-[min(22rem,calc(100vw-2rem))] p-2">
            {items.map((item) => (
              <NavigationMenuLink
                key={item.href}
                render={<Link href={item.href} />}
                className="flex flex-col items-start gap-0.5 p-3"
              >
                <span className="font-heading text-sm">{item.name}</span>
                <span className="text-xs leading-relaxed text-muted-foreground">
                  {item.body}
                </span>
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
