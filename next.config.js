/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/DAP',
  assetPrefix: '/DAP/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig; 