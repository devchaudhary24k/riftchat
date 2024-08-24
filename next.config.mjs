/** @type {import('next').NextConfig} */

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful
 * for Docker builds.
 */

await import('./env.mjs');
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;
