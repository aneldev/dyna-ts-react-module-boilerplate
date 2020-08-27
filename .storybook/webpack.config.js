const webpackDevConfig = require('../webpack.dev.config');

module.exports = ({config}) => {
  config.module.rules = webpackDevConfig.module.rules;
  config.resolve = webpackDevConfig.resolve;
  return config;
}
