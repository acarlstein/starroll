'use strict';

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = require("./configuration.json");
const specs = swaggerJsdoc(options);

const entrypoint = swaggerUi.setup(specs, {
    explorer: true
})

module.exports = {
  serve: swaggerUi.serve,
  entrypoint: entrypoint
};