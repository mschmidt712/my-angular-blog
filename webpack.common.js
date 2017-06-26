const path = require('path');
const webpack = require('webpack');
const helpers = require('./build/helpers');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');

const pkg = require('./package.json');

module.exports = function makeConfig() {
  return {
    context: __dirname + '/src',
    entry: {
      polyfills: './polyfills.ts',
      main: './main.ts'
    },
    output: {
      publicPath: './dist/'
    },
    resolve: {
      extensions: ['.ts', '.js', '.json']
    },
    module: {
      rules: [{
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          helpers.root('node_modules/rxjs'),
          helpers.root('node_modules/@angular')
        ]
      }, {
        test: /\.ts$/,
        loader: ['ts-loader', 'angular2-template-loader?keepUrl=true'],
        exclude: [/\.(spec|e2e)\.ts$/]
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.css$/,
        loader: 'raw-loader',
      }, {
        test: /\.html$/,
        loader: 'html-loader'
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
      // new CopyWebpackPlugin([
      //   {from: 'src/app/app.component.html', to: 'app.component.html'}
      // ]),
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html',
        chunksSortMode: 'dependency'
      })
    ]
  };
}
