// Generated using webpack-cli https://github.com/webpack/webpack-cli

import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'node:path'
import process from 'node:process'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

const isProduction = process.env.NODE_ENV == 'production'

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader'

const cssHandler = {
    loader: 'css-loader',
    options: {
        modules: {
            auto: true,
            localIdentName: isProduction ? '[hash:base64]' : '[path][name]__[local]',
        },
    },
}

/** @type {import('webpack').Configuration} */
const config = {
    devServer: {
        historyApiFallback: true,
        host: 'localhost',
        open: true,
    },
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                exclude: ['/node_modules/'],
                loader: 'ts-loader',
                test: /\.(ts|tsx)$/i,
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, cssHandler, 'postcss-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    output: {
        clean: true,
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/'),
        },
        extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    },
}

export default () => {
    if (isProduction) {
        config.mode = 'production'

        config.plugins.push(new MiniCssExtractPlugin())
    } else {
        config.mode = 'development'
    }
    return config
}
