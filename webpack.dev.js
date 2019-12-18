const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, "./build"),
        publicPath: "/public/",
        watchContentBase: true,
        historyApiFallback: true,
        hot: true,
        inline: true,
        open: true,
        port: 3000
      },
      devtool: 'eval-source-map',
});