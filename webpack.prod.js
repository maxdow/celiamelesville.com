const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin  = require("extract-text-webpack-plugin");

const sourcePath = path.resolve(__dirname, "./src");

const partials = path.resolve(__dirname, "./src/partials");

module.exports = {
  devtool : "source-map",
  entry: [
    "./src/index"
  ],
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  plugins: [
    new webpack.DefinePlugin({
        "process.env": {
          "NODE_ENV": JSON.stringify("production")
        }
      }),
    new ExtractTextPlugin({ filename: 'bundle.css', disable: false, allChunks: true }),
    new HtmlWebpackPlugin({
        template: "./src/index.hbs",
        // inject: "body"
    }),
    new HtmlWebpackPlugin({
        template: "./src/creations/index.hbs",
        // inject: "body",
        filename:"creations/index.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/boutique/index.hbs",
        // inject: "body",
        filename:"boutique/index.html"

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
        loader: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: "css-loader"
        })
      },

      {test: /\.hbs$/, use: [
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
