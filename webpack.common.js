const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build/dist'),
  },
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
                    publicPath: 'public/data/sounds/'
                }
            }
        }
      ]
  }
};