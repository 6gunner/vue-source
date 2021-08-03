const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'entry.js'
  },
  externals: {
    'vue': 'Vue',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: [
        path.resolve(__dirname, "node_modules"),
      ],
      loader: 'babel-loader',
    }]
  },
  resolve: {

  },
  
  plugins: [new HtmlWebpackPlugin({
    template: './index.html'
  })]

}