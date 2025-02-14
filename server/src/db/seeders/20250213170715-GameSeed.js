'use strict';

const question = require('../models/question');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          username: 'Валера',
        }
      ]
      , {});
    await queryInterface.bulkInsert(
      'Topics',
      [
        {
          title: 'Бобровые струи',
          user_id: 1,
        }
      ]
      , {});
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          question: 'Сколько?',
          answer:'Столько',
          topic_id: 1,
        }
      ]
      , {});


  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Users', null, {});
     await queryInterface.bulkDelete('Topics', null, {});
     await queryInterface.bulkDelete('Questions', null, {});  
  }
};
