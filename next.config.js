/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Do not set assetPrefix to '.' — relative chunk URLs break client navigations
  // (e.g. /blog resolves ./_next to /blog/_next). Use basePath for GitHub project pages instead.
}

module.exports = nextConfig