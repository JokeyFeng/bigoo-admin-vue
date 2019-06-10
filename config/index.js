'use strict'

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

    // Various Dev Server settings
    host: '127.0.0.1',
    port: 8848,
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,

    useEslint: false,

    showEslintErrorsInOverlay: false,

    devtool: 'cheap-module-eval-source-map',

    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    productionSourceMap: true,
    devtool: '#source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    bundleAnalyzerReport: process.env.npm_config_report
  }
}
