'use strict';

const helpers = require('./build/helpers');
const webpackMerge = require('webpack-merge');
const makeCommonConfig = require('./webpack.common.js');

const DefinePlugin = require('webpack/lib/DefinePlugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HMR = helpers.hasProcessFlag('hot');

function makeConfig() {
  const commonConfig = makeCommonConfig();

  const metadata = webpackMerge(commonConfig.metadata, {
    host: 'localhost',
    port: 3000,
    ENV,
    HMR
  });

  return webpackMerge(commonConfig, {
    devtool: 'cheap-module-source-map',
    output: {
      path: helpers.root('dist'),
      filename: '[name].bundle.js',
      sourceMapFilename: '[name].map',
      chunkFilename: '[id].chunk.js'
    },
    plugins: [
      new DefinePlugin({
        ENV: JSON.stringify(metadata.ENV),
        HMR: metadata.HMR,
        'process.env': {
          ENV: JSON.stringify(metadata.ENV),
          NODE_ENV: JSON.stringify(metadata.ENV),
          HMR: metadata.HMR
        }
      })
    ]
  });
}

module.exports = makeConfig;
