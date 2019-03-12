const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common,{
    entry: {
      appjs:'./src/script/index.js',
      bootjs:'./src/script/libs/bootstrap.bundle.min.js',
      sass:'./src/styles/index.sass'
    },
    mode: 'development',
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "webpackdev")
    },
    plugins:[
      new HtmlWebpackPlugin({
        template: './index.html'
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
  });