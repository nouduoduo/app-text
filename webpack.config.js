/**
 * 功能：webpack配置文件
 * 日期：2017-11-17
 **/
// 请求webpack核心模块（只有当需要使用到webpack的方法的时候才请求）
const webpack = require('webpack');
const path = require('path');
// 请求文本剥离模块
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// 实例化“请求文本剥离模块”并配置剥离出来的css文件的输出目录及文件名
const styles = new ExtractTextPlugin("../styles/css/styles.css");
// 实例化webpack内置文件压缩插件
let compress = new webpack.optimize.UglifyJsPlugin({
	// 是否保留注释
	comments: false,
	// 压缩配置
	compress: {
		// 禁用警告信息
		warnings: false
	}
});

module.exports = {
	// 执行环境目录配置
	context: __dirname + '/js',
	entry: './entry.js',
	output: {
		path: path.resolve(__dirname, "js"),
		filename: 'bundle.js',
		publicPath: "../"
	},
	module: {
		rules: [
			{
				test: /\.(css|less)$/,
				// 实例化“请求文本剥离模块”来处理loader
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader!less-loader"
				})
			},
			{
				test: /\.(jpg|jpeg|png|gif|svg)$/,
				loader: 'url-loader?limit=8000&name=../img/source/[hash].[ext]'
			}
		]
	},
	plugins: [styles, compress]
};
