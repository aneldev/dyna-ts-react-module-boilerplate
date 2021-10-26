const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const isSingleModule =
  fs.existsSync('./src/index.ts') ||
  fs.existsSync('./src/index.tsx');
const thisPackageBelongsToMonorepo =
  fs.existsSync('../../package.json') &&
  !!require('../../package.json').workspaces;

const package_ = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const loaders = require('./webpack.loaders');
const plugins = require('./webpack.plugins');

const getModuleNames =
  root =>
    fs.readdirSync(root, {withFileTypes: true})
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

const moduleNames = getModuleNames('./src');

const config = {
  mode: "development",          // distribute it without minification
  target: "web",
  entry:
    isSingleModule
      ? (
        // Classic export of the /src/index.ts
        [
          path.resolve(__dirname, 'src/index.tsx')
        ]
      )
      :(
        // Multiple module exports of the /src/<Module name>/index.ts
        moduleNames
          .reduce((acc, entry) => {
            acc[entry] = `./src/${entry}`;
            return acc;
          }, {})
      ),
  externals:
    thisPackageBelongsToMonorepo
      ? [                  // exclude all dependencies from the bundle
        nodeExternals(),
        nodeExternals({
          modulesDir: path.resolve(__dirname, '../../node_modules')
        })
      ]
      : nodeExternals(),
  optimization: {
    // help: https://webpack.js.org/guides/tree-shaking/
    usedExports: true,  // true to remove the dead code,
  },
  // Every folder of ./src is a standalone exported module
  devtool: "source-map",        // help: https://webpack.js.org/configuration/devtool/
  output:
    isSingleModule
      ? {
        // Classic export of the /src/index.ts
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: '/dist/',
        library: package_.name,
        libraryTarget: 'umd',
        umdNamedDefine: true
      }
      : {
        // Multiple module exports of the /src/<Module name>/index.ts
        filename: '[name]/index.js',
        path: __dirname + '/dist',
        libraryTarget: 'umd',
        umdNamedDefine: true,
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
    rules: loaders.module.rules,
  },
  plugins: [
    new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
  ].concat(plugins.plugins),
};

module.exports = config;
