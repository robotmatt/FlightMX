module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'flightbot',
      password: '!12345678!',
      database: 'flightmx'
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