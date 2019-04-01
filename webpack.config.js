const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const distDir = path.resolve(__dirname, 'dist');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: distDir
    },
    mode: 'development',
    devtool: 'eval',
    devServer: {
        contentBase: distDir
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(s|)css$/,
                use: ['style-loader', 'css-loader',"postcss-loader", "sass-loader"]
            } ,{
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                    },
                }, ],
            },
        ]
    },
    plugins: [new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: "[id].css"
    })]
};