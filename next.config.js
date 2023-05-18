/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "cineville-filmformatie.s3-eu-west-1.amazonaws.com",
      "www.cineville.nl",
      "lh3.googleusercontent.com",
      "via.placeholder.com",
    ],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
