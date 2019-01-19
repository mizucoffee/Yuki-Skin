const path = require("path");
const fs = require("fs");

const common = {};

const entry = fs.readdirSync("./src/").reduce((obj, file) => {
  obj[
    file
      .split(".")
      .slice(0, -1)
      .join(".")
  ] = `./src/${file}`;
  return obj;
}, {});

module.exports = {
  target: "node",
  entry: entry,
  node: {
    __dirname: false,
    __filename: false
  },
  mode: process.env.ENV || "development",
  module: {
    rules: [
      {
        type: "javascript/auto",
        test: /\.json$/,
        use: [{ loader: "json-loader" }]
      }
    ]
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js"]
  },
  output: {
    path: path.resolve(__dirname, "scripts"),
    libraryTarget: "umd",
    filename: "[name].js"
  }
};
