module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('roles', [{
      role: 'admin', createdAt: new Date(), updatedAt: new Date(),
    },
    {
      role: 'user', createdAt: new Date(), updatedAt: new Date(),
    }]);
  },

  async down(queryInterface, Sequelize) {
  },
};
