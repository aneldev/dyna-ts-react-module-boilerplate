// .storybook/main.js

module.exports = {
  stories: [
    '../**/*.stories.@(ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
  ]
}
