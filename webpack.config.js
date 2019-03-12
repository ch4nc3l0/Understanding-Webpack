module.exports = {
    entry: './src/script/index.',
    mode: 'development',
    output: {
      path: path.resolve(__dirname, 'webpackoutput'),
      filename: 'outputfile.js'
    }
  };