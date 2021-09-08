const PATH = require("path")
const HTMLWEBPACKPLUGIN = require("html-webpack-plugin");
const WEBPACK = require("webpack")

module.exports = {
  mode: "development",
  devServer: {
    historyApiFallback: true,
    port: 8000,
    open: true,
    compress: true,
    hot: true
  },
  entry: {
    main: PATH.resolve(__dirname, "./src/main.js")
  },
  output: {
    path: PATH.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js"
  },
  plugins: [
    new WEBPACK.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
}