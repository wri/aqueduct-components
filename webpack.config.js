const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'lib/index.js',
    libraryTarget: 'commonjs'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, 'src')]
      },
      {
        test: /\.(scss|sass)$/,
        include: path.join(__dirname, 'styles'),
        loader: 'file-loader?name=lib/styles/[name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.scss']
  }
};
