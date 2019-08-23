const { Ads } = require('../models/index')
const _ = require('lodash')
const { _list, _item, _count, _create, _update, _removes, _safeDelete } = require('./general')

class AdsService {
  async find(payload, { query = {}, searchKeys = [], populate = [], files = null } = {}) {
    let listdata = _list(Ads, payload, {
      query: query,
      searchKeys: searchKeys,
      populate: populate,
      files
    })
    return listdata
  }

  async count(params = {}) {
    return _count(Ads, params)
  }

  async create(payload) {
    return _create(Ads, payload)
  }

  async removes(res, values, key = '_id') {
    return _removes(res, Ads, values, key)
  }

  async safeDelete(res, values) {
    return _safeDelete(res, Ads, values)
  }

  async update(res, _id, payload) {
    return _update(res, Ads, _id, payload)
  }

  async item(res, params = {}) {
    return _item(res, Ads, params)
  }
}

module.exports = new AdsService()
