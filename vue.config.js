const path = require("path")
module.exports = {
  devServer: {
    open: true,
    port: 8080,
    hot: true
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "src/assets/less/common.less")]
    }
  }
}
