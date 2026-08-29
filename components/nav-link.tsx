"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

function normalize(path: string) {
  return path.replace(/\/+$/, "") || "/"
}

/**
 * A nav link that knows when it is the current page: it carries
 * aria-current="page" and the given active classes. A section link
 * (/team, /programs) also counts its child routes as current.
 * Extra props pass through so it can serve as a Base UI `render` target.
 */
export function NavLink({
  href,
  className,
  activeClassName,
  children,
  ...rest
}: {
  href: string
  className?: string
  activeClassName?: string
  children?: React.ReactNode
} & Omit<React.ComponentPropsWithRef<typeof Link>, "href" | "className">) {
  const pathname = usePathname()
  const current = normalize(pathname ?? "/")
  const target = normalize(href)
  const active =
    target === "/"
      ? current === "/"
      : current === target || current.startsWith(`${target}/`)

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(className, active && activeClassName)}
      {...rest}
    >
      {children}
    </Link>
  )
}
