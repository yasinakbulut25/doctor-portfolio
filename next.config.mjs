/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.arzuyurci.com",
        pathname: "/uploads/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/img-proxy/:path*",
        destination: "https://api.arzuyurci.com/:path*",
      },
    ];
  },
};

export default nextConfig;
