var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
    app:'./index.js'
    },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    //new webpack.HotModuleReplacementPlugin(),
    //new webpack.NoErrorsPlugin(),
    //new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
    //new webpack.DefinePlugin({
    //    __DEBUG__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
    //})
  ],
  
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      exclude:/node_modules/
    }, {
      test: /\.css$/, // Only .css files
      loader: 'style!css' // Run both loaders
    },
    {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}]
  }
};
