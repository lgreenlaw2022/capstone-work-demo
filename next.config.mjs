import withTM from 'next-transpile-modules';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    });

    return config;
  },
};

export default withTM(['monaco-editor'])(nextConfig);