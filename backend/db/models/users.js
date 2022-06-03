const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate({ tasks }) {
      this.hasMany(tasks, { foreignKey: 'createdByUser_id', as: 'createdByUser' });
      this.hasMany(tasks, { foreignKey: 'responsibleUser_id', as: 'responsibleUser' });
    }
  }
  users.init({
    name: DataTypes.STRING,
    pass: DataTypes.STRING,
    img: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};
