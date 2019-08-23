/**
 * Created by Administrator on 2015/4/15.
 * 文章标签对象
 */
let mongoose = require('mongoose')
let shortid = require('shortid')
let moment = require('moment')
let Schema = mongoose.Schema
let settings = require('@configs/settings')
let User = require('./User')
let Notify = require('./Notify')

let UserNotifySchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate
  },
  isRead: { type: Boolean, default: false },
  user: { type: String, ref: 'User' }, // 用户消息所属者
  systemUser: { type: String, ref: 'AdminUser' }, // 用户消息所属者
  notify: { type: String, ref: 'Notify' }, // 关联的Notify
  date: { type: Date, default: Date.now }
})

UserNotifySchema.set('toJSON', { getters: true, virtuals: true })
UserNotifySchema.set('toObject', { getters: true, virtuals: true })

UserNotifySchema.path('date').get(v => {
  return moment(v).format('YYYY-MM-DD HH:mm:ss')
})

UserNotifySchema.index({ date: -1 })

let UserNotify = mongoose.model('UserNotify', UserNotifySchema)
module.exports = UserNotify
