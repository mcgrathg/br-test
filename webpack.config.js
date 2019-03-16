const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'app/index.js'),
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  devServer: {
    contentBase: './app',
    hot: true,
  },

  devtool: 'eval-source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
    }),

    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunks: ['index'],
      filename: 'index.html',
    }),
  ],
};
