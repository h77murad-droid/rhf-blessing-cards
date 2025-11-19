/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Image optimization
  images: {
    formats: ['image/webp'],
    deviceSizes: [390, 768, 1024, 1280, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,

  // Environment variables that should be available on the client side
  env: {
    SITE_NAME: 'RHF Blessing Cards',
    SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },

  // Internationalization (RTL support)
  i18n: {
    locales: ['ar'],
    defaultLocale: 'ar',
  },

  // Production build optimization
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

module.exports = nextConfig;
