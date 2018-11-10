// help: http://webpack.github.io/docs/configuration.html
// help: https://webpack.github.io/docs/webpack-dev-server.html#webpack-dev-server-cli
const fs = require('fs');
const path = require('path');

const package_ = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const loaders = require('./webpack.loaders');
const plugins = require('./webpack.plugins');

const config = {
  mode: "development",    // distribute it without minification
  entry: [
    // do not load babel-polyfill here, the application should load the polyfills!
    // the entry application code
    path.resolve(__dirname, 'src/index.tsx')
  ],
  externals: Object.keys(package_.dependencies), // exclude all dependencies from the bundle
  optimization: {
    // help: https://webpack.js.org/guides/tree-shaking/
    usedExports: true, // true to remove the dead code,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/dist/',
    library: package_.name,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    alias: {},
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx"]
  },
  node: {
    // universal app? place here your conditional imports for node env
    fs: "empty",
    path: "empty",
    child_process: "empty",
  },
  module: {
    rules: loaders
  },
  plugins: plugins.concat([]),
};

module.exports = config;
