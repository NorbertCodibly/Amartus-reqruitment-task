const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

const getAbsolutePath = _path => path.resolve(__dirname, _path);

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: getAbsolutePath('dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.scss'],
    plugins: [new DirectoryNamedWebpackPlugin(true)],
    alias: {
      '~': getAbsolutePath('src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: getAbsolutePath('public/index.html'),
      filename: 'index.html',
      inject: 'body',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: getAbsolutePath('public'),
          to: getAbsolutePath('dist/public'),
          globOptions: {
            ignore: ['**/*.html'],
          },
        },
      ],
    }),
  ],
  devServer: {
    open: true,
    hot: true,
    historyApiFallback: true,
    publicPath: '/',
  },
};
