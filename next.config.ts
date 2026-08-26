import type { NextConfig } from "next"

const nextConfig: NextConfig = {
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
