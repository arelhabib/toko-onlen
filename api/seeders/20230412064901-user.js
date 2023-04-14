"use strict";
const { user } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await user.bulkCreate(
      [
        {
          email: "admin@mail.com",
          password: "adminpass",
          roleId: 1,
        },
        // ya kalo perlu
        // {
        //   email: "seller@mail.com",
        //   password: "sellerpass",
        //   roleId: 2,
        // },
        {
          username: "user",
          email: "user@mail.com",
          password: "userpass",
        },
      ],
      { individualHooks: true }
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
