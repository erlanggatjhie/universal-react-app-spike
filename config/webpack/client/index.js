const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
  entry: './src/client',
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, '../../../build/assets'),
    publicPath: '/assets/'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
    ]
  },
  plugins: [
    new AssetsPlugin({
      path: path.resolve(__dirname, '../../../build'),
      filename: 'manifest.json'
    })
  ]
};