const path = require("path")
const webpack = require("webpack")
var HtmlWebpackPlugin = require("html-webpack-plugin")
//const HtmlWebpackPlugin = require("html-webpack-plugin");

//const templateIndex = path.resolve(__dirname, "./src/index.html");
const sourcePath = path.resolve(__dirname, "./src")
const partials = path.resolve(__dirname, "./src/partials")

module.exports = {
  devtool: "cheap-module-eval-source-map",
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:3100",
    "webpack/hot/only-dev-server",
    "./src/index"
  ],
  bail: true,
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: "webpack:///[absolute-resource-path]"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("dev")
      }
    }),
    new webpack.NoEmitOnErrorsPlugin(),

    new HtmlWebpackPlugin({
      template: "./src/index.hbs"
    }),

    new HtmlWebpackPlugin({
      template: "./src/formations/index.hbs",
      filename: "formations/index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/a-propos/index.hbs",
      filename: "a-propos/index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/tanis-lenormand/index.hbs",
      filename: "tanis-lenormand/index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/liliwhite-liliblack/index.hbs",
      filename: "liliwhite-liliblack/index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/boutique/index.hbs",
      filename: "boutique/index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/consultations/index.hbs",
      filename: "consultations/index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/contact/index.hbs",
      filename: "contact/index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/thanks/index.hbs",
      filename: "thanks/index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/cgv/index.hbs",
      filename: "cgv/index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/mentions-legales/index.hbs",
      filename: "mentions-legales/index.html"
    })
  ],
  devServer: {
    contentBase: __dirname + "/public"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        include: path.join(__dirname, "src"),
        exclude: /node_modules/
      },

      { test: /\.css$/, use: ["style-loader", "css-loader"] },

      {
        test: /\.hbs$/,
        use: [
          /*{loader : "file-loader" , query :
          {
            name:"[path][name].html",
            context :sourcePath
          }
        },*/
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
