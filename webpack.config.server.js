const Dotenv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  name: 'server',
  target: 'node',
  mode: 'production',
  entry: './server/main.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'server.bundle.js',
  },
  target: 'node', // use require() & use NodeJs CommonJS style
  externals: ['fs', 'module', 'path'],
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  externalsPresets: {
    node: true, // in order to ignore built-in modules like path, fs, etc.
  },
  devServer: {
    static: './server',
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
