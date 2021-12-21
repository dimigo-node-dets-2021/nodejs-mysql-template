export default {
  port: 8080,
  jwt_secret: 'elalrh',
  database: {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'xxxxx',
    DB: 'test',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
