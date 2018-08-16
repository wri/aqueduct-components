const path = require('path');
const glob = require('glob');
const env = process.env.NODE_ENV || 'development';

module.exports = {
  mode: env,
  devtool: env === 'development' ?  'eval' : null,
  resolve: { extensions: ['.js', '.jsx', '.json'] },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'url-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              includePaths: ['./node_modules']
                .map(d => path.join(__dirname, d))
                .map(g => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=aq__[local]',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./node_modules', './src/css']
                .map(d => path.join(__dirname, d))
                .map(g => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    ]
  }
};
