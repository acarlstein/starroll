module.exports = function(router){
  const swagger = require('./swagger/swagger')
  router.use('/docs', swagger.serve)
  router.get('/docs', swagger.entrypoint) 
}