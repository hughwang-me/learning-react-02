# learning-react-02
新闻网站

## 配置环境

### 初始化项目
> npm init

### 配置打包工具 webpack
###### 第 1 步 ： 加载 webpack 相关组件
> npm install --save-dev webpack webpack-dev-server
> webpack 是打包组件  
> webpack-dev-server 是打包调试组件
###### 第 2 步 ： 创建 打包配置文件 webpack.config.js
在项目根目录创建 webpack.config.js 并创建相关项目规范化文件夹 src dist css js 等
###### 第 3 步 ： 配置 webpack.config.js
> const path = require('path');
> var HtmlWebpackPlugin = require('html-webpack-plugin');
> const config = {
>    entry: './src/js/index.js',
>    output: {
>      path: path.resolve(__dirname , 'dist'),
>      filename: 'js/bundle-[name]-[chunkhash].js'
>    }
> };
> module.exports = config;
