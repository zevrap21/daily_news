 const path = require('path');
module.exports = {
	devtool: 'sourcemap',
	context: __dirname,
  entry: path.resolve(__dirname, 'src/js/app.js'),
  
  output: {
	  path:  path.resolve(__dirname, 'dist/js/')  ,
    filename: 'bundle.js'
  },
  module: { 
	  loaders:[
	  		{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
  } 
} 