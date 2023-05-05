'use strict';
const fs = require ("fs")


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let data = JSON.parse(fs.readFileSync("./data/ratings.json", "utf-8"))
    // console.log(data);
    data.forEach((el) => {
      el.createdAt = new Date(),
      el.updatedAt = new Date()  
      return el        
    });
    await queryInterface.bulkInsert('Ratings', data)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Ratings', null, {});
  }
};
