module.exports = {
  core: {
    builder: 'webpack5'
  },
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-viewport",
    "storybook-mobile",
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
  ],
  webpackFinal: (config) => {
    const rules = config.module.rules;
    const fileLoaderRule = rules.find(rule => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;

    rules.push({
      test: /\.svg$/,
      // enforce: 'pre',
      loader: require.resolve('@svgr/webpack'),
      issuer: {
        and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
      },
    });
    rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("babel-loader")
        },
        // {
        //   loader: require.resolve('react-docgen-typescript-loader'),
        // },
      ]
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  }
}

