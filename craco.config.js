const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        baseUrl: './',
        aliases: {
          '@style': './src/style',
          '@assets': './src/assets',
          '@components': './src/components',
          '@layout': './src/layout',
          '@page': './src/page',
          '@interface': './src/interface',
          '@hook': './src/hook',
          '@utils': './src/utils',
          '@redux': './src/redux',
        },
      },
    },
  ],
};