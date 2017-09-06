// help: http://webpack.github.io/docs/configuration.html
// help: https://webpack.github.io/docs/webpack-dev-server.html#webpack-dev-server-cli
const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const loaders = require('./webpack.loaders');
const plugins = require('./webpack.plugins');

console.log('To debug open address: http://localhost:3200 on any browser');
console.log('');

const config = {
  entry: [
    // inject some code in order to enable the auto refresh of the browse in case of a file's change
    'webpack-dev-server/client?http://localhost:3200',
    // the entry application code
    path.resolve(__dirname, 'dev/scripts/index.tsx')
  ],
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  output: {
    path: path.resolve(__dirname, 'dev/public'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {},
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    loaders: loaders
  },
  plugins: plugins,
};

module.exports = config;
