const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== 'production'

// html
exports.htmlRules = {
    test: /\.html$/i,
    loader: 'html-loader',
}

// ts-scripts
exports.scriptsRules = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
}

// styles scss
exports.stylesRules = {
    test: /\.s[ac]ss$/i,
    use: [
        MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                modules: {
                    auto: true,
                    exportGlobals: false,
                    localIdentName: devMode ? '[path][name]__[local]' : '[contenthash]',
                },
                importLoaders: 1,
            },
        },
        { loader: 'sass-loader' },
    ],
}

// images
exports.imagesRules = {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
    use: {
        loader: 'image-webpack-loader',
        options: {
            mozjpeg: {
                progressive: true,
                quality: 50,
            },
        },
    },
}

// fonts
exports.fontsRules = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
    generator: {
        filename: 'fonts/[contenthash][ext]',
    },
}
