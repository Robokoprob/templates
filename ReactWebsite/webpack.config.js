var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    entry: './src/main.js',

    output: {
        path:'./build',
        filename: 'bundle.js',
        publicPath: "/build"
    },

    devServer: {
        inline: true,
        port: 8082
    },

    debug: true,

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',

                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style!css?modules&localIdentName=[name]__[local]__[hash:base64:5]'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!sass')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css", {
            allChunks: true
        })
    ]
};

module.exports = config;