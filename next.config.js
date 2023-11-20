/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // start of hero image
      {
        protocol: 'https',
        hostname: 'cdn.rareblocks.xyz',
        pathname: '/collection/celebration/images/hero/1/hero-img.png',
      },
      // end of hero image

      // start of products image
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
      },
      // end of products image
      
      // start of directors image
      {
        protocol: 'https',
        hostname: 'cdn.rareblocks.xyz',
        pathname: '/collection/clarity/images/team/1/team-member-1.png',
      },
      {
        protocol: 'https',
        hostname: 'cdn.rareblocks.xyz',
        pathname: '/collection/clarity/images/team/1/team-member-2.png',
      },
      {
        protocol: 'https',
        hostname: 'cdn.rareblocks.xyz',
        pathname: '/collection/clarity/images/team/1/team-member-3.png',
      },
      {
        protocol: 'https',
        hostname: 'cdn.rareblocks.xyz',
        pathname: '/collection/clarity/images/team/1/team-member-4.png',
      },
      // end of directors image
    ]
  }
}

module.exports = nextConfig
