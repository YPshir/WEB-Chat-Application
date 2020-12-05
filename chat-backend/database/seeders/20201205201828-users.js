'use strict';
const bcrypt = require('bcrypt');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Users',[
      {
        firstName:"shir",
        lastName:"izhak",
        email:"shir@gmail.com",
        password:bcrypt.hashSync('secret',10),
        gender:"female"
      },
      {
        firstName:"dana",
        lastName:"levi",
        email:"dana@gmail.com",
        password:"secret",
        gender:"female"
      },
      {
        firstName:"dani",
        lastName:"cohen",
        email:"dani@gmail.com",
        password:"secret",
        gender:"male"
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Users', null, {});
  }
};
