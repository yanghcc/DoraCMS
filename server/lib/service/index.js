const fs = require('fs')
const path = require('path')
const modelsPath = path.resolve(__dirname, './')

// 将service目录所有文件当作模块暴露出去
fs.readdirSync(modelsPath).forEach(name => {
  if (path.extname(name) !== '') {
    name = path.basename(name, '.js')
    if (name != 'index') {
      let currentName = name + 'Service' // 模块名以Service结尾
      exports[currentName] = require(path.resolve(modelsPath, name))
    }
  }
})
