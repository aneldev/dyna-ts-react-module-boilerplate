const path = require('path');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

process.traceDeprecation = true;

// The dist config exports [umd, esm]; the UMD bundle is the one analyzed
const [config] = require('./webpack.dist.config.js');

config.externals = undefined;
config.output.path = path.resolve(__dirname, 'temp/build-analyze');
config.output.publicPath = '/temp/build-analyze';
config.plugins.push(new BundleAnalyzerPlugin());

module.exports = config;
