const path = require('path');

module.exports = {
  includePaths: [
    path.resolve(__dirname, 'src'),
    path.resolve(__dirname, 'node_modules')
  ],
  sourceMap: true,
  outputStyle: 'expanded'
};
