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
    output: {
      publicPath: '/'
    },
    resolve: {
      extensions: ['.ts', '.js', '.json']
    },
    module: {
      rules: [{
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          helpers.root('node_modules/rxjs'),
          helpers.root('node_modules/@angular')
        ]
      }, {
        test: /\.ts$/,
        loader: ['ts-loader'],
        exclude: [/\.(spec|e2e)\.ts$/]
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.css$/,
        use: 'raw-loader'
      }, {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true,
            exportAsDefault: true
          },
        }],
        exclude: [/index\.html$/]
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
        {from: './app/app.component.html', to: 'app.component.html'},
      ]),
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html',
        chunksSortMode: 'dependency'
      })
    ]
  };
}
