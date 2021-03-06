const webpack = require('webpack'),
    path = require('path');

module.exports = {
    debug: true,
    devtool: 'cheap-module-eval-source-map',
    noInfo: false,
    entry: {
        'ol-wrapper': ['babel-polyfill', './index.js']
    },
    target: 'web',
    output: {
        path: path.join(__dirname, 'dist'),
        library: 'olWrapper',
        libraryTarget: 'umd',
        filename: '[name].dev.js'
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {test: /\.js$/, include: path.join(__dirname, 'src'), loader: 'babel'}
        ]
    }
};
