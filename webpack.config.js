
// "build": "webpack -p"
// "build": "webpack --mode production --progress" 
const theme = require('./package.json').theme;
const path = require('path');
console.log('process.env.NODE_ENV:', process.env.NODE_ENV)
module.exports = moduleConfig = {
    performance: { hints: false },
    module: {
        rules: [
            {
                test: /\.jsx|\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader?name=assets/css/[name].[ext]' }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    { loader: 'less-loader', options: { modifyVars: theme } },
                ],
                include: /node_modules/,
            },
            // {
            //     test: /\.html$/,
            //     use: [
            //         {
            //             loader: "html-loader",
            //             options: { minimize: true }
            //         }
            //     ]
            // },
            {
                test: /\.(?:png|jpg|jpeg|gif|svg|bmp|eot|woff|woff2|ttf)$/,
                include: path.resolve(__dirname, 'assets/img'),
                use: [
                    {
                        loader: 'file-loader?name=assets/img/[name].[ext]' //打包后在img目录下
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".scss", ".less"],
        modules: [path.resolve(__dirname, "."), "node_modules"],
        alias: {
            Assets: path.resolve(__dirname, 'assets/'),
            Option: path.resolve(__dirname, 'src/option'), 
            Tools: path.resolve(__dirname, 'tools/'),
            Mock: path.resolve(__dirname, 'mock/'),
            Redux: path.resolve(__dirname, 'redux/'), 
        }
    },
}
let config = process.env.NODE_ENV == 'development' ?
    require('./webpack.config.dev.js')
    :
    require('./webpack.config.prod.js');
module.exports = config;