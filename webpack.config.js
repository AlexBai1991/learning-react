'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/build/',
    filename: 'index.debug.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [

  ],
  babel: {
    presets: ['es2015', 'react']
  }
};