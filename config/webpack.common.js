const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: '/src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    externals: {
        jquery: 'jQuery',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, '../src'),
                use: [MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                    options: { sourceMap: true }
                }],
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, '../src'),
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                        cacheDirectory: true
                    }
                },{
                    loader: 'cache-loader'
                }]
            },
            // file-loader webpack5中已废弃， 向 asset modules 迁移
            {
                test: /\.(png|jpg|jpeg|gif|mp3)$/,
                include: path.resolve(__dirname, '../src'),
                type: 'asset',
                // webpack 将按照默认条件，自动地在 resource 和 inline 之间进行选择：小于 15kb 的文件，将会视为 inline 模块类型，否则会被视为 resource 模块类型。
                parser: {
                    dataUrlCondition: {
                      maxSize: 4 * 1024
                    }
                }
            },
            {
                test: /\.(eot|ttf|woff|svg)$/,
                include: path.resolve(__dirname, '../src'),
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize:15 * 1024
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new MiniCssExtractPlugin()
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    
};