const path = require("path");

module.exports = {
    entry: {
      js:'./src/script/index.js',
      sass:'./src/styles/index.sass'
    },
    mode: 'development',
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "webpackoutput")
    },

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