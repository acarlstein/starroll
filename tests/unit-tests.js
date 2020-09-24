'use strict';

const Mocha = require('mocha');
const runner = new Mocha({});
const glob = require("glob");

function runTests(){
  glob("./**/*.spec.js", function(err, files){
    if (err){
      console.error(err);
      return;
    } 
    files.forEach(file => runner.addFile(file));
    runner.run(failures => {
      if (failures) {
        console.error(failures)     
      } else {
        console.log('All passed.')
      }
    });
  });
}

module.exports.runTests = runTests;