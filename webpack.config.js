const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PUBLICPATH = "/assets/";

module.exports = {
  devtool: "eval-source-map",
  entry: __dirname + "/app/main.jsx",
  output: {
    publicPath: PUBLICPATH,
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    contentBase: "./public",

    historyApiFallback: {
      index: PUBLICPATH
    },
    inline: true,
    hot: true,
    proxy: {
      "/": {
        bypass: function(req, res, proxyOptions) {
          return `${PUBLICPATH}index.html`;
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          {
            loader: "postcss-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    }),
    new webpack.BannerPlugin("版权声明，仿冒必纠"),
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
