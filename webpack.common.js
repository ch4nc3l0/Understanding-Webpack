const webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
      appjs:'./src/script/index.js',
      vendorjs:'./src/script/vendor.js',
    },
    plugins:[
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
       })
    ],
    module: {
      rules: [
        {
          test: /\.html$/,
          use: ["html-loader"]
        },
        {
          test: /\.(svg|png|jpg|gif)$/,
          use: {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "imgs"
            }
          }
        }
      ]
    }
  };