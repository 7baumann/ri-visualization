const path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/",        
  },
  devServer: {
    historyApiFallback: true
  }
};