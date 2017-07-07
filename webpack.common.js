const path = require('path');
const webpack = require('webpack');
const helpers = require('./build/helpers');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');

const pkg = require('./package.json');

module.exports = function () {
  return {
    context: __dirname + '/src',
    entry: {
      polyfills: './polyfills.ts',
      main: './main.ts'
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    module: {
      rules: [{
        test: /\.js$/,
        enforce: 'pre',
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }, {
          loader: 'source-map-loader'
        }],
        exclude: /node_modules/
      }, {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: [/\.(spec|e2e)\.ts$/]
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.css$/,
        use: [{
          loader: 'to-string-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'postcss-loader'
        }]
      }, {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: [/index\.html$/]
      }, {
        test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
        loader: 'file-loader'
      }, {
        test: /\.md$/,
        loader: 'html!markdown'
      }]
    },
    plugins: [
      new CheckerPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: ['polyfills']
      }),
      new CopyWebpackPlugin([
        { from: './assets' },
        { from: './styles.css' },
        { from: './normalize.css' },
        { from: __dirname + '/favicon.ico' }
      ]),
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html',
        chunksSortMode: 'dependency'
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
  };
}
