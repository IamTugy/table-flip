const path = require('path')
const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')

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
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(src, 'index.html'),
    }),
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devServer: {
    static: dist,
    compress: true,
    port: 9000,
    hot: true,
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
