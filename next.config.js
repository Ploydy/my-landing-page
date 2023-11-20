/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.rareblocks.xyz',
        pathname: '/collection/celebration/images/hero/1/hero-img.png',
      },
      {
        protocol: 'https',
        hostname: 'cdn.rareblocks.xyz',
        pathname: '/collection/clarity-ecommerce/images/item-cards/4/product-1.png',
      },
      {
        protocol: 'https',
        hostname: 'cdn.rareblocks.xyz',
        pathname: '/collection/clarity-ecommerce/images/item-cards/4/product-2.png',
      },
      {
        protocol: 'https',
        hostname: 'cdn.rareblocks.xyz',
        pathname: '/collection/clarity-ecommerce/images/item-cards/4/product-3.png',
      },
      {
        protocol: 'https',
        hostname: 'cdn.rareblocks.xyz',
        pathname: '/collection/clarity-ecommerce/images/item-cards/4/product-4.png',
      }
    ]
  }
}

module.exports = nextConfig
