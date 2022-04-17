/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.pexels.com'],
  },
  compiler: {
    styledComponents: true,
    /*
    removeConsole: {
      exclude: ['error'],
    },

     */
  },
}

module.exports = nextConfig