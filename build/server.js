const path = require('path')
const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const webpackConfig = require('./webpack.dev.config')

const port = 4000
webpackConfig.entry.app.unshift("webpack-dev-server/client?http://0.0.0.0:"+ port +"/", "webpack/hot/dev-server")

let complier = webpack(webpackConfig)

const server = new webpackDevServer(complier, {
  hot: true,
  stats: { colors: true }
}).listen(port, '0.0.0.0', function (err) {
  console.log('listen');
})

module.exports = server
