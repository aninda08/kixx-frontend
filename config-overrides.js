const path = require('path');

module.exports = function override(config) {
  const scssRule = config.module.rules.find(rule =>
    rule.test && rule.test.toString().includes('scss')
  );

  if (scssRule) {
    scssRule.use = [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[name]__[local]__[hash:base64:5]',
            mode: 'local'
          },
        },
      },
      {
        loader: 'sass-loader',
        options: {
          implementation: require('sass'),
          sassOptions: {
            includePaths: [path.resolve(__dirname, 'src')]
          },
          webpackImporter: false
        },
      },
    ];
  }

  // Add path aliases
  config.resolve = {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@component': path.resolve(__dirname, 'src/component'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@app': path.resolve(__dirname, 'src/application'),
      '@commons': path.resolve(__dirname, 'src/commons')
    },
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  };

  return config;
};
