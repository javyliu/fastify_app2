'use strict'

const fp = require('fastify-plugin')

// the use of fastify-plugin is required to be able
// to export the decorators to the outer scope

module.exports = fp(async function (fastify, opts) {
  // console.log("-----------fastify:", fastify)
  fastify.decorate('con', function () {
    return 'hugs'
  })
  fastify.decorate("verifyJWTandLevel", async function (request, reply) {
    // your validation logic
    console.log("==================verifyJWTandLevel");
    //添加服务器装饰器
    // return Promise.reject(new Error('you are not authenticated')); // pass an error if the authentication fails
  });
  fastify.decorate("verifyUserAndPassword", function (request, reply, done) {
    console.log("==================verifyUserAndPassword");
    // your validation logic
    done(); // pass an error if the authentication fails
  });
})

