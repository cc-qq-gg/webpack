const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
  // 开发环境 最佳： eval-cheap-module-source-map 
  // 生产环境 最佳： hidden-source-map
  mode: 'development',
  // 定位源码，种类有20+
  // devtool: "source-map",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    port: '3001', // 默认是 8080
    hot: true,
    compress: true, // 是否启用 gzip 压缩
    proxy: {
      '/api': {
        target: 'http://0.0.0.0:80',
        pathRewrite: {
          '/api': '',
        },
      },
    },
  },
});
