const webpack = require('webpack')
const { join } = require('path')
const config = require('../config')
const util = require('./util')
const loaders = require('./loaders')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const isDev = util.isDev()
const baseConfig = {
    cache: true,
    entry: util.getEntrys(),
    output: {
        path: config.outputPath,
        chunkFilename: isDev ? '[name].chunk.js' : '[name].[chunkhash:8].chunk.js',
        filename: isDev ? '[name].min.js' : '[name].[chunkhash:8].min.js'
    },
    module: {
        // noParse: [],
        rules: loaders
    },
    resolve: {
        modules: [join(__dirname, '../src'), 'node_modules'],
        extensions: ['.js', '.css', '.jsx'],
        alias: {
            '@': join(__dirname, '../src'),
            '@common': join(__dirname, '../src/common'),
            '@util': join(__dirname, '../src/util'),
            '@store': join(__dirname, '../src/baseStore'),
            '@api': join(__dirname, '../src/api')
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': isDev ? '"development"' : '"production"',
            __DEV__: isDev
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                context: __dirname
            }
        }),
        new ExtractTextPlugin({
            filename: 'index.[contenthash:8].min.css',
            allChunks: true,
            disable: isDev
        })
    ]
}
module.exports = baseConfig
