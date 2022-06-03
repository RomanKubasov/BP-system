const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class tasks extends Model {
    static associate({ users, statuses }) {
      this.belongsTo(users, { foreignKey: 'createdByUser_id', as: 'createdByUser' });
      this.belongsTo(users, { foreignKey: 'responsibleUser_id', as: 'responsibleUser' });
      this.belongsTo(statuses, { foreignKey: 'status_id' });
    }
  }
  tasks.init({
    title: DataTypes.STRING,
    text: DataTypes.STRING,
    createdByUser_id: DataTypes.INTEGER,
    responsibleUser_id: DataTypes.INTEGER,
    status_id: DataTypes.INTEGER,
    process_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'tasks',
  });
  return tasks;
};
