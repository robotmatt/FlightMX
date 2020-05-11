//Dependencies
require('dotenv').config();

// Global Constants
const knexRemoteDev = false; // true to use (Jaws production mySQL instance)

knexLocal = {
  development: {
    client: `${process.env.KNEX_CLIENT_LOCAL}`,
    connection: {
      host: `${process.env.KNEX_HOST_LOCAL}`,
      user: `${process.env.KNEX_USER_LOCAL}`,
      password: `${process.env.KNEX_PASSWORD_LOCAL}`,
      database: `${process.env.KNEX_DATABASE_LOCAL}`
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/orm/knex/migrations/local`
    },
    seeds: {
      directory: `${__dirname}/orm/knex/seeds`
    }
  }
};
knexRemote = {
  production: {
    client: `${process.env.KNEX_CLIENT_REMOTE}`,
    connection: {
      host: `${process.env.KNEX_HOST_REMOTE}`,
      user: `${process.env.KNEX_USER_REMOTE}`,
      password: `${process.env.KNEX_PASSWORD_REMOTE}`,
      database: `${process.env.KNEX_DATABASE_REMOTE}`
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/orm/knex/migrations/remote`
    },
    seeds: {
      directory: `${__dirname}/orm/knex/seeds`
    }
  }
};

knexRemoteDev ? module.exports = knexRemote : module.exports = knexLocal;