"use client"

import { useSyncExternalStore } from "react"
import Link from "next/link"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { legacyRedirects } from "@/lib/site"

/**
 * The most likely 404 on the live site is a shared /work, /give, /involved
 * or /updates link: those redirects only run on dynamic builds, so GitHub
 * Pages serves this page for them. A client check against the same map
 * next.config.ts encodes turns the dead end into a signpost.
 */
const destinations = [
  { href: "/about", label: "About us" },
  { href: "/programs", label: "Programs" },
  { href: "/donate", label: "Donate" },
  { href: "/forms", label: "Contact us" },
] as const

// The prerendered 404 has no path to inspect, so the server snapshot is
// empty and the real pathname arrives after hydration.
const subscribeNever = () => () => {}

export default function NotFound() {
  const rawPath = useSyncExternalStore(
    subscribeNever,
    () => window.location.pathname,
    () => ""
  )
  // trailingSlash serves /work as /work/, so normalize before matching.
  const path = rawPath.replace(/\/+$/, "") || "/"
  const moved = legacyRedirects[path] ?? null

  return (
    <Container className="flex flex-1 flex-col items-start justify-center gap-4 py-24">
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
        404
      </p>
      {moved ? (
        <>
          <h1 className="text-4xl">That page moved.</h1>
          <p className="max-w-md text-muted-foreground">
            The link you followed is an old address. What it pointed to is
            still here.
          </p>
          <Button
            className="bg-gold text-primary hover:bg-gold/90"
            nativeButton={false}
            render={<Link href={moved.href} />}
          >
            Continue to {moved.label}
          </Button>
        </>
      ) : (
        <>
          <h1 className="text-4xl">That page is not here.</h1>
          <p className="max-w-md text-muted-foreground">
            It may have moved, or the link may be off. The work is still on
            the rest of the site.
          </p>
          <Button nativeButton={false} render={<Link href="/" />}>
            Back home
          </Button>
        </>
      )}
      <nav
        aria-label="Popular pages"
        className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-6 text-sm"
      >
        {destinations.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </Container>
  )
}
