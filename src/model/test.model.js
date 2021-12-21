module.exports = (sequelize, Sequelize) => {
  const Test = requiresequelize.define('test', {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    published: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Test;
};
