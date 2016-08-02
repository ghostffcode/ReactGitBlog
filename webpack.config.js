module.exports = {
  entry: __dirname + "/src/index.jsx",
  module: {
    loaders: [
      {test: /\jsx?$/, exclude: /node_modules/, loader: "babel"}
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + "/build/assets/js/",
    filename: "bundle.js"
  }
}
