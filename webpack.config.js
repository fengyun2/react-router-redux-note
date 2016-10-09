/**
* @Date:   2016-09-29T09:01:07+08:00
* @Last modified time: 2016-09-29T10:25:04+08:00
*/

let webpack = require('webpack')
let path = require('path')
let fs = require('fs')
let precss = require('precss')
let autoprefixer = require('autoprefixer')

let index_file = path.resolve(__dirname, 'src/index.html')
fs.readFile(index_file, 'utf-8', function(err, data) {
    if (err) {
        console.log('error: ', err)
    } else {
        let devhtml = data
        if (data.indexOf('/bundle.js') < 0) {
            devhtml = devhtml.replace('<script></script>', '<script></script><script type="text/javascript" src="/bundle.js"></script>')
        }
        fs.writeFileSync(index_file, devhtml)
    }
})

let static_url = 'assets/'
module.exports = {
    debug: true,
    devServer: {
        historyApiFallback: true,
        hot: true,
        quiet: true,
        inline: true,
        progress: true,
        contentBase: './src',
        lazy: false,
        stats: { colors: true, cached: false, cachedAssets: false },
        port: 8080
    },
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'src/index.js')
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: './bundle.js'
    },
    module: {

        loaders: [{
                test: /\.vue$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'vue'
            },
            {
              test: /\.(css|scss)$/,
              include: path.resolve(__dirname, 'src'),
              loaders: [
                'style-loader',
                'css-loader?modules&importLoaders=1&localIdentName=[name]___[local]-[hash:base64:5]&sourceMap=true',
                'sass-loader',
                'postcss-loader'
              ]
            },
            {
              test: /\.(css|scss)$/,
              exclude: /src/,
              loader: 'style!css!sass!postcss&sourceMap=true'
            },
             {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                loader: 'babel'
            }, {
                test: /\.json$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'json'
            }, {
                test: /\.(png|jpg|gif|woff|woff2|ttf|eot|svg)$/,
                loader: 'url',
                query: {
                    limit: 1,
                    name: static_url + 'img/[name].[hash:7].[ext]?[hash]'
                }
            }, {
                test: /\.(html|tpl)$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'html'
            }
        ]
    },
    externals: {
    },
    vue: {
        loaders: {
            css: 'vue-style!css!sass!postcss?sourceMap',
            sass: 'vue-style!css!sass!postcss?indentedSyntax?sourceMap',
            scss: 'vue-style!css!sass!postcss?sourceMap',
            js: 'babel',
            html: 'vue-html'
        }
    },
    postcss: [
        precss,
        autoprefixer({
            flexbox: true,
            browsers: ['> 0.001%','iOS 7'],
            cascade: false,
            supports: true
        })
    ],
    resolve: {
        // root: [process.cwd() + '/src', process.cwd() + '/node_modules'],
        extensions: ['', '.js', '.vue', '.jsx', '.json', '.html', '.css', '.scss'],
        fallback: [path.join(__dirname, '../node_modules')],
        alias: {
            'SRC': path.resolve(__dirname, './src'),
            'ASSETS': path.resolve(__dirname, './src/assets'),
            'COMPONENTS': path.resolve(__dirname, './src/components'),
            'ACTIONS': path.resolve(__dirname, './src/actions'),
            'CONSTANTS': path.resolve(__dirname, './src/constants'),
            'CONTAINERS': path.resolve(__dirname, './src/containers'),
            'MIDDLEWARE': path.resolve(__dirname, './src/middleware'),
            'REDUCERS': path.resolve(__dirname, './src/reducers'),
            'STORE': path.resolve(__dirname, './src/store')
        }
    },
    plugins: [
        /*    new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),*/
        new webpack.HotModuleReplacementPlugin(),
        function() {
            return this.plugin('done', function(stats) {
                let content = JSON.stringify(stats.toJson().assetsByChunkName, null, 2)
                console.log('编译完成, 当前版本是：' + JSON.stringify(stats.toJson().hash))
            })
        },
    ],
    devtool: '#eval-source-map'
}
