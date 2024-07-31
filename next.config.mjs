import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

// Resolve the current directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    NEXT_PUBLIC_AWS_REGION: process.env.AWS_REGION,
    NEXT_PUBLIC_S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,
  },
  webpack(config) {
    // Ensure Webpack can resolve paths
    config.resolve.alias["@components"] = resolve(__dirname, "src/components");

    // Add more Webpack configurations if needed
    return config;
  },
};

export default nextConfig;
