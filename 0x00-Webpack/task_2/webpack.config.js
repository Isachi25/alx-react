const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // Handles CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i, // Handles image files
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets',
            },
          },
          {
            loader: 'image-webpack-loader', // Optimizes images
            options: {
              disable: process.env.NODE_ENV === 'development', // Enable only in production
            },
          },
        ],
      },
    ],
  },
  mode: 'production',
};

