const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build/dist'),
  },
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
  module: {
      rules: [
        {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader'],
        },
        {
            test: /\.js|.jsx?$/,
            exclude: /(node_modules)/,
            loaders: ["babel-loader"]
        },
        {
            test: /\.(mp3|wav|wma|ogg)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'data/sounds/',
                    publicPath: 'data/sounds/'
                }
            }
        }
      ]
  }
};