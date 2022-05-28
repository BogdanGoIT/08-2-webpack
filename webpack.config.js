const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // entry точка входа
  mode: 'development',
  entry: './src/index.js',

  // output точка вывода, результат сборки
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },

  // загрузчики - правила для роботи з різними типами файлів (js, scss, jpg, svg...)
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  
  // плагины - правила для роботи з іншими розширеннями крім js (html, css...)
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new MiniCssExtractPlugin({ filename: 'styles.css' }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    port: 4444,
    open: true,
    stats: 'errors-only',
  },
};
