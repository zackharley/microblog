const path = require('path');

module.exports = {
	entry: path.join(__dirname, 'src', 'public', 'index.js'),
	output: {
		path: path.join(__dirname, 'dist/public/assets/js'),
		filename: 'vendor.js'
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}
		]
	}
};
