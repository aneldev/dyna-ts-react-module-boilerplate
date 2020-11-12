// help: http://webpack.github.io/docs/configuration.html
// help: https://webpack.github.io/docs/webpack-dev-server.html#webpack-dev-server-cli
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const loaders = require('./webpack.loaders');
const plugins = require('./webpack.plugins');

const serverPort = Number(process.argv[process.argv.length - 1]);

console.log('To debug open address: http://localhost:' + serverPort + ' on any browser');
console.log('');

const config = {
  target: "web",
  mode: "development",
  entry: [
    'react-hot-loader/patch',                                 // activate HMR for React
    'webpack-dev-server/client?http://localhost:'+serverPort, // bundle the client for webpack-dev-server and connect to the provided endpoint
    'webpack/hot/only-dev-server',                            // bundle the client for hot reloading, only- means to only hot reload for successful updates
    path.resolve(__dirname, 'dev/index.tsx'),
  ],
  optimization: {
    usedExports: true,       // true to remove the dead code, for more https://webpack.js.org/guides/tree-shaking/
  },
  devtool: "source-map",     // help: https://webpack.js.org/configuration/devtool/
  devServer: {
    hot: true,
    host: 'localhost',
    port: serverPort,
    publicPath: '/static',
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3222',
        secure: false
      },
    },
    watchOptions: {
      poll: true,
      ignored: /node_modules/,
    },
    stats: {
      colors: true,
      assets: true,
      version: false,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
    },
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
    rules: loaders.module.rules,
  },
  node: {
    // universal app? place here your conditional imports for node env
    fs: "empty",
    path: "empty",
    child_process: "empty",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({title: 'Hot Module Replacement'}),
    // new webpack.HotModuleReplacementPlugin(),       // enable HMR globally
    new webpack.NamedModulesPlugin(),               // prints more readable module names in the browser console on HMR updates
  ].concat(plugins.plugins),
};

module.exports = config;
