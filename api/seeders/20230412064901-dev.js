"use strict";
const fs = require("fs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categories", [
      {
        name: "Fashion Pria",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fashion Wanita",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fashion Muslim",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fashion Anak",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    const img1 = await fs.promises.readFile("./seeders/pria/4.jpg");
    const img2 = await fs.promises.readFile("./seeders/pria/3.jpg");
    const img3 = await fs.promises.readFile("./seeders/wanita/1.jpg");
    const img4 = await fs.promises.readFile("./seeders/wanita/5.jpg");
    await queryInterface.bulkInsert("products", [
      {
        name: "Casella Baju Koko Pria Lengan Pendek",
        imageName: null,
        imageData: img1,
        price: 149950,
        stock: 3,
        description:
          "Casella Baju Koko Pria Lengan Pendek Exclusive Premium Quality HV - 4931 Mocca Grey, S",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Celana SIRWAL Pria",
        imageName: null,
        imageData: img2,
        price: 189900,
        stock: 2,
        description:
          "Celana SIRWAL Pria/ fashion muslim/ Pakaian muslim import Quality - Abu-abu, M",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "BAJU GAMIS DRESS MAXI",
        imageName: null,
        imageData: img3,
        price: 170000,
        stock: 10,
        description:
          "COD benecia dress FASHION BAJU GAMIS DRESS MAXI SETELAN MUSLIM WANITA",
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Baju Gamis Bahan Katun Shakila",
        imageName: null,
        imageData: img4,
        price: 117000,
        stock: 0,
        description:
          "Seena - GAMIS SAKHILA Baju Gamis Bahan Katun Shakila Fashion Wanita Mo - Lilac, AllSizeLD112",
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sarung Celana",
        imageName: null,
        imageData: null,
        price: 158000,
        stock: 5,
        description: "",
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
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
