const path = require("path");
const webpack = require("webpack");

//const HtmlWebpackPlugin = require("html-webpack-plugin");

//const templateIndex = path.resolve(__dirname, "./src/index.html");
const sourcePath = path.resolve(__dirname, "./src");

const version = require("./package.json").version;

module.exports = {
  devtool : "eval",
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:3100",
    "webpack/hot/only-dev-server",
    "./src/index"
  ],
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
        "process.env": {
          "NODE_ENV": JSON.stringify("dev")
        }
      }),
    new webpack.NoErrorsPlugin(),
/*    new HtmlWebpackPlugin({
        template: templateIndex,
        inject: "body"
    })*/
  ],
  devServer: {
      contentBase: __dirname + "/public"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: "babel-loader",
      include: path.join(__dirname, "src"),
      exclude: /node_modules/
    },
    {test: /\.css$/, loader: "style-loader!css-loader"},
    {test: /\.json$/, loader: "json-loader"},
    {test: /\.(png|ico)$/, loader: "file-loader?name=[name].[ext]" },
    {test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?name=fonts.[ext]" }
    ]
  }
};
