var webpack = require("webpack");

module.exports = {
    context: __dirname,
    entry: {
        app: './src/app/app'
    },
    output: {
        path: __dirname + "/dist",
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['', '.ts', '.js', '.json', '.handlebars'],
    },
    module: {
        loaders: [
            { test: /\.ts(x?)$/, loader: 'ts-loader' },
            { test: /\.handlebars$/, loader: "handlebars-loader" }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            "window.jQuery": "jquery"
        })
    ]
}