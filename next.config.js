/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.pexels.com', 'twinsilver.mo.cloudinary.net'],
  },
  experimental: {
    images: {
      layoutRaw: true,
    },
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