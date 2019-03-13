// process.env.NODE_ENV = 'development';
const HtmlWebPackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
console.log('===开发模式===',process.env.NODE_ENV)
module.exports = {  
    ...moduleConfig,
    mode: 'development',
    entry: {
        app: './src/App.jsx',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: "/",
        chunkFilename: '[name]_[chunkhash:8]_chunk.js',
    },
    plugins: [
        new BundleAnalyzerPlugin(), 
        new HtmlWebPackPlugin({
            chunks: ['app'],
            template: "./src/index.html",
            title: "Webpack-React",
            filename: "index.html",
            script: '<script type="text/javascript" src="http://rescdn.qqmail.com/node/ww/wwopenmng/js/sso/wwLogin-1.0.0.js"></script>'
        }),
    ],
    devServer: {
        disableHostCheck: true,
        // public: 'http://www.fzjuzheng.com:3000',
        open:true,
        // host:"192.168.0.58", 
        port: 666,
        historyApiFallback: {
            index: 'dist/index.html',
        },
        // historyApiFallback:true
    },
};
 