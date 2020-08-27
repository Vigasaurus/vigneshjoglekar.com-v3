const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: true,
						},
					},
					'css-loader',
					'postcss-loader',
				],
			},
		],
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './public',
		publicPath: '/',
		hot: true,
		open: true,
		port: 4000,
		disableHostCheck: true,
		public: 'dev.vigneshjoglekar.com',
		historyApiFallback: true,
	},
};
