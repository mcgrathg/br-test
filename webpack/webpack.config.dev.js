const webpack = require('webpack');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.config.base.js');

module.exports = merge(baseConfig, {
  mode: 'development',

  devServer: {
    contentBase: './app',
    hot: true,
  },

  devtool: 'eval-source-map',

  plugins: [new webpack.HotModuleReplacementPlugin()],
});
