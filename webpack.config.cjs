const path = require('path');

module.exports = {
  mode: 'development', // or 'production'
  entry: './src/main.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Transpile JS/JSX files using Babel
        },
      },
      {
        test: /\.svg$/, // Rule for SVG files
        use: [
          {
            loader: '@svgr/webpack', // Convert SVG to React components
            options: {
              // Optional configuration for svgr
            },
          },
          'url-loader', // This is optional and allows you to handle SVG as a URL
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/i, // Rule for image files
        use: [
          {
            loader: 'file-loader', // Handles image files and copies them to the output folder
            options: {
              name: '[path][name].[ext]', // Keep the original path and name
            },
          },
        ],
      },
      {
        test: /\.css$/i, // Rule for CSS files
        use: ['style-loader', 'css-loader'], // Inject styles and parse CSS files
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};