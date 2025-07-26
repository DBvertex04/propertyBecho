/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
 eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // ✅ Required for static export if using <Image />
  },

  trailingSlash: true, // ✅ Optional, keeps trailing slashes in URLs
};

export default nextConfig;
         