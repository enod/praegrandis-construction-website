/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/praegrandis-construction-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/praegrandis-construction-website' : '',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;