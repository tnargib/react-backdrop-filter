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
            plugins: [require("@babel/plugin-proposal-class-properties")]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom")
    }
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
  },
  plugins: []
};

module.exports = {
  entry: path.resolve(__dirname, "src/BackdropFilter.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "BackdropFilter.min.js",
    library: "react-backdrop-filter",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  mode: "production",
  module: config.module,
  resolve: config.resolve,
  plugins: config.plugins
};
