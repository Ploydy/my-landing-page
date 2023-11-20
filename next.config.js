/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.rareblocks.xyz',
        pathname: '/collection/celebration/images/hero/1/hero-img.png',
      }
    ]
  }
}

module.exports = nextConfig
