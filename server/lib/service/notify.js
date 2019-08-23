const { Notify } = require('../models/index')
const _ = require('lodash')
const { _list, _item, _count, _create, _update, _removes, _safeDelete } = require('./general')

class NotifyService {
  async find(payload, { query = {}, searchKeys = [], populate = [], files = null } = {}) {
    let listdata = _list(Notify, payload, {
      query,
      searchKeys,
      populate,
      files
    })
    return listdata
  }

  async count(params = {}) {
    return _count(Notify, params)
  }

  async create(payload) {
    return _create(Notify, payload)
  }

  async removes(res, values, key = '_id') {
    return _removes(res, Notify, values, key)
  }

  async safeDelete(res, values) {
    return _safeDelete(res, Notify, values)
  }

  async update(res, _id, payload) {
    return _update(res, Notify, _id, payload)
  }

  async item(res, params = {}) {
    return _item(res, Notify, params)
  }
}

module.exports = new NotifyService()
