import type {StorybookConfig} from "@storybook/react-webpack5";

let {module: {rules}} = require('../webpack.loaders.js');
const {plugins} = require('../webpack.plugins.js');

const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.@(mjs|ts|tsx)",
    "../stories/**/*.stories.@(mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config: any) => {
    // Remove the reference of the ./tsconfig.json from storybook
    // Otherwise, the Storybook will write on dist folder!
    // Code point: 20240906173131
    for (const rule of rules) {
      if (Array.isArray(rule.use)) {
        for (const use of rule.use) {
          if (use.loader === "ts-loader") {
            if (use.options) {
              use.options.transpileOnly = true;
              delete use.options.configFile;
            }
          }
        }
      }
    }

    // Remove the css-loader for css files, is not compatible with Storybook's
    // Storybook supports css
    // Code point: 20240906173110
    rules = rules.filter((rule: any) => {
      if (rule.test.toString() === '/\\.css$/') return false;
      return true;
    });

    // Add the rules and plugins to storybook's webpack config
    config.module.rules = config.module.rules.concat(rules);
    config.plugins = config.plugins.concat(plugins);

    return config;
  },

};
export default config;
