var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: "./app-client.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
        exclude: /(node_modules|app-server.js)/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('public/style.css', {
      allChunks: true
    })
  ]
};