// .storybook/main.js

module.exports = {
  stories: [
    '../src/**/*.stories.@(ts|tsx)',
    '../stories/**/*.stories.@(ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
  ],
  typescript: {
    reactDocgen: "none",
  },
}
