// Assets in /public need an explicit basePath prefix on the static
// (GitHub Pages) build: next/image with `unoptimized` uses src as-is
// and does not apply basePath.
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export function asset(path: string) {
  return `${base}${path}`
}
