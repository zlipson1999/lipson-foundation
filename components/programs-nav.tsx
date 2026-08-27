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
    <NavigationMenu className="hidden lg:flex" aria-label="Programs">
      <NavigationMenuList>
        <NavigationMenuItem>
          {/* The label is a link, not a button: clicking it goes to the
              programs page, hovering opens the list to pick from directly. */}
          <NavigationMenuTrigger
            nativeButton={false}
            render={<Link href="/programs" />}
            className="h-auto bg-transparent px-3 py-2 text-[15px] font-normal text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-gold focus:bg-primary-foreground/10 data-open:bg-primary-foreground/10 data-popup-open:bg-primary-foreground/10"
          >
            Programs
          </NavigationMenuTrigger>
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
