const Dotenv = require('dotenv-webpack');

module.exports = {
  name: 'client',
  mode: 'production',
  entry: './client/main.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'client.bundle.js',
  },
  plugins: [
    new Dotenv(),
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};
