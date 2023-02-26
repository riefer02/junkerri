/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  images: {
    formats: ["image/webp"],
  },
  target: "serverless",
};

module.exports = nextConfig;
