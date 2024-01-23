/** @type {import('next').NextConfig} */

const Dotenv = require("dotenv-webpack");
const webpack = require("webpack");

const nextConfig = {
  webpack: (config, { isServer }) => {
    config.plugins.push(new Dotenv({ silent: true }));

    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.NEXT_PUBLIC_GITHUB_TOKEN": JSON.stringify(
          process.env.NEXT_PUBLIC_GITHUB_TOKEN
        ),
      })
    );

    return config;
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
