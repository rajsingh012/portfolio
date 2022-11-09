const HtmlWebPackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./public/index.ejs",
    filename: "./index.ejs"
});
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name].js",
        publicPath: '/'
    },
    mode: 'development',
    plugins: [htmlPlugin,
        new CompressionPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(ttf|eot|woff|gif|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [{
                    loader: 'file-loader'
                }]
            },
            {
                test: /.*\.(gif|png|jpe?g|svg)$/i,
                use: [{
                    loader: "url-loader"
                }]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                },
                {
                    loader: "css-loader" // translates CSS into CommonJS
                },
                {
                    loader: "less-loader" // compiles Less to CSS
                }
                ]
            }
        ]
    }
};