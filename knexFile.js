//Dependencies
require('dotenv').config();

module.exports = {
  development: {
    client: `${process.env.KNEX_CLIENT}`,
    connection: {
      host: `${process.env.KNEX_HOST}`,
      user: `${process.env.KNEX_USER}`,
      password: `${process.env.KNEX_PASSWORD}`,
      database: `${process.env.KNEX_DATABASE}`
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/orm/knex/migrations`
    },
    seeds: {
      directory: `${__dirname}/orm/knex/seeds`
    }
  }
};