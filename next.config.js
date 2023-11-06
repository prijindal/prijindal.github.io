const NEXT_OUTPUT_TYPE = process.env.NEXT_OUTPUT_TYPE;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: NEXT_OUTPUT_TYPE,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/u/10034872*",
      },
    ],
  },
};

module.exports = nextConfig;
