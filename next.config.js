/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  // Desabilitar headers temporariamente para isolar problema de carregamento de CSS
}

module.exports = nextConfig
