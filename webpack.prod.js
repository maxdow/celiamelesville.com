const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const sourcePath = path.resolve(__dirname, "./src")

const partials = path.resolve(__dirname, "./src/partials")
const version = require("./package.json").version
module.exports = {
  devtool: "source-map",
  entry: ["./src/index"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app." + version + ".js"
    // filename: "bundle.js"
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new ExtractTextPlugin({
      filename: "bundle." + version + ".css",
      disable: false,
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: "./src/index.hbs"
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: "./src/creations/index.hbs",
      filename: "creations/index.html"
    }),
    new HtmlWebpackPlugin({
      inject: false,

      template: "./src/formation-tarot/index.hbs",
      filename: "formation-tarot/index.html"
    }),
    new HtmlWebpackPlugin({
      inject: false,

      template: "./src/a-propos/index.hbs",
      filename: "a-propos/index.html"
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: "./src/tanis-lenormand/index.hbs",
      filename: "tanis-lenormand/index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/liliwhite-liliblack/index.hbs",
      filename: "liliwhite-liliblack/index.html"
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/boutique/index.hbs",
      filename: "boutique/index.html"
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: "./src/consultations/index.hbs",
      filename: "consultations/index.html"
    }),

    new HtmlWebpackPlugin({
      inject: false,
      template: "./src/contact/index.hbs",
      filename: "contact/index.html"
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      // compress: {
      //   // warnings: true,
      //   dead_code: true,
      //   // conditionals: true,
      //   unused: true
      // }
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        include: path.join(__dirname, "src"),
        exclude: /node_modules/
      },

      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },

      {
        test: /\.hbs$/,
        use: [
          {
            loader: "handlebars-loader",
            query: {
              partialDirs: [partials]
            }
          }
        ]
      },

      { test: /\.(png|jpg)$/, use: "file-loader?name=[name].[ext]" }
    ]
  }
}
