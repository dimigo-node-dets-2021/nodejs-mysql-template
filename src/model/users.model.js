module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define('users', {
    username: {
      type: Sequelize.STRING,
    },
    pw: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
  });

  return Users;
};
