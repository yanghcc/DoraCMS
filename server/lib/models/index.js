const mongoose = require('mongoose')
const { mongo_connection_uri } = require('@configs/settings')
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const log = console.log
const modelsPath = path.resolve(__dirname, './')

mongoose.connect(mongo_connection_uri, {
  useMongoClient: true
})

mongoose.Promise = global.Promise
const db = mongoose.connection

db.once('open', () => {
  log(chalk.green('connect mongodb success'))
})

db.on('error', error => {
  log(chalk.red('Error in MongoDb connection: ' + error))
  mongoose.disconnect()
})

db.on('close', () => {
  log(chalk.yellow('数据库断开，重新连接数据库'))
})

// 将当前目录所有的文件当作模块导出，并且模块名为文件名
fs.readdirSync(modelsPath).forEach(name => {
  if (path.extname(name) !== '') {
    name = path.basename(name, '.js') // 移除文件扩展名
    if (name !== 'index') {
      let currentName = name.substr(0, 1).toUpperCase() + name.slice(1) // 文件名首字母大写
      exports[currentName] = require(path.resolve(modelsPath, name))
    }
  }
})
