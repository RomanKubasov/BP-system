const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class processes extends Model {
  }
  processes.init({
    name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'processes',
  });
  return processes;
};
