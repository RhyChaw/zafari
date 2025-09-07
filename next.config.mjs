/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['qnkygllyznhzyfpxyroj.supabase.co'],  // <-- add your Supabase domain here
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
