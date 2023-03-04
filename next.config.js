/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["bcrypt"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/common/**",
      },
    ],
  },
};

module.exports = nextConfig;
