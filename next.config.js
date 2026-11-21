/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Don't auto-generate AGENTS.md when `next dev` runs under an AI agent
  agentRules: false,
};

module.exports = nextConfig;
