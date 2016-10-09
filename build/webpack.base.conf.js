/**
 * @Date:   2016-09-27T09:55:50+08:00
 * @Last modified time: 2016-10-07T09:33:07+08:00
 */



var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: config.build.assetsRoot,
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.vue', '.jsx', '.json', '.html', '.css', '.scss'],
        fallback: [path.join(__dirname, '../node_modules')],
        alias: {
            'SRC': path.resolve(__dirname, '../src'),
            'ASSETS': path.resolve(__dirname, '../src/assets'),
            'COMPONENTS': path.resolve(__dirname, '../src/components'),
            'ACTIONS': path.resolve(__dirname, '../src/actions'),
            'CONSTANTS': path.resolve(__dirname, '../src/constants'),
            'CONTAINERS': path.resolve(__dirname, '../src/containers'),
            'MIDDLEWARE': path.resolve(__dirname, '../src/middleware'),
            'REDUCERS': path.resolve(__dirname, '../src/reducers'),
            'STORE': path.resolve(__dirname, '../src/store')
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    module: {
        preLoaders: [{
                test: /\.vue$/,
                loader: 'eslint',
                include: projectRoot,
                exclude: /node_modules/
            },
/*            {
                test: /\.js$/,
                loader: 'eslint',
                include: projectRoot,
                exclude: /node_modules/
            }*/
        ],
        loaders: [{
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.(js|jsx)$/,
                include: projectRoot,
                exclude: /node_modules/,
                loaders: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                include: projectRoot,
                exclude: /node_modules/,
                loaders: [
                    'style-loader',
                    'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
                    'postcss-loader'
                ]
            },
            {
                test: /\.css$/,
                include: projectRoot,
                exclude: /node_modules/,
                loader: 'style!css'
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    eslint: {
        formatter: require('eslint-friendly-formatter')
    },
    postcss: [
        require('postcss-unprefix'),
        require('postcss-flexboxfixer'),
        require('postcss-gradientfixer'),
        require('postcss-flexbugs-fixes'),
        require('postcss-font-magician')(),
        require('autoprefixer')({ browsers: ['last 2 versions'] })
    ],
    vue: {
        loaders: utils.cssLoaders()
    }
}
