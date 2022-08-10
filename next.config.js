/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY
  },
  images: {
    domains: ['images.pexels.com', 'twinsilver.mo.cloudinary.net']
  },
  experimental: {
    images: {
      layoutRaw: true
    }
  },
  compiler: {
    styledComponents: true
    /*
    removeConsole: {
      exclude: ['error'],
    },

     */
  },
}

module.exports = nextConfig