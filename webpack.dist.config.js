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

const entry =
  isSingleModule
    ? (
      // Classic export of the /src/index.tsx
      [
        path.resolve(__dirname, 'src/index.tsx')
      ]
    )
    : (
      // Multiple module exports of the /src/<Module name>/index.tsx
      moduleNames
        .reduce((acc, entry) => {
          acc[entry] = `./src/${entry}`;
          return acc;
        }, {})
    );

/**
 * The package is distributed in two formats, built by two webpack configs:
 * - `umd`: dist/index.js — loadable via `require()` (CommonJS), AMD or a <script> tag
 * - `esm`: dist/index.mjs — native `import`, tree-shakeable by consumer bundlers
 * The `exports` map of the package.json routes the consumers to the right file.
 */
const createConfig = format => ({
  mode: "development",          // distribute it without minification
  // Note: Not "web", to allow the components to be used from the server package!
  target:
    format === 'esm'
      ? ['node', 'es2022']      // es2022 environment is needed for module output
      : "node",
  entry,
  externals: nodeExternals(
    format === 'esm'
      ? {importType: 'module'}  // reference externals with `import` instead of `require`
      : undefined,
  ),
  experiments: {
    outputModule: format === 'esm',
  },
  optimization: {
    // help: https://webpack.js.org/guides/tree-shaking/
    usedExports: true,  // true to remove the dead code,
  },
  devtool: "source-map",        // help: https://webpack.js.org/configuration/devtool/
  // Every folder of ./src is a standalone exported module
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename:
      (isSingleModule
        ? ''                    // Classic export of the /src/index.tsx
        : '[name]/')            // Multiple module exports of the /src/<Module name>/index.tsx
      + (format === 'esm' ? 'index.mjs' : 'index.js'),
    library:
      format === 'esm'
        ? {type: 'module'}
        : {
          name: package_.name,
          type: 'umd',
          umdNamedDefine: true,
        },
    // No `clean` here: both configs emit into ./dist in parallel and would
    // delete each other's output; the build scripts rimraf ./dist instead.
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
  // The d.ts build and the circular-dependency check need to run only once,
  // so the plugins are applied to the UMD config only
  plugins: format === 'umd' ? plugins.plugins : [],
});

module.exports = [
  createConfig('umd'),
  createConfig('esm'),
];
