const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');


module.exports = {
    entry: {
        mian: './src/main.tsx'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
        chunkFilename: '[chunkhash].js'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [

            {
                test: [/\.js$/],
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }, {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, {
                test: /\.ts(x?)$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'ts-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Mapbox Demo'
        })
    ]
};
