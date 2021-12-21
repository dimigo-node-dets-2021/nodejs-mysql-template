import config from '../config.js';

const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.database.DB, config.database.USER, config.database.PASSWORD, {
  host: config.database.HOST,
  dialect: config.database.dialect,
  operatorsAliases: false,

  pool: {
    max: config.database.pool.max,
    min: config.database.pool.min,
    acquire: config.database.pool.acquire,
    idle: config.database.pool.idle,
  },
});

export const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tests = require('./test.model.js')(sequelize, Sequelize);
