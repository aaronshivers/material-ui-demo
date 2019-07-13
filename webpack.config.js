const path = require('path')

module.exports = {
  entry: ['@babel/polyfill', './src/app.js'],
  output: {
    path: path.join(__dirname, 'public', 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader:'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/dist/'
  }
}
