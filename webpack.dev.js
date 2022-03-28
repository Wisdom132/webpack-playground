const path = require("path")
const common = require('./webpack.common')
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "bundled")
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // adds to DOM
                    "css-loader", // converts CSS to commonjs
                    "sass-loader" // converts scss to css
                ]
            },
        ]
    }
})