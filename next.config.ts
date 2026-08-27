import type { NextConfig } from "next"

// NEXT_STATIC_EXPORT is set by the GitHub Pages workflow. The default build
// (dev server, `next build`) keeps server actions and redirects.
const staticExport = Boolean(process.env.NEXT_STATIC_EXPORT)
const basePath = process.env.NEXT_BASE_PATH ?? ""
const distDir = process.env.NEXT_DIST_DIR

const nextConfig: NextConfig = staticExport
  ? {
      output: "export",
      // GitHub Pages serves directories, not extensionless files. Without
      // this, `/about` resolves but `/about/` 404s. Exporting `about/index.html`
      // makes both work: Pages redirects `/about` to `/about/` itself.
      trailingSlash: true,
      ...(distDir ? { distDir } : {}),
      ...(basePath ? { basePath, assetPrefix: basePath } : {}),
      images: { unoptimized: true },
    }
  : {
      // Kept in step with the export build so canonical URLs match in both modes.
      trailingSlash: true,
      ...(distDir ? { distDir } : {}),
      async redirects() {
        return [
          { source: "/work", destination: "/in-your-corner", permanent: false },
          { source: "/give", destination: "/donate", permanent: false },
          { source: "/involved", destination: "/forms", permanent: false },
          { source: "/updates", destination: "/news", permanent: false },
          // Groups inside In Your Corner — not standalone programs.
          // Hash destinations are kept so a typed URL lands on the right section
          // in dynamic builds. Static export cannot serve these redirects.
          {
            source: "/the-ring",
            destination: "/in-your-corner#the-ring",
            permanent: false,
          },
          {
            source: "/the-corner",
            destination: "/in-your-corner#the-corner",
            permanent: false,
          },
          {
            source: "/the-crew",
            destination: "/in-your-corner#the-crew",
            permanent: false,
          },
        ]
      },
    }

export default nextConfig
