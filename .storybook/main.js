const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.(tsx|mdx)'],
  addons: [
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: { configFile: path.resolve(__dirname, './tsconfig.json') },
        tsDocgenLoaderOptions: { tsconfigPath: path.resolve(__dirname, './tsconfig.json') },
        include: [path.resolve(__dirname, '../src')],
      },
    },
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
    '@storybook/addon-knobs/register',
  ],
};
