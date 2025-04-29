const path = require('path');
const HTMLWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, './src'),
    mode: 'development',
    entry: {
        main: './index.js',
        analytics: './analytics'
    },
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HTMLWebPackPlugin({
            template: './index.html',
            inject: 'body'
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|png|svg|ttf|woff|woff2)$/,
                type: 'asset',
            }
        ]
    }

};
