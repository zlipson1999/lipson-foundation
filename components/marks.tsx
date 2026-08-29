import { cn } from "@/lib/utils"

/** Centered phoenix on a dog-tag — foundation header mark. */
export function PhoenixTag({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 80"
      className={cn("size-9", className)}
      aria-hidden
      fill="none"
    >
      <path
        d="M20 10h24c6.627 0 12 5.373 12 12v36c0 6.627-5.373 12-12 12H20C13.373 70 8 64.627 8 58V22C8 15.373 13.373 10 20 10Z"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle cx="32" cy="18" r="3" fill="currentColor" />
      <path
        d="M32 28c-2.2 4.5-6.8 8.2-12.5 10.2 2.4-1.8 4.2-4.4 5-7.4-3.6 1.2-7 1.4-10.5.4 3.8.2 7.2-1.4 9.6-4.2-4.2-1.2-7.4-3.8-9.6-7.2 4.4 1.6 8.6 1.2 12.2-1.2C24.8 15.4 28.2 14 32 14c3.8 0 7.2 1.4 8.8 4.6 3.6 2.4 7.8 2.8 12.2 1.2-2.2 3.4-5.4 6-9.6 7.2 2.4 2.8 5.8 4.4 9.6 4.2-3.5 1-6.9.8-10.5-.4.8 3 2.6 5.6 5 7.4C38.8 36.2 34.2 32.5 32 28Z"
        fill="currentColor"
      />
      <path
        d="M32 30v22M27 46l5 8 5-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * Three ring ropes running from a corner post — an abstracted boxing-ring
 * corner, used as a branded divider in place of plain rules. Decorative only.
 */
export function RingRopes({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 24"
      preserveAspectRatio="none"
      className={cn("h-4 w-full", className)}
      aria-hidden
      fill="none"
    >
      <rect x="0" y="1" width="5" height="22" fill="currentColor" />
      <path
        d="M5 4H400M5 12H400M5 20H400"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}

/** Boxing glove on a tag — In Ur Corner mark. */
export function GloveTag({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 80"
      className={cn("size-9", className)}
      aria-hidden
      fill="none"
    >
      <path
        d="M20 10h24c6.627 0 12 5.373 12 12v36c0 6.627-5.373 12-12 12H20C13.373 70 8 64.627 8 58V22C8 15.373 13.373 10 20 10Z"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle cx="32" cy="18" r="3" fill="currentColor" />
      <path
        d="M24 50c0-2 1.2-3.5 3.2-4.2 1.4-4.8 5.2-8.8 10.3-9.6 1.2-3.4 4.4-5.7 8-5.2 2.8.4 4.8 2.6 5.3 5.4 2.4 1.4 3.7 4.2 3.2 7.2-.6 3.6-3.4 6-6.8 6.8v4.4c0 1.6-1.3 2.8-2.8 2.8H32.4C27.6 57.6 24 54.2 24 50Z"
        fill="currentColor"
      />
      <path
        d="M28 52h16"
        stroke="var(--background)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
