const path = require('path');

module.exports = {
  entry: './app/index.jsx',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel-loader'
        ]
      },

      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },

      {
        test: /\.(gif|png|jpe?g|svg)$/,
        loaders: [
          'image-webpack'
        ]
      }
    ]
  }
};
