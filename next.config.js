/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  i18n: {
    locales: ['en', 'zh', 'ja'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig