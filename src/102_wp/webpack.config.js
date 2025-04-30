const path = require('path');
const HTMLWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV == 'development';
const isProd = !isDev;


const getOptimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    };

    if(isProd) {
        config.minimizer = [
            new CssMinimizerWebpackPlugin(),
            new TerserWebpackPlugin(),
        ]
    }

    return config;
}

const getFileName = ext => isDev ? `[name].${ext}` : `[name][contenthash].${ext}`

const getStyleLoader = extra => {
    const loaders = [
        MiniCssExtractPlugin.loader, 
        'css-loader'
    ];

    if (extra) {
        loaders.push(extra);
    }

    return loaders;
}


module.exports = {
    context: path.resolve(__dirname, './src'),
    mode: 'development',
    entry: {
        main: './index.js',
        analytics: './analytics'
    },
    output: {
        filename: getFileName('js'),
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: getOptimization(),
    devServer: {
        port: 4200,
        static: './dist',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebPackPlugin({
            template: './index.html',
            inject: 'body',
            minify: {
                collapseWhitespace: isProd,
                removeComments: isProd,
            }
        }),
        new MiniCssExtractPlugin({
            filename: getFileName('css'),
        }),
        
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon.ico'),
                    to: path.resolve(__dirname, 'dist'),
                }
            ]
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader']
                use: getStyleLoader(),
            },
            {
                test: /\.less$/,
                use: getStyleLoader('less-loader'),
            },
            {
                test: /\.s[ac]ss$/,
                use: getStyleLoader('sass-loader'),
            },
            {
                test: /\.(jpe?g|png|svg|ttf|woff|woff2)$/,
                type: 'asset',
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            },
            {
                test: /\.csv$/,
                use: ['csv-loader']
            },
        ]
    }

};
