'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')
const qs = require('qs')


module.exports = async function (fastify, opts) {
 

//  fastify.setErrorHandler(function (error, request, reply) {
//   // Log error
//   this.log.error(error)
//   // Send error response
//   reply.status(409).send({ ok: false })
// })
fastify.ready(() => {
  console.log(fastify.printRoutes())
})

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
  
  
  fastify.register(require('fastify-formbody'))
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



}
