// Absolute URLs for metadata (canonical, OpenGraph, sitemap).
//
// lipsonfoundation.org now serves the site: GitHub Pages holds it as a custom
// domain, so it is the canonical origin. basePath stays supported for a build
// published under a repository path instead, but is empty in the deployment.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export const siteOrigin =
  process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://lipsonfoundation.org"

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
