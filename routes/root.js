"use strict";
const _ = require("lodash");

module.exports = async function (fastify, opts) {
  // fastify.addHook("preHandler", async (request, reply) => {
  //   await fastify.auth([fastify.verifyJWTandLevel, fastify.verifyUserAndPassword]);
  // });

  fastify.addHook("preHandler", fastify.auth([fastify.verifyJWTandLevel, fastify.verifyUserAndPassword], { relation: "and" }));

  fastify.get("/", async function (request, reply) {
    console.log("body:", request.body);
    console.log("query:", request.query);
    console.log("params:", request.params);
    console.log("headers:", request.headers);
    console.log("raw:", request.raw);
    console.log("server:", request.server);
    console.log("request.id:", request.id);
    console.log("ip:", request.ip);
    console.log("ips:", request.ips);
    console.log("hostname:", request.hostname);
    console.log("protocol:", request.protocol);
    // request.log.info('some info:', this.con())
    return { root: true };
  });
  fastify.post("/", async function (request, reply) {
    // return { root: "adfpiawerkj"}

    return { root: request.body };
  });

  fastify.get("/t1", async function (request, reply) {
    // reply.send("askdfasdjfkdjsf")
    // throw(new Error("hahahahahah----------------"))
    // const connection = await fastify.mysql.getConnection()

    const [rows, fields] = await fastify.mysql.query("SELECT * FROM user");
    // connection.release()
    return rows[0];

    fastify.log.info("mysql: ", fastify.mysql);
    return "aksdjfa;ldksfjasdkfj";
  });

  fastify.get("/user/:id", async (req, reply) => {
    const [rows, fields] = await fastify.mysql.execute(
      "SELECT * FROM user WHERE id=?",
      [req.params.id]
      // function onResult (err, result) {
      //   reply.send(err || result)
      // }
    );
    return { rows: rows[0] };
  });

  fastify.get("/users", async function (req, reply) {
    console.log(fastify.mysql);
    console.log("con:", this.con());
    const connection = await fastify.mysql.getConnection();
    const [rows, fields] = await connection.query({
      sql: "select 1 as foo, 2 as foo",
      rowsAsArray: true,
    });
    // connection.release()
    return { rows: _.flatten(rows) };
  });

  fastify.get(
    "/posts",
    {
      schema: {
        response: {
          200: {
            type: "object",
            properties: {
              rows: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    id: { type: "integer" },
                    title: { type: "string" },
                  },
                },
              },
            },
          },
        },
      },
    },
    async function (req, reply) {
      const res = await this.db("posts").select("id", "title");

      return { rows: res };
    }
  );

  fastify.post("/posts", async (req, reply) => {
    let res = await fastify.db('posts').insert(req.body)
    return {body: req.body, res: res};
  });
};
