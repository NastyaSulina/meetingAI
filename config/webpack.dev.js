const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const { HotModuleReplacementPlugin } = require('./plugins')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    target: 'web',
    plugins: [...common.plugins, HotModuleReplacementPlugin],
    devServer: {
        static: {
            directory: path.resolve(__dirname, '../dist'),
        },
        hot: true,
        open: true,
        compress: true,
        port: 9000,
        historyApiFallback: true,
    },
})
