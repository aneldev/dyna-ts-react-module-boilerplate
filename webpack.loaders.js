// help: http://webpack.github.io/docs/tutorials/getting-started/
const path = require('path');

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
  {
    test: /\.less$/,
    use: [
      'style-loader',
      'css-loader?modules&localIdentName=less-[name]---[local]---[hash:base64:5]',
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
      'css-loader?modules&localIdentName=scss-[name]---[local]---[hash:base64:5]',
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
  }, {
    // load the woff fonts
    // help: https://christianalfoni.github.io/react-webpack-cookbook/Inlining-fonts.html
    test: /\.woff$/,
    loader: 'url?limit=100000'
  },
  {
    // load the woff fonts
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: "url-loader?limit=10000&minetype=application/font-woff"
  },
  {
    // load the woff fonts
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: "file-loader"
  },
  {	// json loader
    test: /\.json$/, loader: "json-loader"
  },
  // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
  {test: /\.js$/, loader: "source-map-loader"}
];

// export default loaders;
