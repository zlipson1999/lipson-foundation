"use client"

import { useSyncExternalStore } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { legacyRedirects } from "@/lib/site"

// The prerendered 404 has no path to inspect, so the server snapshot is
// empty and the real pathname arrives after hydration.
const subscribeNever = () => () => {}

/**
 * The most likely 404 on the live site is a shared /work, /give, /involved
 * or /updates link: those redirects only run on dynamic builds, so GitHub
 * Pages serves the 404 page for them. A client check against the same map
 * next.config.ts encodes turns the dead end into a signpost.
 */
export function NotFoundRescue() {
  const rawPath = useSyncExternalStore(
    subscribeNever,
    () => window.location.pathname,
    () => ""
  )
  // trailingSlash serves /work as /work/, so normalize before matching.
  const path = rawPath.replace(/\/+$/, "") || "/"
  const moved = legacyRedirects[path] ?? null

  if (moved) {
    return (
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
    )
  }

  return (
    <>
      <h1 className="text-4xl">That page is not here.</h1>
      <p className="max-w-md text-muted-foreground">
        It may have moved, or the link may be off. The work is still on the
        rest of the site.
      </p>
      <Button nativeButton={false} render={<Link href="/" />}>
        Back home
      </Button>
    </>
  )
}
