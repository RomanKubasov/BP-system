module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('statuses', [{
      status: 'draft', createdAt: new Date(), updatedAt: new Date(),
    },
    {
      status: 'open', createdAt: new Date(), updatedAt: new Date(),
    },
    {
      status: 'closed', createdAt: new Date(), updatedAt: new Date(),
    }]);
  },

  async down(queryInterface, Sequelize) {
  },
};
