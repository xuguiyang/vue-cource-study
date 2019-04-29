const path = require('path')

// const resolve = dir => {
//   return path.join(_dirname, dir)
// }
//下面为简写
const resolve = dir => path.join(__dirname, dir)

//如果当前时开发环境打包编译 项目指定到域名的根目录下用'/'
const BASE_URL = process.env.NODE_ENV === 'proction' ? '/iview-admin' : '/'

module.exports = {
  lintOnSave: false,
  //定义项目的基本路径
  baseUrl: BASE_URL,
//方便开发的配置
  chainWebpack: config => {
    config.resolve.alias

      //@代表src这个目录
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
      // .set('pages',resolve(''))
  },
  //打包时不生成。map文件  提高打包速度
  productionSourceMap:false,
  //满足跨域需求 使用devserver
  devServer:{
    //需要代理的url 告诉开发环境将任何位置请求就是没有匹配到静态文件的环境进行跨域z

    // proxy:'http://localhost:4000'
  }

}
