// Absolute URLs for metadata (canonical, OpenGraph, sitemap).
//
// lipsonfoundation.org is owned but parked at a registrar page, so it must
// not be used as the canonical origin — it does not serve this site. The
// site is published from GitHub Pages, under the repository base path.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export const siteOrigin =
  process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://zlipson1999.github.io"

export const siteBaseUrl = `${siteOrigin}${basePath}`

/** Absolute URL for a route. Routes are served with a trailing slash. */
export function absoluteUrl(route: string) {
  if (route === "/") return `${siteBaseUrl}/`
  return `${siteBaseUrl}${route}/`
}

/** Absolute URL for a file in /public. Never gets a trailing slash. */
export function absoluteAsset(path: string) {
  return `${siteBaseUrl}${path}`
}
