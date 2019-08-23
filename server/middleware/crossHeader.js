module.exports = (_req, res, next) => {
  res.header('Access-Control-Allow-Origin', res.header('origin') || '*')
  res.header('Access-Control-Allow-Headers', 'x-requested-with')
  res.header('Access-Control-Request-Method', 'GET,POST,PUT,DELETE')
  res.header('Access-Control-Allow-Credentials', 'true')
  next()
}
