/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["knex", "pg"],
  },
};

module.exports = nextConfig;
