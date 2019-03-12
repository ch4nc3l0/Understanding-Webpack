const webpack = require('webpack');

module.exports = {
    entry: {
      appjs:'./src/script/index.js',
      bootjs:'./src/script/libs/bootstrap.bundle.min.js',
      sass:'./src/styles/index.sass'
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