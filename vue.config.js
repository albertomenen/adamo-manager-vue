
const path = require('path')

module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'es',
      fallbackLocale: 'es',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@jimp/plugin-print/load-font': path.resolve(__dirname, 'mock-load-font.js'),
      },
    },
  },
};
