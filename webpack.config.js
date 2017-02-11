/**
 * Created by Admin on 09.02.2017.
 */
var webpack = require('webpack');

module.exports = {
    extensions:{
        resolve:['','.js','.jsx']
    },
    entry: ['webpack-hot-middleware/client', './client/main.js'],
    output:{
        path: __dirname + '/public/build',
        filename: 'bundle.js',
        publicPath: '/public/js'
    },
    devTool: 'cheap-module-source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react-hmre']
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!autoprefixer-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!autoprefixer-loader!less",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.gif$/,
                loader: "url-loader?limit=10000&mimetype=image/gif"
            },
            {
                test: /\.jpg$/,
                loader: "url-loader?limit=10000&mimetype=image/jpg"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=10000&mimetype=image/png"
            },
            {
                test: /\.svg/,
                loader: "url-loader?limit=26000&mimetype=image/svg+xml"
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};