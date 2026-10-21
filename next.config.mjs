// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables static export for GitHub Pages
  output: 'export',
  
  // Prepends the subpath to internal routes and assets
  basePath: '/myprotfolio3',
  assetPrefix: '/myprotfolio3/',

  // Required for Next.js <Image /> component in static exports
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
