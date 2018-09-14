const path = require("path");

const config = {
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              require("@babel/plugin-proposal-class-properties"),
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [],
};

module.exports = [
  {
    entry: path.resolve(__dirname, "src/BackdropFilter.jsx"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "BackdropFilter.js",
      library: "react-backdrop-filter",
      libraryTarget: "umd",
      umdNamedDefine: true,
    },
    mode: "development",
    module: config.module,
    resolve: config.resolve,
    plugins: config.plugins,
  },
  {
    entry: path.resolve(__dirname, "src/BackdropFilter.jsx"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "BackdropFilter.min.js",
      library: "react-backdrop-filter",
      libraryTarget: "umd",
      umdNamedDefine: true,
    },
    mode: "production",
    module: config.module,
    resolve: config.resolve,
    plugins: config.plugins,
  },
];
