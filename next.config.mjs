/** @type {import('next').NextConfig} */
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';
const isPages = process.env.GITHUB_ACTIONS === 'true';
const isUserSite = repoName.endsWith('.github.io');
const basePath = isPages && !isUserSite ? `/${repoName}` : '';
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};
export default nextConfig;
