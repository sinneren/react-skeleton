const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const publicDir = path.resolve(__dirname, "../dist/");
const srcDir = path.resolve(__dirname, "../src/");

const entryFile = srcDir + "/index.tsx";

module.exports = {
	// define where our source files come from and what the output looks like
	entry: entryFile,
	output: {
		filename: "bundle.js",
		path: publicDir
	},

	// files that should be resolved by webpack
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json", ".jsx", ".scss"]
	},

	// the loaders
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: ["react-hot-loader/webpack", "awesome-typescript-loader"],
				exclude: ["/node_modules/"]
			},
			{
				test: /\.js$/,
				loader: "source-map-loader",
				enforce: "pre"
			},
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          { loader: 'css-loader', options: { modules: true } },
          'postcss-loader',
          'sass-loader',
        ],
      },
		]
	},

	// plugins
	plugins: [
    new HtmlWebpackPlugin({template: './src/index.html',}),
	]
};
