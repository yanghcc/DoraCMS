const _ = require('lodash')
module.exports = async (req, res, next) => {
  if (!_.isEmpty(req.session.user)) {
    next()
  } else {
    res.redirect('/users/login')
  }
}
