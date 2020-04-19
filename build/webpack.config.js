/*
 * @Descripttion: webpack 自定义配置
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-03-08 14:40:40
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-04-02 22:50:25
 */

const htmlPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  // output: {
  //   filename: "[name].js"
  // },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  devtool: process.env.NODE_ENV === "production" ? false : "inline-source-map",
  devServer: {
    contentBase: "./dist",
    stats: "errors-only",
    compress: false,
    host: "localhost",
    port: 8081
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["./dust"]
    }),
    new htmlPlugin({
      template: "./src/views/index.html"
    })
  ]
}