const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
	// define where our source files come from and what the output looks like
	entry: [
		"react-hot-loader/patch",
		"webpack-dev-server/client?http://localhost:3000",
		"webpack/hot/only-dev-server",
		path.resolve(__dirname, "../src/index.tsx")
	],
	// source-map configuration
	devtool: "source-map",
	devServer: {
		hot: true,
		port: 3000,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify("development")
			}
		})
	]
});
