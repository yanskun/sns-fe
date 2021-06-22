module.exports = {
  stories: [
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: false,
        backgrounds: false,
        controls: false,
        docs: false,
        viewport: false,
        toolbars: false
      }
    },
    "@storybook/addon-knobs",
    "@storybook/addon-actions"
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"]
    })

    config.module.rules.push({
      test: /\.pug$/,
      use: [{ loader: "pug-plain-loader" }]
    })

    // Return the altered config
    return config
  }
}
