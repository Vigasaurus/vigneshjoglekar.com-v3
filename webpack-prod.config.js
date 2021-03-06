const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: '[name].[hash].js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader',
					'postcss-loader',
				],
			},
		],
	},
	plugins: [
		new CopyWebpackPlugin({ patterns: [{ from: 'public', to: './' }] }),
		new CleanWebpackPlugin(),
	],
	optimization: {
		minimizer: [new OptimizeCSSAssetsPlugin()],
		splitChunks: {
			chunks: 'async',
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			automaticNameDelimiter: '~',
			name: true,
			cacheGroups: {
				vendors: {
					chunks: 'initial',
					name: 'vendor',
					test: 'vendor',
					enforce: true,
				},
				styles: {
					name: 'styles',
					test: /\.css$/,
					chunks: 'all',
					enforce: true,
				},
			},
		},
	},
};
