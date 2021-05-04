const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].js',
		publicPath: "/",
	},
	mode: 'production',
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@routes' : path.resolve(__dirname, 'src/routes/'),
			'@styles':	path.resolve(__dirname, 'src/assets/styles/'),
		}
	},
	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						plugins: ['@babel/plugin-transform-runtime'],
					},
				},
			},
			{
				test: /.html$/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
			{
				test: /.(s*)css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'assets/images/[hash].[ext]',
						},
					},
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf)$/i,
				use: {
					loader: 'url-loader',
					options: {
						limit: 10000,
						// mimetype: "application/font-woff",
						name: "[name].[ext]",
						outputPath: "./assets/fonts/",
						publicPath: "../assets/fonts/",
						esModule: false,
					},
				}
			}
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './public/index.html',
			filename: './index.html',
		}),
		new MiniCssExtractPlugin({
			filename: 'assets/styles/[name].[contenthash].css',
		}),
		new Dotenv(),
		new CleanWebpackPlugin(),
		// new CopyPlugin({
		// 	patterns: [
		// 		{ 
		// 			from: path.resolve(__dirname, "src", "assets/images"),
		// 			to : "assets/images"
		// 		}
		// 	]
		// }),
	],
	optimization: {
		minimize: true,
		minimizer: [
			new CssMinimizerPlugin(),
			new TerserPlugin(),
		]
	}
}