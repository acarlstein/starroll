const HttpStatusCodes = require('http-status-codes')
const ReasonPhrases = HttpStatusCodes.ReasonPhrases
const StatusCodes = HttpStatusCodes.StatusCodes

module.exports = function(router){

  router.get('/character/create', (req, res) => {      
    clone = Object.assign({}, req.characters[0])   
    clone.id = req.characters.length;
    clone.about.name="New Character"
    req.characters.push(clone)
    res.characters.save(req.characters)
    res.status(StatusCodes.CREATED).json(clone)
  })

  router.put('/character/update', (req, res) => { 
    if (req.body 
        && validateKeys(req.body, req.characters[0])
        && inRange(+req.body.id, 0, req.characters.length)){
      req.characters[req.body.id] = req.body
      res.characters.save(req.characters)    
      return res.status(StatusCodes.OK).json(req.characters[req.params.id])
    } 
    res.status(StatusCodes.BAD_REQUEST).end(ReasonPhrases.BAD_REQUEST)
  })

  router.get('/character/:id', (req, res) => {    
    if (inRange(+req.params.id, 0, req.characters.length)) {
      return res.status(StatusCodes.OK).json(req.characters[+req.params.id])
    }    
    res.status(StatusCodes.NOT_FOUND).end(ReasonPhrases.NOT_FOUND)    
  })

  router.get('/character/:id/about', (req, res) => {    
    if (inRange(+req.params.id, 0, req.characters.length)) {
      return res.status(StatusCodes.OK).json(req.characters[req.params.id].about)  
    }
    res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND)
  })

  router.get('/character/:id/about/:property', (req, res) => {    
    if (inRange(+req.params.id, 0, req.characters.length) && req.params.property) {
      return res.status(StatusCodes.OK).json(req.characters[req.params.id].about[req.params.property])  
    }
    res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND)
  })

  router.get('/character/:id/attributes', (req, res) => {    
    if (inRange(+req.params.id, 0, req.characters.length)) {
      return res.status(StatusCodes.OK).json(req.characters[req.params.id].attributes)
    } 
    res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND)
  })

  router.get('/character/:id/attributes/:attribute', (req, res) => {    
    if (inRange(+req.params.id, 0, req.characters.length) && req.params.attribute) {
      return res.status(StatusCodes.OK).json(req.characters[req.params.id].attributes[req.params.attribute])
    } 
    res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND)
  })

  router.get('/character/:id/skills', (req, res) => {
    if (inRange(+req.params.id, 0, req.characters.length)) {
      return res.status(StatusCodes.OK).json(req.characters[req.params.id].skills)          
    }
    res.status(StatusCodes.NOT_FOUND).end(ReasonPhrases.NOT_FOUND)
  })

  router.get('/character/:id/skills/:skills', (req, res) => {
    if (inRange(+req.params.id, 0, req.characters.length) && req.params.skills) {
      return res.status(StatusCodes.OK).json(req.characters[req.params.id].skills[req.params.skills])
    }
    res.status(StatusCodes.NOT_FOUND).end(ReasonPhrases.NOT_FOUND)
  })

  router.get('/character/:id/skills/:skills/:skill', (req, res) => {
    if (inRange(+req.params.id, 0, req.characters.length) && req.params.skills && req.params.skill) {
      return res.status(StatusCodes.OK).json(
        req.characters[req.params.id].skills[req.params.skills][req.params.skill]
      )
    }
    res.status(StatusCodes.NOT_FOUND).end(ReasonPhrases.NOT_FOUND)
  })

  router.get('/characters', (req, res) => {
    res.status(StatusCodes.OK).json(req.characters)
  })

  router.get('/characters/count', (req, res) => {
    res.status(StatusCodes.OK).json(req.characters.length)
  })
}

function inRange(x, min, max){
  return (Number.isInteger(x) & min < x & x < max)
}

function validateKeys(target, withSource){
  let isValid = true
  let targetKeys = Object.keys(target)
  let sourceKeys = Object.keys(withSource)
  if (JSON.stringify(targetKeys) !== JSON.stringify(sourceKeys)) {  
    return false
  }
  sourceKeys.forEach((key)=>{
    if (typeof sourceKeys[key] === 'object'){
      isValid &= validateKeys(target[key], withSource[key])
    }
  })
  return isValid
}


