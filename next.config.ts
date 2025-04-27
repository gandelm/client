import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsHmrCache: false, // ref. https://github.com/connectrpc/connect-es/issues/1326
  },
}

export default nextConfig
