const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');


let mode = 'development';
if (process.env.NODE_ENV === 'production') {
    mode = 'production';
}

module.exports = {
    mode: mode,
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: "assets/[hash][ext][query]",
        clean: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
           filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: "./index.html"
        })],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type:'asset/resource',

            },
            {
                test: /\.mp3$/,
                type: 'asset/resource',
            }
            /*{
                test: /\.pug$/,
                //loader: 'pug-loader',//
                use: [{
                            loader: 'html-loader'
                        },
                        {
                            loader: 'pug-loader',
                            options: {
                            exports: false
                        },
                    }],
                exclude: /(node_modules|bower_components)/,
            },*/
        ]
    },
}