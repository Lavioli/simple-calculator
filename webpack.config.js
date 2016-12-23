const webpack = require("webpack")
const path = require("path")

const BUILD_DIR = path.resolve(__dirname, "public")
const APP_DIR = path.resolve(__dirname, "app/js")

module.exports = {
  entry: APP_DIR + "/main.js",
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: APP_DIR,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, {
      test: /\.jsx$/,
      include: APP_DIR,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
    }]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
}
