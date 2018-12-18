const path = require('path');
const baseConf = require('./webpack.base.conf');
const webpack = require('webpack');
const Merge = require('webpack-merge');

module.exports = Merge(
    baseConf,
    {
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 9000,
            hot: true
        },
        devtool: 'cheap-module-eval-source-map',
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    }
);