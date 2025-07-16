/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  distDir: 'build',
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
