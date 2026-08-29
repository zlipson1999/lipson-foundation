import type { Metadata } from "next"
import { site } from "@/lib/site"
import { absoluteAsset, absoluteUrl } from "@/lib/urls"

/**
 * Structured data for search engines. Every value is a kit-safe fact that
 * already appears on the site verbatim; nothing here may go beyond what
 * lib/site.ts and the taxNotice claim. Deliberately omitted: street address,
 * phone (none is published), founding date, and any classification beyond
 * 501(c)(3).
 */
export const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "NonprofitOrganization",
  name: site.legalName,
  url: absoluteUrl("/"),
  logo: absoluteAsset("/brand/lipson-tag.png"),
  email: site.email,
  taxID: site.ein,
  nonprofitStatus: "https://schema.org/Nonprofit501c3",
  founder: {
    "@type": "Person",
    name: "Zachary Lipson",
    jobTitle: "Founder and President",
  },
  // The exact service-area wording used everywhere on the site — the
  // MAY-say list requires it to stay consistent in every occurrence.
  areaServed: site.location,
} as const

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
