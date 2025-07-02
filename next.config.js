/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  // CSS optimizasyonları
  experimental: {
    optimizeCss: false,
  },
  // Webpack konfigürasyonu
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Framer Motion ve diğer vendor chunk'ları için optimizasyon
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          ...config.optimization.splitChunks,
          cacheGroups: {
            ...config.optimization.splitChunks.cacheGroups,
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              enforce: true,
            },
            framerMotion: {
              test: /[\\/]node_modules[\\/](framer-motion)[\\/]/,
              name: 'framer-motion',
              chunks: 'all',
              priority: 10,
            },
          },
        },
      }
    }

    // Cache sorunlarını önlemek için
    config.cache = {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename],
      },
    }

    return config
  },
  // Geliştirme ortamı optimizasyonları
  devIndicators: {
    buildActivity: false,
  },
  // Strict mode
  reactStrictMode: true,
}

module.exports = nextConfig 