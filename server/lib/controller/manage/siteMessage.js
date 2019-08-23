const { siteMessageService } = require('@service')
const { validateForm } = require('../validate/index')
const xss = require('xss')
const _ = require('lodash')

exports.list = async (req, res, next) => {
  try {
    let payload = req.query
    let siteMessageList = await siteMessageService.find(payload, {
      populate: [
        {
          path: 'activeUser',
          select: getAuthUserFields('base')
        },
        {
          path: 'passiveUser',
          select: getAuthUserFields()
        },
        {
          path: 'content',
          select: 'title _id'
        },
        {
          path: 'message',
          select: 'content _id contentId',
          populate: {
            path: 'contentId',
            select: 'title _id date'
          }
        }
      ]
    })

    renderSuccess(req, res, {
      data: siteMessageList
    })
  } catch (err) {
    renderFail(req, res, {
      message: err
    })
  }
}

exports.getOne = async (req, res, next) => {
  try {
    let _id = req.query.id

    let targetUser = await siteMessageService.item(res, {
      query: {
        _id: _id
      }
    })

    renderSuccess(req, res, {
      data: targetUser
    })
  } catch (err) {
    renderFail(req, res, {
      message: err
    })
  }
}

exports.removes = async (req, res, next) => {
  try {
    let targetIds = req.query.ids
    await siteMessageService.removes(res, targetIds)
    renderSuccess(req, res)
  } catch (err) {
    renderFail(req, res, {
      message: err
    })
  }
}
