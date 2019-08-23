/**
 * Created by Administrator on 2015/9/28.
 * 系统操作日志
 */
let mongoose = require('mongoose')
let shortid = require('shortid')
let Schema = mongoose.Schema
let moment = require('moment')

let SystemOptionLogSchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate
  },
  type: String, //login:登录 exception:异常
  date: { type: Date, default: Date.now },
  logs: String
})

SystemOptionLogSchema.statics = {}

SystemOptionLogSchema.set('toJSON', { getters: true, virtuals: true })
SystemOptionLogSchema.set('toObject', { getters: true, virtuals: true })

SystemOptionLogSchema.path('date').get(v => {
  return moment(v).format('YYYY-MM-DD HH:mm:ss')
})

let SystemOptionLog = mongoose.model('SystemOptionLog', SystemOptionLogSchema)

module.exports = SystemOptionLog
