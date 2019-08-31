const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  externals: {},
  plugins: [new HtmlWebpackPlugin({
    template: "example/index.html"
  })]
};

module.exports = {
  ...config,
  entry: path.resolve(__dirname, "example/index.jsx"),
  output: {
    path:  path.resolve(__dirname, "build"),
  },
  devServer: {
    publicPath: "/",
    port: 9000,
    hot: true,
  },
};
