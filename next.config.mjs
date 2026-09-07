/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // The PDPA generator/validator scripts live outside the app and are not linted here.
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
