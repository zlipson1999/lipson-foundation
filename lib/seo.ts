import type { Metadata } from "next"
import { site } from "@/lib/site"
import { absoluteAsset, absoluteUrl } from "@/lib/urls"

/**
 * Social share card: the official dog-tag on the brand navy. Image only —
 * it carries no copy, so it cannot drift out of step with the public-copy
 * kit the way baked-in text would.
 */
export const ogImage = {
  url: absoluteAsset("/brand/og-image.png"),
  width: 1200,
  height: 630,
  alt: `${site.legalName}`,
} as const

/**
 * Per-page metadata with a canonical URL and OpenGraph tags.
 * Titles and descriptions must come from kit-safe copy.
 */
export function pageMetadata({
  title,
  description,
  route,
  absoluteTitle = false,
}: {
  title: string
  description: string
  route: string
  absoluteTitle?: boolean
}): Metadata {
  const url = absoluteUrl(route)
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: absoluteTitle ? title : `${title} — ${site.name}`,
      description,
      url,
      siteName: site.name,
      locale: "en_US",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle ? title : `${title} — ${site.name}`,
      description,
      images: [ogImage.url],
    },
  }
}
