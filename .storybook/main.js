const {TsconfigPathsPlugin} = require('tsconfig-paths-webpack-plugin');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src//**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/preset-scss",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  typescript: {
    reactDocgen: 'none',
  },
  webpackFinal: async (config) => {
    [].push.apply(config.resolve.plugins, [
        new TsconfigPathsPlugin({extensions: config.resolve.extensions})
    ]);
    return config;
  }
}

