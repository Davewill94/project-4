'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('trails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      trail_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      },
      type: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      difficulty: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.FLOAT
      },
      length: {
        type: Sequelize.FLOAT
      },
      location: {
        type: Sequelize.STRING
      },
      lat: {
        type: Sequelize.FLOAT
      },
      lng: {
        type: Sequelize.FLOAT
      },
      userId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('trails');
  }
};