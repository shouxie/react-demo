const webpack = require('webpack')
const webpackConfig = require('./webpack.config.base')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { prodSourceMap, publicPath } = require('../config')
const plugins = [
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: prodSourceMap,
        minimize: true,
        compress: {
            warnings: false,
            drop_console: true,
            unused: true
        }
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest'],
        filename: '[name].[chunkhash:8].min.js',
        minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
        template: 'index.html',
        filename: 'index.html',
        showErrors: true,
        inject: 'body',
        hash: false,
        // favicon: 'assets/imgs/logo.png',
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            chunksSortMode: 'dependency'
        }
    })
]
module.exports = merge(webpackConfig, {
    devtool: prodSourceMap ? '#source-map' : false,
    output: {
        publicPath
    },
    plugins
})
