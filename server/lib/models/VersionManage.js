/**
 * Created by Administrator on 2017/4/15.
 * app 版本管理
 */
let mongoose = require('mongoose')
let moment = require('moment')
let shortid = require('shortid')
let Schema = mongoose.Schema

let VersionManageSchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate
  },
  title: String, //标题
  client: String, //客户端类型 0安卓 1IOS
  description: String, // 描述
  version: Number, // 内部版本号
  versionName: String, // 版本名称
  forcibly: {
    type: Boolean,
    default: false
  }, // 是否强制更新
  url: String, // 更新地址
  date: {
    type: Date,
    default: Date.now
  }
})

VersionManageSchema.set('toJSON', {
  getters: true,
  virtuals: true
})
VersionManageSchema.set('toObject', {
  getters: true,
  virtuals: true
})

VersionManageSchema.path('date').get(v => {
  return moment(v).format('YYYY-MM-DD HH:mm:ss')
})

let VersionManage = mongoose.model('VersionManage', VersionManageSchema)
module.exports = VersionManage
