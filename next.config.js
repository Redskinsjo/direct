const withVideos = require("next-videos");

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      layoutRaw: true,
    },
  },
};

module.exports = withVideos(nextConfig);
