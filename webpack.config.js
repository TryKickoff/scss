var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
	filename: "[name].css",
	disable: process.env.NODE_ENV === "development"
});

module.exports = {
	entry: {
		kickoff: './kickoff.scss',
		// styleguide: './styleguide.scss'
	},
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'kickoff.css'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: extractSass.extract({
					use: [
						{
							loader: "css-loader"
						},
						{
							loader: "sass-loader"
						}
					],
					// use style-loader in development
					fallback: "style-loader"
				})
			},
		]
	},
	plugins: [
		extractSass
	]
}
