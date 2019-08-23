// render user token
const _ = require('lodash')
const authToken = require('./jwtCheck')
const { userService } = require('@service')
const { logUtil } = require('@utils')
const settings = require('@configs/settings')

module.exports = async (req, res, next) => {
  try {
    let userToken = ''
    let getTokenFromCookie = req.signedCookies['api_' + settings.auth_cookie_name]
    if (req.method == 'GET') {
      userToken = req.query.token || getTokenFromCookie
    } else if (req.method == 'POST') {
      userToken = req.body.token || getTokenFromCookie
    }
    if (userToken) {
      req.session.user = ''
      let checkToken = await authToken.checkToken(userToken)
      if (checkToken) {
        let targetUser = await userService.item(res, {
          query: {
            _id: checkToken.userId
          },
          files: getAuthUserFields('session')
        })
        if (!_.isEmpty(targetUser)) {
          req.session.user = targetUser
        }
      }
    }
    next()
  } catch (error) {
    logUtil.error(error, req)
    next()
  }
}
