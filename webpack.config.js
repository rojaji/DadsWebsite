const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: 'button.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'DadsWebsite'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'Home.html',
      filename: 'Home.html',
    }),
    new HtmlWebpackPlugin({
      template: 'Contact.html',
      filename: 'Contact.html',
    }),
    new HtmlWebpackPlugin({
      template: 'About.html',
      filename: 'About.html',
    }),
    new HtmlWebpackPlugin({
      template: 'Services.html',
      filename: 'Services.html',
    }),
  ],
};