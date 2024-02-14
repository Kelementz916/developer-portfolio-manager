const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const config = {
  mode: 'development',
  entry: {
    frontend: './frontend/src/index.js', // Frontend entry point
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js' // Output frontend bundle
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './frontend/public/index.html',
      chunks: ['frontend'] // Specify only the frontend bundle for this HtmlWebpackPlugin
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
    ]
  },
  devServer: {
    proxy: [
      {
        context: ['/api'], // adjust this if your API requests are to a different path
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true,
      },
    ],
  },
};

module.exports = config;