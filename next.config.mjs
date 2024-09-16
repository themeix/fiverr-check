import withMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    loader: 'custom',
    loaderFile: './ImageLoader.js',
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

// Wrap your base config with MDX support
export default withMDX()(nextConfig);
