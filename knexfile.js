// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql2',
    pool: {
      min: 2,
      max: 10
    },
    connection: process.env.db,
    migrations: {
      tableName: 'knex_migrations'
    }
  },


  production: {
    client: 'mysql2',
    connection: process.env.db,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
