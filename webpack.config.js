const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'docs'),
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html',
		})
	],
	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015'],
				plugins: ['transform-class-properties']
			}
		}
		],
	},
	devServer: {
		contentBase: path.join(__dirname, 'docs'),
		compress: true,
		port: 9000
	},
};
