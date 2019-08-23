/**
 * Created by Administrator on 2015/4/15.
 * 数据操作记录
 */
let mongoose = require('mongoose')
let shortid = require('shortid')
let Schema = mongoose.Schema
let moment = require('moment')

let DataOptionLogSchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate
  },
  date: { type: Date, default: Date.now },
  fileName: { type: String },
  path: { type: String },
  logs: String
})

DataOptionLogSchema.set('toJSON', { getters: true, virtuals: true })
DataOptionLogSchema.set('toObject', { getters: true, virtuals: true })

DataOptionLogSchema.path('date').get(v => {
  return moment(v).format('YYYY-MM-DD HH:mm:ss')
})

let DataOptionLog = mongoose.model('DataOptionLog', DataOptionLogSchema)

module.exports = DataOptionLog
