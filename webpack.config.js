const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = () => {
  let config = {
    entry: './clientSrc/js/index.js',
    output: {
      filename: 'js/main.js',
      path: path.resolve(__dirname, 'public', 'dist')
    },
    devtool: 'inline-source-maps',
    module: {
      rules: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        },
        {
          test: /\.styl$/,
          loader: ExtractTextPlugin.extract({
            fallback: {loader: 'style-loader'},
            use: ['css-loader','stylus-loader']
          })
        },
      ]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: 'css/[name].css'
      })
    ]
  }

  return config;
};
