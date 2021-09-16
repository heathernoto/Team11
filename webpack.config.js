const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path");

module.exports = {
    mode: 'development',
    entry: {
        app: path.resolve(__dirname, "./frontend/index.js")
    },
    module: {
      rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ["babel-loader"],
        },
        {
            test: /\.css$/,
            use: ["style-loader",'css-loader']
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    output: {
      path: path.resolve(__dirname, "./src/main/resources/static"),
      filename: "[name].js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'frontend/index.html',
            chunks : ['app'],
            filename: 'index.html'
        })
    ]
};