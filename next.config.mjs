// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

const isGithubActions = process.env.GITHUB_ACTIONS || false;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for static export to GitHub Pages
  output: 'export',
  
  // Set the subpath ONLY when building on GitHub Actions
  basePath: isGithubActions ? '/myprotfolio3' : '',
  assetPrefix: isGithubActions ? '/myprotfolio3/' : '',

  images: {
    // Required for static HTML exports
    unoptimized: true,
  },
};

module.exports = nextConfig;
