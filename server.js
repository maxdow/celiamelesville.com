const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("./webpack.dev");

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase:config.devServer.contentBase,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  },
  quiet: true,
}).listen(3100, "0.0.0.0", function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log("Listening at http://localhost:3100/");
});
