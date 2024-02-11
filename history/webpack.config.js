const path = require('path')
const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'


const src = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'build')

module.exports = {
  devtool: isDevelopment && 'cheap-module-source-map',
  entry: [path.resolve(src, 'index.tsx')],
  mode: isDevelopment ? 'development' : 'production',
  output: {
    library: 'TableFlip',
    filename: 'bundle.js',
    path: dist,
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Progressive Web Application',
      template: path.resolve(src, 'index.html'),
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(src, 'assets', 'icons'),
          to: path.resolve(dist, 'static', 'icons'),
        },
        {
          from: path.resolve(src, 'manifest.json'),
          to: path.resolve(dist, 'static'),
        },
      ],
    }),
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devServer: {
    host: '0.0.0.0',
    static: dist,
    compress: true,
    port: 9000,
    hot: true,
    headers: {
      'Service-Worker-Allowed': '/',
    },
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?/,
        exclude: /node_modules/,
        include: src,
        loader: require.resolve('babel-loader'),
        options: {
          plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
        },
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: './img/',
          publicPath: '/static/img/',
        },
      },
      {
        test: /\.(ttf)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: './font/',
          publicPath: '/static/font/',
        },
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
}
