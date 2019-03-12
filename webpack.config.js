const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
      appjs:'./src/script/index.js',
      bootjs:'./src/script/libs/bootstrap.bundle.min.js',
      sass:'./src/styles/index.sass'
    },
    mode: 'development',
    output: {
      filename: "[name].[contentHash].js",
      path: path.resolve(__dirname, "webpackoutput")
    },
    plugins:[
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
       }),
    ],
    module: {
      rules: [{ 
        test: /\.sass$/,
        use:[
          "style-loader",
          "css-loader",
          "sass-loader"
        ] 
      }]
    }
  };