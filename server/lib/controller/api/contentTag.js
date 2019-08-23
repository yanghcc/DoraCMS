const xss = require('xss')
const shortid = require('shortid')
const validator = require('validator')

const { cache, siteFunc, validatorUtil } = require('@utils')
const settings = require('@configs/settings')

const { contentTagService } = require('@service')

exports.list = async (req, res, _next) => {
  try {
    let contentTagList = await contentTagService.find({
      isPaging: '0'
    })

    renderSuccess(req, res, {
      data: contentTagList
    })
  } catch (err) {
    renderFail(req, res, {
      message: err
    })
  }
}
