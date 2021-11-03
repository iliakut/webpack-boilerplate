const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const { src, build, public: publicDir } = require('./paths.conf');

const Env = {
  development: 'development',
  production: 'production'
}

const isDevelopment = process.env.NODE_ENV === Env.development;

module.exports = {
  mode: process.env.NODE_ENV,

  entry: [`${src}/index.tsx`],

  output: {
    path: build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  plugins: [
    new CleanWebpackPlugin(),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: publicDir,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),

    new HtmlWebpackPlugin({
      title: 'Webpack 5 boilerplate',
      favicon: `${src}/images/favicon.png`,
      template: `${src}/template.html`,
      filename: 'index.html',
    }),

    new ESLintPlugin({
      files: ['.', 'src', 'config'],
      formatter: 'table',
    }),

    new PrettierPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [
                isDevelopment ? require.resolve('react-refresh/babel') : false
              ].filter(Boolean)
            }
          }
        ],
        exclude: /node_modules/,
      },

      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },

      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      { test: /\.(woff(2)?|eot|ttf|otf|)$/, type: 'asset/inline' },

      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },

    ],
  },

  resolve: {
    modules: [src, 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': src,
    },
  },
};
