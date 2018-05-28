const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const standardConfig = {
  context: __dirname,
  devtool: 'source-map',
  entry: ['./js/init.js', 'css/main.less'],
  output: {
    path: __dirname + './dist',
    filename: 'bundle.js'
  },
  module: {
    noParse: /node_modules\/knockout\/build\/output\/*.js/,
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          }, {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devServer: {
    port: 8000,
    contentBase: 'dist/',
    inline: true
  }
};

module.exports = standardConfig;
