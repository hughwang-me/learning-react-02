
### 配置打包工具 webpack
###### 第 1 步 ： 加载 webpack 相关组件
> npm install --save-dev webpack webpack-dev-server

 webpack 是打包组件  
 webpack-dev-server 是打包调试组件
 
###### 第 2 步 ： 创建 打包配置文件 webpack.config.js
在项目根目录创建 webpack.config.js
###### 第 3 步 ： 配置 webpack.config.js
```
const path = require('path');

 var HtmlWebpackPlugin = require('html-webpack-plugin');

 const config = {
    entry: './src/js/index.js',
    output: {
      path: path.resolve(__dirname , 'dist'),
      filename: 'js/bundle-[name]-[chunkhash].js'
    }
};

module.exports = config;

```
现在可以执行 `webpac` 或者 `webpack --watch` 或者 `webpack-dev-server` 来打包项目

###### 第 4 步 ： 配置插件 html-webpack-plugin 实现动态打包
> npm install --save-dev html-webpack-plugin

```
const path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {

    entry: './src/js/index.js',

    output: {
      path: path.resolve(__dirname , 'dist'),
      filename: 'js/bundle-[name]-[chunkhash].js'
    }
    plugins: [
      new HtmlWebpackPlugin({
        time: new Date(),
        filename: 'index.html',
        template: 'index.html'
      })
    ]

};

module.exports = config;
```
