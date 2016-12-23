const path = require("path");
const webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
//const HtmlWebpackPlugin = require("html-webpack-plugin");

//const templateIndex = path.resolve(__dirname, "./src/index.html");
const sourcePath = path.resolve(__dirname, "./src");
const partials = path.resolve(__dirname, "./src/partials");

module.exports = {
  devtool : "cheap-module-eval-source-map",
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:3100",
    "webpack/hot/only-dev-server",
    "./src/index"
  ],
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: "webpack:///[absolute-resource-path]"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
        "process.env": {
          "NODE_ENV": JSON.stringify("dev")
        }
      }),
    new webpack.NoErrorsPlugin(),

    new HtmlWebpackPlugin({
        template: "./src/index.hbs",
        inject: "body"
    }),
    new HtmlWebpackPlugin({
        template: "./src/creations/index.hbs",
        inject: false,
        filename:"creations/index.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/boutique/index.hbs",
        inject: "body",
        filename:"boutique/index.html"

    })
    /*new HandlebarsPlugin({
            // path to main hbs template
            entry: sourcePath,
            // filepath to result
            output:path.join(__dirname, "public"),

            // globbed path to partials, where folder/filename is unique
            partials: [
                "./src/partials"
            ]
    })*/
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

      {test: /\.css$/, use: ["style-loader","css-loader"]},

      {test: /\.hbs$/, use: [
        /*{loader : "file-loader" , query :
          {
            name:"[path][name].html",
            context :sourcePath
          }
        },*/
        {loader : "handlebars-loader" , query :
          {
            partialDirs : [partials]
          }
        }
      ]
      },

      {test: /\.(png|jpg)$/, use: "file-loader?name=[name].[ext]"},
    ]
  }
};
