"use client"

import { createElement } from "react"
import Script from "next/script"
import { givebutter } from "@/lib/site"

/**
 * Givebutter's giving form, embedded.
 *
 * The widget draws its card fields in an iframe served from Givebutter, so a
 * card number is entered on this page but never passes through this site's
 * code, its network requests, or the inquiry store.
 *
 * `createElement` rather than JSX because `givebutter-widget` is a custom
 * element with no React type; writing it as a tag would need an ambient
 * declaration to satisfy the compiler and buys nothing.
 */
export function GivebutterEmbed() {
  if (!givebutter.account || !givebutter.widget) return null

  return (
    <>
      <Script
        src={`https://widgets.givebutter.com/latest.umd.cjs?acct=${givebutter.account}&p=other`}
        strategy="afterInteractive"
      />
      {createElement("givebutter-widget", { id: givebutter.widget })}
    </>
  )
}
