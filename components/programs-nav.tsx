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
import { programMenu } from "@/lib/site"

export function ProgramsNav() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem className="flex items-center">
          <Link
            href="/programs"
            className="px-2 py-1.5 text-[13px] text-primary-foreground/80 transition-colors hover:text-gold"
          >
            Programs
          </Link>
          <NavigationMenuTrigger
            className="h-9 bg-transparent px-1.5 text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-gold focus:bg-primary-foreground/10 data-open:bg-primary-foreground/10 data-popup-open:bg-primary-foreground/10"
            aria-label="Open programs menu"
          />
          <NavigationMenuContent className="w-[min(22rem,calc(100vw-2rem))] p-2">
            {programMenu.map((item) => (
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
