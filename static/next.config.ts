import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: false,
  devIndicators: false,
  output: `export`,
  distDir: `dist`,
  basePath: `/snake`,
}

export default nextConfig
