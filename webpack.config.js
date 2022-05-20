const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const libImport = '@import "./mixins";';
const webpack = require('webpack');

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}
console.log(mode + ' mode');

module.exports = {
    mode: mode,
    // entry: {
    //     pageOne: './src/index.js',
    //     pageTwo: './src/direction/toDNR.js',
    //     pageThree: './src/direction/toRostov.js'
    // },
    output: {
        filename: "[name].[contenthash].js",
        assetModuleFilename: "assets/[hash][ext][query]",
        path: path.resolve(__dirname, './dist'),
        clean: true,
    },
    devServer: { // Добавляем элементы конфигурации
        port: 3333,
        hot: true,
        static: path.join(__dirname, "src"),
    },
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new htmlWebpackPlugin({
            filename: "index.html",
            template: './src/index.html',
        }),
        new htmlWebpackPlugin({
            filename: "./html/direction/toDNR.html",
            template: './src/html/direction/toDNR.html',
        }),
        new htmlWebpackPlugin({
            filename: "./html/direction/toRostov.html",
            template: './src/html/direction/toRostov.html',
        }),
        new htmlWebpackPlugin({
            filename: "./html/information/info.html",
            template: './src/html/information/info.html',
        }),
        new htmlWebpackPlugin({
            filename: "./html/information/about.html",
            template: './src/html/information/about.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader"
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            //    options
                                        },
                                    ],
                                ]
                            }
                        }
                    },
                    "sass-loader",
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            },
            {
                test:/\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:['@babel/preset-env']
                    }
                }
            }

        ]

    }
}