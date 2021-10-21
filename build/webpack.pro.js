const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
  mode: 'production',
  // devtool: 'hidden-source-map', // 或 不设置，打包后没有map.js
});
