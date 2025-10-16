/** @type {import('next').NextConfig} */
const basePath = process.env.PAGES_BASE_PATH || '';
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  // When deploying to GitHub Pages for a project site, assets must be
  // served from the repo base path (e.g. /repo-name). The Pages setup
  // step in the workflow exposes this as PAGES_BASE_PATH.
  basePath: basePath,
  assetPrefix: basePath || undefined,
  // Ensure exported pages include trailing slashes so routing matches GitHub Pages
  trailingSlash: true,
}

module.exports = nextConfig
