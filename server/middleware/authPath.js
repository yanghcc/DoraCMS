const url = require('url')
// 过滤url中的非法请求
module.exports = (req, res, next) => {
  let {search, pathname} = url.parse(req.url)
  let deCodeParams = decodeURIComponent(search)
  let reg = /[ <>@$^*()*]/g
  if (reg.test(deCodeParams)) {
    console.log('包含特殊字符，不允许访问!')
    let newParams = deCodeParams.replace(reg, '')
    res.redirect(pathname + newParams)
  } else {
    next()
  }
}
