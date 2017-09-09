// help: http://webpack.github.io/docs/tutorials/getting-started/
const USE_CSSMODULES = true;

module.exports = [
  {
    // Javascript and JSX loader
    test: /\.(jsx|js)$/,
    loader: 'babel-loader',
    query: {
      presets: ['es2015', 'react', 'babel-polyfill', 'stage-2']
    }
  },
  {
    // typescript loader
    test: /\.(tsx|ts)$/,
    loader: 'awesome-typescript-loader',
    query: {
      ignoreDiagnostics: [
        // for codes see at:https://github.com/Microsoft/TypeScript/blob/master/src/compiler/diagnosticMessages.json
        //2304, // Cannot find name '{0}
        //2305, // '{0}' has no exported member '{1}'
        //2307, // Cannot find module '{0}'
        //2339, // Property '{0}' does not exist on type '{1}'
        //2346, //Supplied parameters do not match any signature of call target.
      ]
    }
  },
  {	// css loader
    test: /\.css$/,
    loader: "style-loader!css-loader",
  },
  {
    test: /\.less$/,
    use: [
      'style-loader',
      USE_CSSMODULES && 'css-loader?modules&localIdentName=less-[name]---[local]---[hash:base64:5]' || 'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          plugins: function () {
            return [
              require('autoprefixer')
            ];
          }
        }
      },
      'less-loader'
    ]
  },
  {
    test: /\.scss$/,
    use: [
      'style-loader',
      USE_CSSMODULES && 'css-loader?modules&localIdentName=scss-[name]---[local]---[hash:base64:5]' || 'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          plugins: function () {
            return [
              require('autoprefixer')
            ];
          }
        }
      },
      'sass-loader'
    ]
  },
  {
    // inline images load (loads the url() defined in the css)
    // help: https://christianalfoni.github.io/react-webpack-cookbook/Inlining-images.html
    test: /\.(png|jpg|gif)$/,
    loader: 'url?limit=100000'
  },
  {
    test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader',
    options: {
      limit: 50000,
      mimetype: 'application/font-woff',
      publicPath: '/static/',
    },
  },
  {
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader',
    options: {
      limit: 50000,
      publicPath: '/static/',
  },
  },
  // Alternative way to load fonts, always as links
  // {
  //   test: /\.(ttf|eot|svg|woff|woff2)$/,
  //   loader: 'file-loader',
  //   options: {
  //     publicPath: '/static/',
  //   },
  // },
  {	// json loader
    test: /\.json$/, loader: "json-loader"
  },
  // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
  {
    test: /\.js$/, loader: "source-map-loader"
  }
];
