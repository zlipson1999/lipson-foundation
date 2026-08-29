import type { MetadataRoute } from "next"
import { site } from "@/lib/site"

// Required for output: "export" — the manifest is a fully static file.
export const dynamic = "force-static"

/**
 * Web app manifest: a proper name and gold-on-navy identity when the site is
 * saved to a home screen. `display: "browser"` on purpose — there is no
 * offline story and no service worker, so it must not pretend to be an app.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.legalName,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "browser",
    background_color: "#F7F1E4",
    theme_color: "#03162F",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  }
}
