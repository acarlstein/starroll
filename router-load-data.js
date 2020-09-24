module.exports = function(router){
  const fs = require('fs')
  const path = __dirname + '/data/'
  const files = fs.readdirSync(path)
  files.forEach(function(file) {
    let contents = fs.readFileSync(path + file, 'utf8')
    router.use(function(req, res, next) {
      req[file.slice(0, -5)] = JSON.parse(contents)
      return next()
    })
  })
}
