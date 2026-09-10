/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // The PDPA generator/validator scripts live outside the app and are not linted here.
    ignoreDuringBuilds: false,
  },
  // Static export: the whole app runs in the browser (Supabase is called client-side),
  // so it builds to plain HTML/JS in `out/` that any static host — GitHub Pages,
  // Hostinger — can serve. No Node server is required.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
