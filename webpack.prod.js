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
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  externals : {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  plugins: [
    new webpack.DefinePlugin({
        "process.env": {
          "NODE_ENV": JSON.stringify("production")
        }
      }),
    new ExtractTextPlugin({ filename: 'bundle.css', disable: false, allChunks: true }),
    new HtmlWebpackPlugin({
        inject :false,
        template: "./src/index.hbs"
    }),
    new HtmlWebpackPlugin({
        inject :false,
        template: "./src/creations/index.hbs",
        filename:"creations/index.html"
    }),
    new HtmlWebpackPlugin({
        inject :false,
        template: "./src/tanis-lenormand/index.hbs",
        filename:"tanis-lenormand/index.html"
    }),
    new HtmlWebpackPlugin({
        inject :false,
        template: "./src/boutique/index-prod.hbs",
        filename:"boutique/index.html"
    }),
    new HtmlWebpackPlugin({
        inject :false,
        template: "./src/consultations/index.hbs",
        filename:"consultations/index.html"
    }),
    new HtmlWebpackPlugin({
        inject :false,
        template: "./src/guidance/index.hbs",
        filename:"guidance/index.html"
    }),
    new HtmlWebpackPlugin({
        inject :false,
        template: "./src/therapie/index.hbs",
        filename:"therapie/index.html"
    }),
    new HtmlWebpackPlugin({
        inject :false,
        template: "./src/contact/index.hbs",
        filename:"contact/index.html"
    }),
    new webpack.LoaderOptionsPlugin({
     minimize: true
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
