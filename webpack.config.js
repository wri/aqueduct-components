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
    libraryTarget: 'commonjs'
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }

};
