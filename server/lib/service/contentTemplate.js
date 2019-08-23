const { ContentTemplate } = require('../models/index')
const _ = require('lodash')
const { _list, _item, _count, _create, _update, _removes, _safeDelete } = require('./general')

class ContentTemplateService {
  async find(payload, { query = {}, searchKeys = [], populate = [], files = null } = {}) {
    let listdata = _list(ContentTemplate, payload, {
      query,
      searchKeys,
      populate,
      files
    })
    return listdata
  }

  async count(params = {}) {
    return _count(ContentTemplate, params)
  }

  async create(payload) {
    return _create(ContentTemplate, payload)
  }

  async removes(res, values, key = '_id') {
    return _removes(res, ContentTemplate, values, key)
  }

  async safeDelete(res, values) {
    return _safeDelete(res, ContentTemplate, values)
  }

  async removeItems(id, values) {
    return await ContentTemplate.findOneAndUpdate(
      {
        _id: id
      },
      {
        $pull: {
          items: values
        }
      }
    )
  }

  async addItems(id, values) {
    return await ContentTemplate.findOneAndUpdate(
      {
        _id: id
      },
      {
        $push: {
          items: values
        }
      }
    )
  }

  async update(res, _id, payload) {
    return _update(res, ContentTemplate, _id, payload)
  }

  async updateMany(res, ids, payload) {
    return _updateMany(res, ContentTemplate, ids, payload)
  }

  async item(res, params = {}) {
    return _item(res, ContentTemplate, params)
  }
}

module.exports = new ContentTemplateService()
