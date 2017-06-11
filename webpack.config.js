var path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  externals: {
    'promise-polyfill': {
      commonjs: 'promise-polyfill',
      commonjs2: 'promise-polyfill',
      amd: 'promise-polyfill',
      root: 'Promise'
    },
    'isomorphic-fetch': {
      commonjs: 'isomorphic-fetch',
      commonjs2: 'isomorphic-fetch',
      amd: 'isomorphic-fetch',
    },
  },
  output: {
    filename: 'restql.js',
    library: 'restql',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist')
  }
};
