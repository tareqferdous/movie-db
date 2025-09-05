/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
      {
        protocol: "https",
        hostname: "facebook.com",
      },
      {
        protocol: "https",
        hostname: "x.com",
      },
      {
        protocol: "https",
        hostname: "linkedin.com",
      },
    ],
  },
};

export default nextConfig;
