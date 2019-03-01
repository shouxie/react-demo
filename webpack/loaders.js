const { join } = require('path')
const appPath = join(__dirname, '../src')
const { eslint } = require('../config')
const isDev = require('./util').isDev()
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const cssModules = {
    module: true,
    //importLoaders: 1,
    localIdentName: '[name]__[local]__[hash:base64:5]'
}
const loaders = [
    {
        test: /\.jsx?$/,
        include: appPath,
        use: [
            {
                loader: 'babel-loader',
                options: { cacheDirectory: isDev }
            }
        ]
    },
    {
        test: /\.css?$/,
        include: appPath,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader']
        })
    },
    /*{
        test: /\.css?$/,
        include: appPath,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
                {
                    loader: 'css-loader',
                    options: cssModules
                },
                'postcss-loader'
            ]
        })
    },*/
    {
        test: /\.css?$/,
        include: join(appPath, 'styles/'),
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'postcss-loader']
        })
    },
    {
        test: /\.css?$/,
        include: /node_modules/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader']
        })
    },
    {
        test: /\.(png|jpe?g|gif)$/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 5000,
                    name: '[hash:5].[name].[ext]'
                }
            }
        ]
    },
    {
        test: /\.(svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 10240
                }
            }
        ]
    }
]
if (eslint) {
    loaders.push({
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: join(__dirname, '../src')
    })
}
module.exports = loaders
