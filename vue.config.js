const path = require("path"); //引入path模块
function resolve(dir) {
  return path.join(__dirname, dir); //path.join(__dirname)设置绝对路径
}
const webpackInfo = require('./src/utils/webpack')
// const baseUrl = process.env.NODE_ENV === "production" ? "/static/" : "/"; //font scss资源路径 不同环境切换控制
module.exports = {
  // 基本路径
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  // 输出文件目录
  outputDir: webpackInfo.package,
  assetsDir: 'static',
  indexPath: webpackInfo.page + '.html',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("./src"))
      .set("components", resolve("./src/components"))
      .set("views", resolve("./src/views"))
      .set("assets", resolve("./src/assets"))
      .set("common", resolve("./src/common"));
    //set第一个参数：设置的别名，第二个参数：设置的路径
  },
  configureWebpack: () => { },
  // vue-loader 配置项
  // https://vue-loader.vuejs.org/en/options.html
  // vueLoader: {},
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },

  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require("os").cpus().length > 1,
  // 是否启用dll
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
  // dll: false,
  // PWA 插件相关配置
  // see vuejs/vue-cli
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === "darwin",
    // host: "192.168.199.26",
    host: "",
    port: 9090,
    https: false,
    hotOnly: false,
    proxy: {
      "/iop_web_war": {
        target: "https://200.200.1.172:8080",
        // target : 'http://192.168.199.35:9090',
        changeOrigin: true,
        pathRewrite: {
          "^/iop_web_war": ""
        }
      }
    } // 设置代理 
    // before: app => {}
  },
  chainWebpack: config => {
    // 其他配置
    config.entry('main').add('babel-polyfill') // main是入口js文件
    // 其他配置
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
};
