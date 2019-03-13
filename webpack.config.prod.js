// process.env.NODE_ENV = 'production';
const moduleConfig = require("./webpack.config");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');  //清理dist
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const version = "Version=" + new Date().getTime(); 
console.log('===生产模式===',process.env.NODE_ENV)
console.log('   生产时间===',version)
console.log('   moduleConfig===',JSON.stringify(moduleConfig));
module.exports = { 
    ...moduleConfig,
    mode: 'production',
    entry: {
        app: './src/App.jsx',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'+'?'+version,
        publicPath: "/",
        chunkFilename: '[name]_[chunkhash:8]_chunk.js',
    }, 
    plugins: [
        new CleanWebpackPlugin(),
        // new BundleAnalyzerPlugin(), 
        new HtmlWebPackPlugin({
            chunks: ['app'],
            template: "./src/index.html",
            title: "Webpack-React",
            filename: "index.html",
            script: '<script type="text/javascript" src="http://rescdn.qqmail.com/node/ww/wwopenmng/js/sso/wwLogin-1.0.0.js"></script>'
        }),
        new UglifyJSPlugin({
            uglifyOptions: {compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: true
              },
            },
              sourceMap: false 
          }),
    ],
};
 