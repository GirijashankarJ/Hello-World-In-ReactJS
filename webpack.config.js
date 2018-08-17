let path = require("path");

let DIST_DIR = path.resolve(__dirname, "destination");
let SRC_DIR = path.resolve(__dirname, "source");

let config = {
  entry: SRC_DIR + "/index.js",
  output:
      {
        path: DIST_DIR + "/",
        filename: "bundled.js",
        publicPath: "/"
      },
  devtool: "#eval-source-map",
  devServer: {
    port: 1118,
  },
  module:
      {
        loaders: [
          {
            test: /\.(js|jsx)$/,
            include: SRC_DIR,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
              presets: ["react", "es2015", "stage-2"]
            }
          },
          {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            loader: 'url-loader',
          },
          {
            test: /\.scss$/,
            include: SRC_DIR,
            use: ["style-loader", "css-loader", "sass-loader"]
          }
        ]
      }
};

module.exports = config;