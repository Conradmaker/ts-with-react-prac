// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  mode: 'development', //production
  devtool: 'eval', //hidden-source-map
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', 'ts'],
  },
  entry: {
    app: './src/client.tsx',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
};
