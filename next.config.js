/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/DAP',
  assetPrefix: '/DAP',
};

module.exports = nextConfig; 