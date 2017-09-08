const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        'app': ['./src/app.js'],
        'vendor': [
            'react',
            'react-dom'
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        chunkFilename: 'chunk.[name].js',
        publicPath: '/'
    },
    resolve: {
        alias: {
          '@': resolve('src')
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
              test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
              loader: 'url-loader',
              query: {
                limit: 8192,
                name: '/img/[name].[hash:8].[ext]'
              }
            },
            {
              test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
              loader: 'url-loader',
              query: {
                limit: 10000,
                name: '/fonts/[name].[hash:8].[ext]'
              }
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'less-loader'])
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(['css-loader'])
            },
            {
                test: /\.html$/,
                loader: 'html-loader?minimize=false'
            }
        ]
    }
}
