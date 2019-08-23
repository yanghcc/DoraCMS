/*
 * @Author: doramart
 * @Date: 2019-06-24 13:20:49
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-08-23 17:34:48
 */

'use strict'

const { TemplateItems } = require('../models/index')
const _ = require('lodash')

const { _list, _item, _count, _create, _update, _removes, _safeDelete } = require('./general')

class TemplateItemsService {
  async find(payload, { query = {}, searchKeys = [], populate = [], files = null } = {}) {
    let listdata = _list(TemplateItems, payload, {
      query,
      searchKeys,
      populate,
      files
    })
    return listdata
  }

  async count(params = {}) {
    return _count(TemplateItems, params)
  }

  async create(payload) {
    return _create(TemplateItems, payload)
  }

  async removes(res, values, key = '_id') {
    return _removes(res, TemplateItems, values, key)
  }

  async safeDelete(res, values) {
    return _safeDelete(res, TemplateItems, values)
  }

  async update(res, _id, payload) {
    return _update(res, TemplateItems, _id, payload)
  }

  async item(res, params = {}) {
    return _item(res, TemplateItems, params)
  }
}

module.exports = new TemplateItemsService()
