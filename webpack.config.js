/* eslint camelcase:0 */
const path = require('path');
const webpack = require('webpack');

const rootPath = process.cwd();

module.exports = {

  entry: [
    path.join(rootPath, 'index.js')
  ],

  output: {
    path: path.join(rootPath, 'dist/'),
    filename: 'bundle.js',
    library: 'AqueductComponents'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }

};
