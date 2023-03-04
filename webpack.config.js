const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPageNames = ['index', 'about', 'biblical-hebrew'];
const multipleHtmlPlugins = htmlPageNames.map((name) => new HtmlWebpackPlugin({
  template: `./src/${name}.html`, // relative path to the HTML files
  filename: `${name}.html`, // output HTML files    chunks: [`${name}`], // respective JS files
}));

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  devServer: {
    static: './dist',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['main'],
    }),
  ].concat(multipleHtmlPlugins),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
};
