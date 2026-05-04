/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['framer-motion', 'motion-dom'],
  images: {
    domains: [],
    unoptimized: false,
  },
};

export default nextConfig;
