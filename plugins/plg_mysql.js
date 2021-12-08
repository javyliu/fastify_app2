'use strict'

const fp = require('fastify-plugin')


module.exports = fp(async function (fastify, opts) {

  fastify.register(require('fastify-mysql'), {
    promise: true,
    connectionString: 'mysql2://javy:Javy123123@192.168.30.33:3306/tsmile'
  });

})