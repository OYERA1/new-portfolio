import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: process.env.NODE_ENV === "development",
	output: "standalone",
};

export default nextConfig;
