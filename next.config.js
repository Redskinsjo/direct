// eslint-disable-next-line @typescript-eslint/no-var-requires
const withVideos = require('next-videos');

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      layoutRaw: true,
    },
  },
  env: process.env.SUPER_ADMIN_TOKEN,
};

module.exports = withVideos(nextConfig);
