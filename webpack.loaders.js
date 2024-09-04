const autoprefixer = require('autoprefixer');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        // TypeScript loader
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: false, // Ensure this is set to false or omitted to enable type checking
              configFile: 'tsconfig.json',
            }
          },
        ]
      },
      {	// css loader
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
        ],
        exclude: /node_modules/,
      },
      {
        // Rule for LESS modules
        test: /\.module.less$/,
        exclude: /node_modules/,
        use: [
          {loader: "style-loader"},
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: "[name]-[local]--[hash:base64:12]",
              namedExport: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [
                  require('postcss-flexbugs-fixes'),
                  autoprefixer({
                    overrideBrowserslist: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9', // React doesn't support IE8 anyway
                    ],
                    flexbox: 'no-2009',
                  }),
                ],
              },
            },
          },
          {loader: 'less-loader'},
        ],
      },
      {
        // Rule for regular LESS (non-modular)
        test: /^((?!\.module).)*less$/,
        exclude: /node_modules/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [
                  require('postcss-flexbugs-fixes'),
                  autoprefixer({
                    overrideBrowserslist: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9', // React doesn't support IE8 anyway
                    ],
                    flexbox: 'no-2009',
                  }),
                ],
              },
            },
          },
          {loader: 'less-loader'},
        ],
      },
      {
        // Rule for SCSS modules
        test: /\.module.scss$/,
        exclude: /node_modules/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: "[name]-[local]--[hash:base64:12]",
              namedExport: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              postcssOptions: {
                ident: 'postcss',
                plugins: [
                  require('postcss-flexbugs-fixes'),
                  autoprefixer({
                    overrideBrowserslist: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9', // React doesn't support IE8 anyway
                    ],
                    flexbox: 'no-2009',
                  }),
                ],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        // Rule for regular SCSS (non-modular)
        test: /^((?!\.module).)*scss$/,
        exclude: /node_modules/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer'),
                ],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        // inline images load (loads the url() defined in the css)
        // help: https://christianalfoni.github.io/react-webpack-cookbook/Inlining-images.html
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /node_modules/,
        loader: 'url-loader',
        options: {
          limit: 50000,
          mimetype: 'application/font-woff',
          outputPath: '/static/',
        },
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: /node_modules/,
        loader: 'url-loader',
        options: {
          limit: 50000,
          outputPath: '/static/',
        },
      },
      // Alternative way to load fonts, always as links
      // {
      //   test: /\.(ttf|eot|woff|woff2)$/,
      //   loader: 'file-loader',
      //   options: {
      //     publicPath: '/static/',
      //   },
      // },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: 'svg-inline-loader',
      },
    ],
  },
};
