import type { MetadataRoute } from "next"
import { routes } from "@/lib/site"
import { absoluteUrl } from "@/lib/urls"

// Must stay statically generated: the GitHub Pages build runs `output: "export"`.
export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: absoluteUrl(path),
    priority,
    changeFrequency,
  }))
}
