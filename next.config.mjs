/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Disable image optimization for static exports
  images: {
    unoptimized: true,
    domains: [
      'via.placeholder.com',
      'images.unsplash.com',
      'plus.unsplash.com',
    ],
  },

  // For static exports to Netlify
  output: 'export',
  distDir: 'out',

  // Fix trailing slashes in routes for static exports
  trailingSlash: true,
};

export default nextConfig;
