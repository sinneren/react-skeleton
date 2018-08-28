const merge = require("webpack-merge");
const baseConfig = require("./base.js");

module.exports = merge(baseConfig, {
  mode: "development",

  // source-map configuration
  devtool: "source-map",
  devServer: {
    hot: true,
    port: 3000,
    contentBase: "../dist/",
    historyApiFallback: true,

    // stats
    stats: {
      hash: false,
      version: false,
      chunks: false,
      modules: false,
      children: false,
      colors: true
    }
  }
});
