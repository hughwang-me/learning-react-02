const path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {

    entry: './src/js/index.js',

    output: {
      path: path.resolve(__dirname , 'dist'),
      filename: 'js/bundle-[name]-[chunkhash].js'
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
