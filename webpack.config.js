const path = require('path');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src/client'),
  entry: {
    app: './index.js',
  },

  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist/static'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(jpg|png|svg)$/i,
        loader: 'url-loader',
        options: {
          outputPath: 'images',
        }
      },
      {
        test: /\.(svg)$/,
        use: [{
          loader: 'babel-loader'
        }, {
          loader: 'svg-react-loader'
        }]
      }
    ],
  },

  devtool: 'inline-source-map',
};
