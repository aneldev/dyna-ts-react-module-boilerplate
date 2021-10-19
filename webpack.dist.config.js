const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const distConfig = {
  exportSrcFoldersAsModule: false,
    // True means:
    //    Exports the /src/<module name>/index.ts as module
    //    Should import line this: import {<module name>} from "package-name/dist/<module name>"
    // False means: (the default)
    //    Exports the /src/index.ts as module
    //    Should import line this: import {<module name>} from "package-name"

  thisPackageBelongsToMonorepo: false,
    // True means:
    //    This boilerplate is used as a package of a monorepo
    //    This script will exclude deps of the monorepo as well
    // False means (the default)
    //    This boilerplate is used as a stand-alone.
};

const package_ = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const loaders = require('./webpack.loaders');
const plugins = require('./webpack.plugins');

const getDirectories =
  root =>
    fs.readdirSync(root, {withFileTypes: true})
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

const entries = getDirectories('./src');

const config = {
  mode: "development",          // distribute it without minification
  target: "web",
  entry:
    distConfig.exportSrcFoldersAsModule
      ? (
        // Multiple module exports of the /src/<Module name>/index.ts
        entries
          .reduce((acc, entry) => {
            acc[entry] = `./src/${entry}`;
            return acc;
          }, {})
      )
      : (
        // Classic export of the /src/index.ts
        [
          path.resolve(__dirname, 'src/index.tsx')
        ]
      ),
  externals:
    distConfig.thisPackageBelongsToMonorepo
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
    distConfig.exportSrcFoldersAsModule
      ? {
        // Multiple module exports of the /src/<Module name>/index.ts
        filename: '[name]/index.js',
        path: __dirname + '/dist',
        libraryTarget: 'umd',
        umdNamedDefine: true,
      }
      : {
        // Classic export of the /src/index.ts
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
    rules: loaders.module.rules,
  },
  plugins: [
    new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
  ].concat(plugins.plugins),
};

module.exports = config;
