const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(
    {
        mode: 'production',
        devtool: false,
        target: 'browserslist',
    },
    common,
)
