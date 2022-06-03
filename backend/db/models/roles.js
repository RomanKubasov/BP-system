const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
  }
  roles.init({
    role: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'roles',
  });
  return roles;
};
