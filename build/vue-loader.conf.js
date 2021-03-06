/* 
    vue-loader.conf的配置比较简单，详情请看代码注释
*/
var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    // 处理.vue文件中的样式
  loaders: utils.cssLoaders({
      // 是否打开source-map
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
      // 是否提取样式到单独的文件
    extract: isProduction
  })
}
