/**
 * Faint topographic contour lines behind the hero, as in the design.
 * Decorative only — hidden from assistive technology, and drawn at a low
 * enough opacity that nothing sitting on top of it loses contrast.
 */
export function HeroTexture() {
  return (
    <svg
      aria-hidden
      focusable="false"
      className="pointer-events-none absolute inset-0 h-full w-full select-none text-primary-foreground/[0.055]"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1440 620"
      fill="none"
    >
      <g stroke="currentColor" strokeWidth="1.5">
        <path d="M-60 96C118 40 268 150 366 214c98 64 172 150 122 236-50 86-232 118-372 74" />
        <path d="M-60 148C130 88 316 196 420 268c104 72 158 168 96 246-62 78-250 92-388 40" />
        <path d="M-60 200C142 136 364 242 474 322c110 80 144 186 70 258" />
        <path d="M1500 78c-186 30-320 130-378 226-58 96-16 208 130 258" />
        <path d="M1500 140c-208 34-360 142-420 246-60 104-6 214 152 262" />
        <path d="M1500 202c-230 38-400 154-462 266-40 72-28 142 30 190" />
        <path d="M1500 264c-252 42-440 166-504 286" />
      </g>
    </svg>
  )
}
