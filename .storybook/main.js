const path = require("path");

module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-storyshots",
  ],
  webpackFinal: async (baseConfig, { configType }) => {
    baseConfig.resolve.modules = [...(baseConfig.resolve.modules || []), path.resolve("./")];
    baseConfig.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 1, // 1 => postcss-loader
            modules: {
              localIdentName: "[local]___[hash:base64:2]",
            },
          },
        },
        "resolve-url-loader",
        "sass-loader",
      ],
      include: path.resolve(__dirname, "../"),
    });

    return { ...baseConfig };
  },
};
