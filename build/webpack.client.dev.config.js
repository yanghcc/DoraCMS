const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const utils = require('./utils')

module.exports = {
  devtool: '#source-map',
  devServer: {
      proxy: {
        '/manage': {
          target: 'https://www.html-js.cn/', // 接口域名manage
          secure: false, // 如果是https接口，需要配置这个参数
          changeOrigin: true, //是否跨域
          pathRewrite: {
            '^/manage': '' //需要rewrite的,
          }
        }
      }
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    }),
    new HtmlWebpackPlugin({
      chunks: ['vendor', 'admin'],
      filename: 'admin.html',
      template: 'client/template/admin.html',
      inject: true
    })
  ]
}
