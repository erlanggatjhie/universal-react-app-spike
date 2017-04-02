const path = require('path');
const externalModules = require('./externalModules');
const webpack = require('webpack');

module.exports = {
  entry: './src/server',
  target: 'node',
  externals: externalModules(path.resolve(__dirname, '../../../node_modules')),
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, '../../../build')
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false
    })
  ],
  devtool: 'sourcemap'
};
