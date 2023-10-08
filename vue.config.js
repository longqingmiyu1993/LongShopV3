module.exports = {
  lintOnSave: false, //eslint-loader 是否在保存的时候检查
  publicPath: "./", //部署应用包时的基本 URL。
  outputDir: "dist", //生产环境构建文件的目录
  assetsDir: "static", //outputDir的静态资源（js，css，img，fonts）

  devServer: {
    https: false //用https做启动
  }
};
