const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		index: './src/index.tsx',
		vendor: ['react', 'react-dom'],
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: ['ts-loader'],
			},
			{
				test: /\.(ttf|otf|png|gif|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				loader: 'file-loader?name=assets/[name].[ext]',
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.ts', '.tsx'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './public', 'index.html'),
			fileName: './index.html',
			inject: true,
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[hash].css',
			chunkFilename: 'built.[hash].css',
			ignoreOrder: false,
		}),
	],
};
