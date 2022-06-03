const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class tasklinks extends Model {
  }
  tasklinks.init({
    doTask_id: DataTypes.INTEGER,
    afterTask_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'tasklinks',
  });
  return tasklinks;
};
