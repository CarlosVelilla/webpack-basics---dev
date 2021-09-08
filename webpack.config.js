const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack")


/** @type {import('webpack'.Configuration)} */
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
    index: path.resolve(__dirname, "./src/index.js")
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        use: ["babel-loader"],
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ["style-loader", "css-loader", "sass-loader"],
        test: /\.(css|scss|sass)$/,
      },
      {
        type: "asset",
        test: /\.(png|jpg|svg)$/
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
}