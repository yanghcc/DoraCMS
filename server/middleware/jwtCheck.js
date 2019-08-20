const jwt = require('jsonwebtoken')
let { encrypt_key } = require('@configs/settings')

module.exports = {
  checkToken: token => {
    return new Promise(resolve => {
      jwt.verify(token, encrypt_key, (err, decoded) => {
        if (err) {
          console.log('check token failed', err)
          if (err.message == 'jwt expired') {
            resolve('0') // 超时
          } else {
            resolve('-1') // token非法
          }
        } else {
          // console.log('---decoded---', decoded)
          resolve(decoded)
        }
      })
    })
  }
}
