/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/appimagepool.github.io',
  assetPrefix: '/appimagepool.github.io',
  images: {
    loader: 'akamai',
    path: ''
  },
}

module.exports = nextConfig
