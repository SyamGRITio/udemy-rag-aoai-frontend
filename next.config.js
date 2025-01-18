/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    turboMode: true,
  },
};

module.exports = nextConfig;