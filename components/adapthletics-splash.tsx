"use client"

import { useEffect, useRef, useState } from "react"
import { asset } from "@/lib/assets"

/**
 * Owner-directed (9 Sep 2026): entering /adapthletics pops the GoPro session
 * reel (the clip that opens on its own ADAPTHLETICS title card) in a closable
 * window above the page. It opens after mount so the static HTML never traps
 * a visitor without JavaScript, autoplays muted (the browser rule for
 * autoplay), and closes via the X, the backdrop, or Escape.
 */
export function AdapthleticsSplash() {
  const [open, setOpen] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)

  // Open after mount (async so hydration completes first) — the static HTML
  // never renders the overlay, so a visitor without JavaScript is never
  // trapped behind a close button that cannot work.
  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 0)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open])

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Adapthletics session reel"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
    >
      <button
        type="button"
        aria-label="Close the video and go to the page"
        className="absolute inset-0 cursor-default bg-primary/90"
        onClick={() => setOpen(false)}
        tabIndex={-1}
      />
      <div className="relative w-full max-w-3xl border-2 border-gold bg-primary shadow-2xl">
        <button
          ref={closeRef}
          type="button"
          aria-label="Close the video"
          onClick={() => setOpen(false)}
          className="absolute -top-4 -right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold bg-primary font-heading text-xl leading-none text-gold transition-colors hover:bg-gold hover:text-primary focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <video
          autoPlay
          muted
          playsInline
          controls
          preload="auto"
          className="block aspect-video w-full"
          src={asset("/adapthletics/adapthletics-gopro.mp4")}
          onEnded={() => setOpen(false)}
        />
      </div>
    </div>
  )
}
