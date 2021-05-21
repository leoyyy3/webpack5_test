const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
   
    module: {
        
    },
    plugins: [
        
    ],
    
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true, // 为每个静态文件开启 gzip compression
        port: 9000,
        historyApiFallback: true, //当使用 HTML5 History API 时, 所有的 404 请求都会响应 index.html 的内容。
        host: '0.0.0.0', // 如果你希望服务器可从外部访问
    },
})