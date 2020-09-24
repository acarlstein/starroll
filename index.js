'use strict';
console.log("Starting...");
//require("./tests/unitTests").runTests();

const express = require('express')
const router = express()

router.use(express.json());

const path = require('path')
router.use(express.static(path.join(__dirname, 'public')))

require('./router-load-data.js')(router)
require('./router-save-data.js')(router)
require('./router-swagger.js')(router)
require('./router-characters.js')(router)

const pJson = require('./package.json')
const server = router.listen(pJson.port, () => {
  console.log(`Listening on port ${server.address().port}`)
});
