const MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    react: "./src/index.js",
  },
  output: {
    filename: "[name].[chunkhash].js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "./",
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|svg|gif|webp)$/,
        type: "asset/resource",
        use: {
          loader: "image-webpack-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      chunks: ["react"],
      hash: true,
    }),
    new MiniCssExtractPlugin(),
  ],
};
