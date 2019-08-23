/**
 * Created by Administrator on 2018/11/18.
 * 我的消息对象
 */
let mongoose = require('mongoose')
let shortid = require('shortid')
let moment = require('moment')
let Schema = mongoose.Schema
let User = require('./User')
let Content = require('./Content')
let Message = require('./Message')

let SiteMessageSchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate
  },
  content: { type: String, ref: 'Content' }, // 关联文章ID
  message: { type: String, ref: 'Message' }, // 关联帖子评论ID
  communityMessage: { type: String, ref: 'CommunityMessage' }, // 关联社群评论ID
  communityContent: { type: String, ref: 'CommunityContent' }, // 社群帖子ID
  type: String, //消息类别 1赞赏，2关注，3文章评论与回复  4点赞 5社群评论与回复
  date: { type: Date, default: Date.now },
  isRead: { type: Boolean, default: false }, // 是否已读
  activeUser: { type: String, ref: 'User' }, // 主动关联人
  passiveUser: { type: String, ref: 'User' } // 被动关联人
})

SiteMessageSchema.index({ type: 1 }) // 添加索引

SiteMessageSchema.set('toJSON', { getters: true, virtuals: true })
SiteMessageSchema.set('toObject', { getters: true, virtuals: true })

SiteMessageSchema.path('date').get(v => {
  return moment(v).format('YYYY-MM-DD HH:mm:ss')
})

let SiteMessage = mongoose.model('SiteMessage', SiteMessageSchema)

module.exports = SiteMessage
