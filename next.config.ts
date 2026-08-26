import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/work", destination: "/in-your-corner", permanent: false },
      { source: "/give", destination: "/help", permanent: false },
      { source: "/involved", destination: "/help", permanent: false },
      { source: "/updates", destination: "/", permanent: false },
    ]
  },
}

export default nextConfig
