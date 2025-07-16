/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  eslint: {
    // Disable ESLint during builds
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/11235813.html',
        destination: '/thank-you',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
