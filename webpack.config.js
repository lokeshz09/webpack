const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js",
        index1: "./src/index1.js"
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "dist")
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                  name: 'commons',
                  chunks: 'all',
                  enforce: true
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management',
        }),
    ]
}