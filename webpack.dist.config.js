const fs = require("fs");
const path = require("path");
const nodeExternals = require("webpack-node-externals");

const isSingleModule =
  fs.existsSync('./src/index.ts') ||
  fs.existsSync('./src/index.tsx');

const package_ = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const loaders = require('./webpack.loaders.js');
const plugins = require('./webpack.plugins.js');

/**
 * Exclude src/? folders when not in single mode
 * @type {string[]}
 */
const EXCLUDE_SRC_FOLDERS = [
  "@types",
  // Other folders that won't by built by Webpack might be listed here
]

const getModuleNames =
  root =>
    fs.readdirSync(root, {withFileTypes: true})
      .filter(dirent => dirent.isDirectory())
      .filter(dirent => !EXCLUDE_SRC_FOLDERS.includes(dirent.name))
      .map(dirent => dirent.name);

const moduleNames = getModuleNames('./src');

process.traceDeprecation = true;

module.exports = {
  mode: "development",          // Distribute it without minification
  target: "node",               // Note: Not "web", to allow the components to be used from the server package!
  entry:
    isSingleModule
      ? (
        // Classic export of the /src/index.ts
        [
          path.resolve(__dirname, 'src/index.tsx')
        ]
      )
      : (
        // Multiple module exports of the /src/<Module name>/index.ts
        moduleNames
          .reduce((acc, entry) => {
            acc[entry] = `./src/${entry}`;
            return acc;
          }, {})
      ),
  externals: nodeExternals(),
  optimization: {
    // help: https://webpack.js.org/guides/tree-shaking/
    usedExports: true,  // true to remove the dead code,
  },
  devtool: "source-map",        // help: https://webpack.js.org/configuration/devtool/
  // Every folder of ./src is a standalone exported module
  output:
    isSingleModule
      ? {
        // Classic export of the /src/index.ts
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'index.js',
        library: package_.name,
        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: 'window',
        clean: true,
      }
      : {
        // Multiple module exports of the /src/<Module name>/index.ts
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name]/index.js',
        library: package_.name,
        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: 'window',
        clean: true,
      },
  resolve: {
    alias: {},
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx"],
    fallback: {
      // Remove Node.js modules, use browser alternatives or undefined
      "fs": false,
      "path": false,
      "buffer": false,  // Remove - conflicts in browser
      "stream": false,
      "crypto": false,
      "util": false,
      // Add if needed:
      // "buffer": require.resolve("buffer/"),
    }
  },
  module: {
    rules: loaders.module.rules,
  },
  plugins: plugins.plugins,
};
