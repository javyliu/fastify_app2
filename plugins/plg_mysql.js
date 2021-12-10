'use strict'

const fp = require('fastify-plugin')


module.exports = fp(async function (fastify, opts) {

  fastify.register(require('fastify-mysql'), opts);

})


module.exports.autoConfig = { promise: true, connectionString:  process.env.db }