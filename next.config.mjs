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
    NEXT_PUBLIC_EMAIL_SERVICE_ID: process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
    NEXT_PUBLIC_EMAIL_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
    NEXT_PUBLIC_EMAIL_USER_ID: process.env.NEXT_PUBLIC_EMAIL_USER_ID,
  },
  webpack(config) {
    // Ensure Webpack can resolve paths
    config.resolve.alias["@components"] = resolve(__dirname, "src/components");

    // Add more Webpack configurations if needed
    return config;
  },
};

export default nextConfig;
