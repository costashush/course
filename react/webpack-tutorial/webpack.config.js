const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
entry: './src/index.js',          
output: {                 
    path: path.resolve(__dirname,'dist'),          
    filename: 'app.bundle.js', 
},  
module: {
    rules: [
    { test:/\.js$/, use: 'babel-loader' , exclude: /node_modules/ },
// { test: /\.css/,use: ['style-loader', 'css-loader'] }
    { 
        test: /\.css/,
        use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader"
        })
    }
    ]
},
plugins: [
    new ExtractTextPlugin("globals.css"),
    new CopyWebpackPlugin([
        { from: 'src/index.html' },
    ])
],


devServer: {
    contentBase: './',
    compress: true,
    port: 3001,
    stats:"minimal",
    open:true
},
devtool: "source-map"
};