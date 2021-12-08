'use strict'


module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
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
    return 'this is an example2'
  })
  fastify.get('/:v1', async function (request, reply) {
    // reply.send("askdfasdjfkdjsf")
    return "aksdjfa;ldksfjasdkfj"
  })


}
