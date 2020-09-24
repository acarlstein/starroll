module.exports = function(router){
  const fs = require('fs')
  const path = __dirname + '/data/'
  const files = fs.readdirSync(path)
  files.forEach(function(file) {
    let filename = path + file
    router.use(function(req, res, next) {
      res[file.slice(0, -5)] = {
        save: function(data){
          try {
            fs.writeFileSync(filename, JSON.stringify(data))
          } catch (err) {
            console.error(err)
          }
        }
      }
      return next()
    })
  })  
}
