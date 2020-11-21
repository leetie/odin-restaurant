const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      // needed to make env var available on client side
      MAP_KEY: JSON.stringify(process.env.MAP_KEY) || null
    }),
  ]
};