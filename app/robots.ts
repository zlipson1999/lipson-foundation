import type { MetadataRoute } from "next"
import { siteBaseUrl } from "@/lib/urls"

// Must stay statically generated: the GitHub Pages build runs `output: "export"`.
export const dynamic = "force-static"

// Note: on GitHub Pages this is published under the repository base path, so
// crawlers that only read /robots.txt at the origin root will not pick it up.
// The sitemap reference below is the part that matters for this deployment.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteBaseUrl}/sitemap.xml`,
  }
}
