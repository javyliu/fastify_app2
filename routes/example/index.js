'use strict'


module.exports = async function (fastify, opts) {
  fastify.get('/', {preHandler: fastify.auth([
    (request, reply, done) => { console.log('executed 1'); done() },
    (request, reply, done) => { console.log('executed 2'); done() },
    // (request, reply, done) => { console.log('executed 3'); done(new Error('you are not authenticated')) },
    // (request, reply, done) => { console.log('executed 4'); done() },
    // (request, reply, done) => { console.log('executed 5'); done(new Error('you shall not pass')) }
  ],{relation: 'and'})},async function (request, reply) {
    // const connection = await fastify.mysql.getConnection();
    // fastify.log.info("mysql connection:")
    // // const [rows, fields] = await connection.query("select * from user");
    // // connection.release();
    // fastify.mysql.query(
    //   'SELECT * FROM user ',
    //   function onResult (err, result) {
    //     reply.send(err || result)
    //   }
    // )
    // return fields;
    var [rows, fields] = await fastify.mysql.query("select * from user")
    console.log(fastify.db)
    return {'this is an example2': rows}
  })
  fastify.get('/:v1', async function (request, reply) {
    // reply.send("askdfasdjfkdjsf")
    return "aksdjfa;ldksfjasdkfj"
  })


}
