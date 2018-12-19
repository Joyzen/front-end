const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');

const extractCSS = new ExtractTextPlugin('stylesheets/style.css');

module.exports = {
    entry: {
        mian: './src/index.jsx'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: [/\.js[x]$/],
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }, /* {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            } */{
                test: /\.css$/,
                use: extractCSS.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Mapbox Demo'
        }),
        // new ExtractTextPlugin("[name].css"),
        extractCSS,
        new ExtractTextPlugin("style2.css"),
        // new StyleExtHtmlWebpackPlugin()
    ]
};
