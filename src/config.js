export default {
  port: 8080,
  jwt_secret: 'elalrh',
  database: {
    HOST: '20.196.206.50',
    PORT: '3333',
    USER: 'root',
    PASSWORD: 'hjww0904',
    DB: 'dets_test',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
