'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')
const qs = require('qs')


module.exports = async function (fastify, opts) {

 


  // Place here your custom code!
  // fastify.addContentTypeParser("application/x-www-form-urlencoded", function (req, payload, done) {
  //   let body = ''
  //   payload.on('data', function(data){
  //     body += data
  //   })

  //   payload.on('end', function(){
  //     try{
  //       const parse = qs.parse(body)
  //       done(null, parse)

  //     }catch(e){
  //       done(e)
  //     }
  //   })
    
  // })
	// fastify.register(require('fastify-formbody'), {
	// 	parser: str => {
	// 		console.log(str)
	// 		return qs.parse(str);
	// 	}
	// })
	// fastify.register(require('fastify-multipart'))


  //可以如下
  // fastify.addContentTypeParser('application/x-www-form-urlencoded', {parseAs: 'buffer'},(res,body,done) => {
  //   console.log("--------", body.toString())
  //   var parsepara = qs.parse( body.toString() )
  //   console.log(parsepara);
  //   done(null, parsepara )
  // })
  

  fastify.log.info("-------", opts.toString())
  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })



  // // This loads all plugins defined in routes
  // // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    // options: Object.assign({prefix: '/v1'}, opts)
    options: Object.assign({}, opts)
  })


  // fastify.register(require('fastify-mysql'), {
  //   promose: true,
  //   connectionString: 'mysql2://javy:Javy123123@192.168.30.33:3306/tsmile'
  // });
  // fastify.register(require('./plugins/plg_mysql'))

  // fastify.get('/t1', async function (request, reply) {
  //   // reply.send("askdfasdjfkdjsf")
  //   // throw(new Error("hahahahahah----------------"))
  //   fastify.log.info("mysql: ", fastify.mysql.toString())

  //   // const connection = await fastify.mysql.getConnection()
  //   // const [rows, fields] = await connection.query(
  //   //   'SELECT * FROM users'
  //   // )
  //   // connection.release()
  //   // return rows[0]
    
  //   return "aksdjfa;ldksfjasdkfj"
  // })


  // fastify.register(require('./plugins/plg_mysql'))
  // fastify.register(require('./routes/root'))
  
}
