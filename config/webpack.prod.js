const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    output: {
        clean: true, // 每次构建前清理 /dist 文件夹
    },
    module: {
        
    },
    plugins: [
        
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin({
                parallel: true, // 启用多进程并发执行
            }),
        ],
        splitChunks: {
            chunks: 'all',
        },
    },
    cache: {      
        // 将缓存类型设置为文件系统      
        type: "filesystem",       
        buildDependencies: {        
            /* 将你的 config 添加为 buildDependency，           
               以便在改变 config 时获得缓存无效*/        
            config: [__filename],        
            /* 如果有其他的东西被构建依赖，           
               你可以在这里添加它们*/        
            /* 注意，webpack.config，           
               加载器和所有从你的配置中引用的模块都会被自动添加*/      
        },      
        // 指定缓存的版本      
        version: '1.0'     
    }
   
})