const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CopyPlugin = require('copy-webpack-plugin');

const baseConfig = require('./webpack.config.base.js');

module.exports = merge(baseConfig, {
  mode: 'production',

  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),

    new CopyPlugin([
      { from: 'app/assets/images/Cuts', to: 'assets/images/Cuts' },
    ]),
  ],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
});
