const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: {
    'react-material-timeline': './src/index.ts',
    'react-material-timeline.min': './src/index.ts',
  },
  output: {
    path: path.resolve('dist/_bundles'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'react-material-timeline',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [ 'src', 'node_modules'],
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.deploy.json'
        }
      },
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      minimize: true,
      sourceMap: true,
      include: /\.min\.js$/,
    })
  ],
};
