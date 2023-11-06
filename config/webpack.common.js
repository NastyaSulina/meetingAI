const path = require('path')
const {
    scriptsRules,
    imagesRules,
    stylesRules,
    fontsRules,
    htmlRules,
    tsScriptsRules,
} = require('./rules')
const { HtmlWebpackPlugin, MiniCssExtractPlugin } = require('./plugins')

module.exports = {
    entry: path.resolve(__dirname, '../src/index.tsx'),
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, '../dist'),
        clean: true,
        assetModuleFilename: 'assets/[contenthash][ext]',
    },
    resolve: {
        extensions: ['.*', '.tsx', '.ts', '.js', '.jsx'],
    },
    module: {
        rules: [scriptsRules, tsScriptsRules, imagesRules, stylesRules, fontsRules, htmlRules],
    },
    plugins: [HtmlWebpackPlugin, MiniCssExtractPlugin],
}
