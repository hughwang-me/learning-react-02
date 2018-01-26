var debug = true;
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
    context: path.join(__dirname),
    devtool: debug ? 'inline-sourcemap' : null,
    entry: './src/js/root.js',

    output: {
      path: path.resolve(__dirname , 'dist'),
      filename: 'js/bundle-[name]-[chunkhash].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.resolve(__dirname , 'src'),
          exclude: path.resolve(__dirname , 'node_modules'),
          loader: "babel-loader",
          query: {
            presets: ['react' , 'env']
          }
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        }
      ]
    },
    plugins: [
      // new webpack.optimize.UglifyJsPlugin(),
      new HtmlWebpackPlugin({
        time: new Date(),
        filename: 'index.html',
        template: 'index.html'
      })
    ],
    devServer: {
      port: 8090
    }

};

module.exports = config;
