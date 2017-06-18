const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const TARGET = path.resolve(__dirname, './dist');

const DEVELOPMENT = 'development';
const PRODUCTION = 'production';

const environment = process.env.NODE_ENV || DEVELOPMENT;

function getEnvironmentPlugins() {
  switch (environment) {
    case DEVELOPMENT:
      return [
        new webpack.DefinePlugin({
          __API_BASE_URL__: "'http://localhost:8080'",
        }),
      ];
    case PRODUCTION:
      return [
        new webpack.DefinePlugin({
          __API_BASE_URL__: "'http://localhost:8080'",
        }),
        new UglifyJSPlugin(),
      ];
    default:
      return [
        new webpack.DefinePlugin({
          __API_BASE_URL__: "''",
        }),
      ];
  }
}

module.exports = {
  entry: ['./node_modules/babel-polyfill', './src/index.js'],
  output: {
    filename: 'bundle.[hash].js',
    path: TARGET,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|json)$/,
        use: 'babel-loader'
      },
      {
        test: /\.(sass|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
        use: 'file-loader?name=[path][name].[hash].[ext]'
      },
      {
        test: /\.(jpg|png)$/,
        use: 'file-loader?name=[path][name].[hash].[ext]',
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve(__dirname, './node_modules'),
      path.resolve(__dirname, './lib'),
    ],
    extensions: ['.js', '.json', '.scss', 'png', 'jpg', 'gif', '.svg'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: 'body',
      showErrors: true,
      minify: false,
      cache: false,
    }),
    new CopyWebpackPlugin([
      {from: './node_modules/react/dist', to: 'react'},
      {from: './node_modules/react-dom/dist', to: 'react-dom'},
    ]),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
    }),
    ...getEnvironmentPlugins(),
  ],
  devtool: 'source-map',
  externals: [
    {
      react: 'React',
      'react-dom': 'ReactDOM',
    }
  ],
  devServer: {
    contentBase: TARGET,
    compress: true,
    port: 3000,
    historyApiFallback: {
      rewrites: [
        {
          from: /^(?!\/my\/.*)/,
          to: '/',
        },
      ],
    },
    https: false,
    proxy: {
      '/api/': {
        target: 'http://localhost:8080',
        secure: false,
        logLevel: 'debug',
        changeOrigin: true,
        bypass: req => {
          delete req.headers.origin;
          delete req.headers.referer;
        },
      },
    },
  },
};
