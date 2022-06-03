const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      name: 'Anton', pass: await bcrypt.hash('123', 10), img: 'https://ca.slack-edge.com/T03994AU2QZ-U03C6M864LR-9d1ef02a3f07-512', role_id: 2, createdAt: new Date(), updatedAt: new Date(),
    },
    {
      name: 'Roman', pass: await bcrypt.hash('123', 10), img: 'https://ca.slack-edge.com/T03994AU2QZ-U03BVKS6TL1-f08c1aa408cf-512', role_id: 1, createdAt: new Date(), updatedAt: new Date(),
    },
    {
      name: 'Ogannes', pass: await bcrypt.hash('123', 10), img: 'https://ca.slack-edge.com/T03994AU2QZ-U03BEQ69VS7-1e0a0ec33d49-512', role_id: 2, createdAt: new Date(), updatedAt: new Date(),
    },
    {
      name: 'Albert', pass: await bcrypt.hash('123', 10), img: 'https://ca.slack-edge.com/T03994AU2QZ-U03BE1CDML3-c3d8fb0b0498-512', role_id: 2, createdAt: new Date(), updatedAt: new Date(),
    }]);
  },

  async down(queryInterface, Sequelize) {
  },
};
