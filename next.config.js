/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/praegrandis-construction-website',
  assetPrefix: '/praegrandis-construction-website',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;