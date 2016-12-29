var webpack = require('webpack');

var config = {
    entry: './src/main.js',

    output: {
        path:'./',
        filename: 'index.js',
        publicPath: 'builds/'
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
                test:   /\.scss$/,
                exclude: /node_modules/,
                loader: 'style!css!sass'
            }
        ]
    }
};

module.exports = config;