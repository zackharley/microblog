const path = require('path');

module.exports = {
	entry: path.join(__dirname, 'src', 'public', 'main.ts'),
	output: {
		path: path.join(__dirname, 'dist/public/assets/js'),
		filename: 'vendor.js'
	},
	resolve: {
		extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx']
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.ts$/,
				loader: 'ts-loader'
			}
		]
	}
};
