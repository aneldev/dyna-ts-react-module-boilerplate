// help: http://webpack.github.io/docs/configuration.html
// help: https://webpack.github.io/docs/webpack-dev-server.html#webpack-dev-server-cli
const path = require('path');
const webpack = require('webpack');

const loaders = require('./webpack.loaders');
const plugins = require('./webpack.plugins');

const serverPort = Number(process.argv[process.argv.length - 1]);

console.log('To debug open address: http://localhost:' + serverPort + ' on any browser');
console.log('');

const config = {
  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:'+serverPort,
    // todo: tttt -> 'webpack/hot/dev-server',
    path.resolve(__dirname, 'dev/index.tsx')
  ],
  devServer: {
    hot: true,
    port: serverPort,
    publicPath: '/static',
    historyApiFallback: true
  },
  output: {
    path: path.resolve(__dirname, 'dev/public/static'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {},
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    loaders: loaders
  },
  plugins: [
    // todo: tttt -> new webpack.HotModuleReplacementPlugin()
  ].concat(plugins),
};

module.exports = config;
