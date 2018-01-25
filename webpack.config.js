const path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {

    entry: './src/js/index.js',

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
      new HtmlWebpackPlugin({
        time: new Date(),
        filename: 'index.html',
        template: 'index.html'
      })
    ]

};

module.exports = config;
