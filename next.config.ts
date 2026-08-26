import type { NextConfig } from "next"

// NEXT_STATIC_EXPORT is set by the GitHub Pages workflow. The default build
// (dev server, `next build`) keeps server actions and redirects.
const staticExport = Boolean(process.env.NEXT_STATIC_EXPORT)
const basePath = process.env.NEXT_BASE_PATH ?? ""
const distDir = process.env.NEXT_DIST_DIR

const nextConfig: NextConfig = staticExport
  ? {
      output: "export",
      ...(distDir ? { distDir } : {}),
      ...(basePath ? { basePath, assetPrefix: basePath } : {}),
      images: { unoptimized: true },
    }
  : {
      ...(distDir ? { distDir } : {}),
      async redirects() {
        return [
          { source: "/work", destination: "/in-your-corner", permanent: false },
          { source: "/give", destination: "/donate", permanent: false },
          { source: "/involved", destination: "/forms", permanent: false },
          { source: "/updates", destination: "/news", permanent: false },
        ]
      },
    }

export default nextConfig
