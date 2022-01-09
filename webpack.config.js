var path = require('path');

module.exports = {
  mode: 'development',
  entry: './compiled/kashish/graph/kGraph.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'graph.bundle.js'
  }
};