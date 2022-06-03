const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tasks', [{
      title: 'Sing "It`s my Life"', text: 'Just take your time, find the track and join John Bon Jovi', createdByUser_id: 2, responsibleUser_id: 4, status_id: 2, createdAt: new Date(), updatedAt: new Date(),
    },
    {
      title: 'Dance', text: 'Choose the dance: Salsa, Cha-cha, Tango... and let`s go!', createdByUser_id: 2, responsibleUser_id: 2, status_id: 2, createdAt: new Date(), updatedAt: new Date(),
    },
    {
      title: 'Draw a picture', text: 'On the picture there should be sun, green forest, small brown bear eating honey. No rain, no even clouds. There will be few birds in the sky. The young boy is waling through the trees and gathering forest flowers', createdByUser_id: 3, responsibleUser_id: 1, status_id: 2, createdAt: new Date(), updatedAt: new Date(),
    },
    {
      title: 'Read "Code da Vinci"', text: 'Read the first 30 pages of the book (printed or e-book)', createdByUser_id: 4, responsibleUser_id: 2, status_id: 2, createdAt: new Date(), updatedAt: new Date(),
    },
    {
      title: 'Sleep at least 8 hours', text: 'Tomorrow is Saturday. Just do it!', createdByUser_id: 2, responsibleUser_id: 3, status_id: 3, createdAt: new Date(), updatedAt: new Date(),
    },
    {
      title: 'Play FIFA', text: 'Call your best friend, sit together on the comfortable sofa in front of TV with 60`, find the old CD with FIFA 2000, where there were Zidane and Maldini. Try to win the tournament playing together, then one more time', createdByUser_id: 1, responsibleUser_id: 4, status_id: 2, createdAt: new Date(), updatedAt: new Date(),
    },
    {
      title: 'Open the window', text: 'It`s summer outside, open the window and breath fresh air', createdByUser_id: 1, responsibleUser_id: 1, status_id: 2, createdAt: new Date(), updatedAt: new Date(),
    },
    {
      title: 'Have lunch', text: 'Decide what do you want for lunch: may be juicy beef burger', createdByUser_id: 3, responsibleUser_id: 2, status_id: 2, createdAt: new Date(), updatedAt: new Date(),
    },
    {
      title: 'Relax', text: 'Take it easy for a few minutes', createdByUser_id: 4, responsibleUser_id: 1, status_id: 2, createdAt: new Date(), updatedAt: new Date(),
    },
    {
      title: 'Code smth', text: 'Relaxed? it`s time to code. You need to know more about React', createdByUser_id: 1, responsibleUser_id: 2, status_id: 3, createdAt: new Date(), updatedAt: new Date(),
    }]);
  },

  async down(queryInterface, Sequelize) {
  },
};
