var webpack = require('webpack')
var path = require('path')


var BUILD_DIR = path.resolve(__dirname, 'src/public')
var APP_DIR = path.resolve(__dirname, 'src/client')

var config = {
  entry: APP_DIR + '/app/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: 'babel-loader',
        include: APP_DIR,
        exclude: /node_modules/
      },
      {
        test: /\.png?/,
        use: 'file-loader'
      }
    ]
  }
};

module.exports = config
