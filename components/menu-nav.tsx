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

const triggerClass =
  "h-auto bg-transparent px-3 py-2 text-[15px] font-normal text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-gold focus:bg-primary-foreground/10 data-open:bg-primary-foreground/10 data-popup-open:bg-primary-foreground/10"

/**
 * A top-level nav item that opens a list of pages to pick from.
 *
 * With `href` the label is itself a link to that page and the list opens on
 * hover. Without it the label only opens the list — use that where the section
 * has no page of its own worth landing on, so the only way through is to pick
 * an entry.
 */
export function MenuNav({
  label,
  href,
  items,
}: {
  label: string
  href?: string
  items: readonly MenuEntry[]
}) {
  return (
    <NavigationMenu className="hidden lg:flex" aria-label={label}>
      <NavigationMenuList>
        <NavigationMenuItem>
          {href ? (
            <NavigationMenuTrigger
              nativeButton={false}
              render={<Link href={href} />}
              className={triggerClass}
            >
              {label}
            </NavigationMenuTrigger>
          ) : (
            <NavigationMenuTrigger className={triggerClass}>
              {label}
            </NavigationMenuTrigger>
          )}
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
