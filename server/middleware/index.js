exports.internationalization = require('./internationalization')
exports.nunjucksFilter = require('./nunjucksFilter')

// WEB_MIDDLEWARE_INDEX_BEGIN
exports.authPath = require('./authPath')
exports.authUserToken = require('./authUserToken')
exports.authSessionForPage = require('./authSessionForPage')

// API_MIDDLEWARE_INDEX_BEGIN
exports.authApiToken = require('./authApiToken')
exports.renderUserInfo = require('./renderUserInfo')
exports.crossHeader = require('./crossHeader')
exports.nodeTask = require('./nodeTask')
exports.authAdminPower = require('./authAdminPower')
exports.authAdminToken = require('./authAdminToken')

// BACKSTATE_MIDDLEWARE_INDEX_BEGIN
exports.authAdminPageToken = require('./authAdminPageToken')
