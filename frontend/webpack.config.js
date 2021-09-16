const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path");

module.exports = {
    mode: 'development',
    entry: {
        app: path.resolve(__dirname, "./src/index.js")
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
      path: path.resolve(__dirname, "./dist"),
      filename: "[name].js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunks : ['app'],
            filename: 'index.html'
        })
    ]
};