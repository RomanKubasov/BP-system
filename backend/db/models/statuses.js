const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class statuses extends Model {
    static associate({ tasks }) {
      this.hasMany(tasks, { foreignKey: 'status_id' });
    }
  }
  statuses.init({
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'statuses',
  });
  return statuses;
};
